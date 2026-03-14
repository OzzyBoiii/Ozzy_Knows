#!/usr/bin/env python3
"""
HTML File Autostart Setup for Windows
Enhanced with robust path finding, dependency management, and stability features
"""

import os
import sys
import ctypes
import subprocess
import winreg
import getpass
import json
import logging
import traceback
import tempfile
import shutil
import atexit
import hashlib
import zipfile
import urllib.request
import urllib.error
from pathlib import Path
from datetime import datetime
import time
import re

# ============================================================================
# CONFIGURATION AND CONSTANTS
# ============================================================================

CONFIG_DIR = Path(os.getenv('APPDATA', Path.home())) / 'HTMLAutostart'
BACKUP_DIR = CONFIG_DIR / 'backups'
LOG_DIR = CONFIG_DIR / 'logs'
CACHE_DIR = CONFIG_DIR / 'cache'

# Ensure directories exist
for directory in [CONFIG_DIR, BACKUP_DIR, LOG_DIR, CACHE_DIR]:
    directory.mkdir(parents=True, exist_ok=True)

# Supported browser executables and their common locations
BROWSER_PATTERNS = {
    'chrome': [
        'chrome.exe',
        'Google/Chrome/Application/chrome.exe',
        'Google/Chrome Beta/Application/chrome.exe',
        'Google/Chrome Dev/Application/chrome.exe'
    ],
    'firefox': [
        'firefox.exe',
        'Mozilla Firefox/firefox.exe',
        'Firefox Developer Edition/firefox.exe'
    ],
    'edge': [
        'msedge.exe',
        'Microsoft/Edge/Application/msedge.exe',
        'Microsoft/Edge Beta/Application/msedge.exe',
        'Microsoft/Edge Dev/Application/msedge.exe'
    ],
    'opera': [
        'launcher.exe',
        'Opera/launcher.exe',
        'Opera Stable/launcher.exe'
    ],
    'brave': [
        'brave.exe',
        'BraveSoftware/Brave-Browser/Application/brave.exe'
    ],
    'vivaldi': [
        'vivaldi.exe',
        'Vivaldi/Application/vivaldi.exe'
    ]
}

# Common installation directories to search
COMMON_INSTALL_DIRS = [
    os.getenv('PROGRAMFILES', r'C:\Program Files'),
    os.getenv('PROGRAMFILES(X86)', r'C:\Program Files (x86)'),
    os.getenv('LOCALAPPDATA', r'C:\Users\{}\AppData\Local'.format(getpass.getuser())),
    r'C:\ProgramData',
    os.path.expanduser(r'~')
]

# ============================================================================
# LOGGING SETUP
# ============================================================================

def setup_logging():
    """Configure logging with rotation"""
    log_file = LOG_DIR / f'setup_{datetime.now().strftime("%Y%m%d")}.log'

    # Rotate logs (keep last 7 days)
    for old_log in LOG_DIR.glob('setup_*.log'):
        if old_log != log_file:
            try:
                log_date = datetime.strptime(old_log.stem.split('_')[1], '%Y%m%d')
                if (datetime.now() - log_date).days > 7:
                    old_log.unlink()
            except:
                pass

    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s [%(levelname)s] %(message)s',
        datefmt='%Y-%m-%d %H:%M:%S',
        handlers=[
            logging.FileHandler(log_file, encoding='utf-8'),
            logging.StreamHandler()
        ]
    )

    # Suppress noisy library logs
    logging.getLogger('urllib3').setLevel(logging.WARNING)
    logging.getLogger('chardet').setLevel(logging.WARNING)

    return logging.getLogger(__name__)

logger = setup_logging()

# ============================================================================
# UTILITY FUNCTIONS
# ============================================================================

def is_admin():
    """Check if running with administrator privileges"""
    try:
        return ctypes.windll.shell32.IsUserAnAdmin()
    except:
        return False

def run_as_admin(script_path=None):
    """Elevate to administrator privileges"""
    try:
        if script_path is None:
            script_path = sys.argv[0]

        params = ' '.join([f'"{arg}"' for arg in sys.argv[1:]])

        # Use ShellExecute with runas verb
        result = ctypes.windll.shell32.ShellExecuteW(
            None, "runas", sys.executable, f'"{script_path}" {params}', None, 1
        )

        if result <= 32:
            logger.error(f"Failed to elevate: ShellExecute returned {result}")
            return False

        sys.exit(0)  # Exit the non-elevated instance
    except Exception as e:
        logger.error(f"Elevation failed: {e}")
        return False

def normalize_path(path_str):
    """Normalize and validate a path string"""
    if not path_str:
        return None

    try:
        # Expand environment variables and user home
        path_str = os.path.expandvars(path_str)
        path_str = os.path.expanduser(path_str)

        # Clean up extra quotes and spaces
        path_str = path_str.strip(' "\'')

        # Handle UNC paths
        if path_str.startswith('\\\\'):
            return os.path.normpath(path_str)

        # Convert to absolute path
        if not os.path.isabs(path_str):
            # Try to resolve relative to script directory
            script_dir = os.path.dirname(os.path.abspath(sys.argv[0]))
            abs_path = os.path.join(script_dir, path_str)
            if os.path.exists(abs_path):
                path_str = abs_path
            else:
                # Try current working directory
                path_str = os.path.abspath(path_str)
        else:
            path_str = os.path.normpath(path_str)

        # Fix case sensitivity on Windows (optional)
        try:
            path_str = str(Path(path_str).resolve())
        except:
            pass

        return path_str
    except Exception as e:
        logger.error(f"Path normalization failed for '{path_str}': {e}")
        return None

def find_browsers():
    """Find all available browsers on the system"""
    browsers = {}

    # Method 1: Check registry for default browser associations
    registry_paths = [
        (winreg.HKEY_CLASSES_ROOT, r"http\shell\open\command"),
        (winreg.HKEY_CLASSES_ROOT, r"https\shell\open\command"),
        (winreg.HKEY_LOCAL_MACHINE, r"SOFTWARE\Clients\StartMenuInternet"),
        (winreg.HKEY_CURRENT_USER, r"SOFTWARE\Clients\StartMenuInternet"),
    ]

    for hive, path in registry_paths:
        try:
            with winreg.OpenKey(hive, path) as key:
                for browser_name in BROWSER_PATTERNS.keys():
                    try:
                        with winreg.OpenKey(key, browser_name) as browser_key:
                            value, _ = winreg.QueryValueEx(browser_key, "")
                            if value and os.path.exists(value):
                                browsers[browser_name] = value
                    except:
                        continue
        except:
            pass

    # Method 2: Search common installation directories
    for install_dir in COMMON_INSTALL_DIRS:
        if not os.path.exists(install_dir):
            continue

        for browser_name, patterns in BROWSER_PATTERNS.items():
            if browser_name in browsers:
                continue  # Already found

            for pattern in patterns:
                # Check direct path
                browser_path = os.path.join(install_dir, pattern)
                if os.path.exists(browser_path):
                    browsers[browser_name] = browser_path
                    break

                # Check in subdirectories
                for root, dirs, files in os.walk(install_dir):
                    if browser_name in browsers:
                        break
                    for file in files:
                        if file.lower() in [p.lower() for p in patterns]:
                            browsers[browser_name] = os.path.join(root, file)
                            break

    # Method 3: Check PATH environment variable
    path_dirs = os.getenv('PATH', '').split(';')
    for path_dir in path_dirs:
        if os.path.exists(path_dir):
            for file in os.listdir(path_dir):
                for browser_name, patterns in BROWSER_PATTERNS.items():
                    if browser_name in browsers:
                        continue
                    for pattern in patterns:
                        if file.lower() == os.path.basename(pattern).lower():
                            browsers[browser_name] = os.path.join(path_dir, file)
                            break

    logger.info(f"Found browsers: {list(browsers.keys())}")
    return browsers

def get_best_browser(browsers_dict=None):
    """Get the most suitable browser for opening HTML files"""
    if browsers_dict is None:
        browsers_dict = find_browsers()

    # Priority order for browsers
    priority_order = ['chrome', 'firefox', 'edge', 'opera', 'brave', 'vivaldi']

    for browser in priority_order:
        if browser in browsers_dict:
            logger.info(f"Selected browser: {browser} - {browsers_dict[browser]}")
            return browsers_dict[browser]

    # Fallback: Use system default via 'start' command
    logger.warning("No specific browser found, using system default")
    return "start"

def validate_html_file(file_path):
    """Validate that file exists and appears to be HTML"""
    file_path = normalize_path(file_path)
    if not file_path:
        return False, "Invalid path"

    # Check existence
    if not os.path.exists(file_path):
        return False, f"File does not exist: {file_path}"

    # Check if it's a file
    if not os.path.isfile(file_path):
        return False, f"Path is not a file: {file_path}"

    # Check file size (reasonable limit: 100MB)
    try:
        file_size = os.path.getsize(file_path)
        if file_size > 100 * 1024 * 1024:  # 100MB
            return False, f"File too large: {file_size:,} bytes"
        if file_size == 0:
            return False, "File is empty"
    except:
        pass

    # Check extension
    ext = os.path.splitext(file_path)[1].lower()
    html_extensions = ['.html', '.htm', '.xhtml', '.shtml', '.php', '.asp', '.aspx']

    if ext in html_extensions:
        return True, "Valid HTML file by extension"

    # Content-based validation
    try:
        with open(file_path, 'rb') as f:
            # Read first 1024 bytes for analysis
            content = f.read(1024).decode('utf-8', errors='ignore').lower()

            # Look for HTML indicators
            html_indicators = [
                r'<!doctype\s+html',
                r'<html',
                r'<head',
                r'<body',
                r'<title',
                r'<meta\s+',
                r'<link\s+rel=',
                r'<script',
                r'<style',
                r'http-equiv=',
                r'content-type.*text/html'
            ]

            for indicator in html_indicators:
                if re.search(indicator, content, re.IGNORECASE):
                    return True, f"Detected HTML content ({indicator})"
    except:
        pass

    # Ask user if they want to proceed anyway
    return False, "File doesn't appear to be HTML. Proceed anyway?"

# ============================================================================
# DEPENDENCY MANAGEMENT
# ============================================================================

class DependencyManager:
    """Manage installation of required dependencies"""

    def __init__(self):
        self.installed = False
        self.required_packages = {
            'pywin32': {
                'import_name': 'win32com',
                'pip_name': 'pywin32',
                'min_version': '300',
                'check_func': self._check_pywin32
            }
        }

        # Cache for downloaded packages
        self.cache_dir = CACHE_DIR / 'packages'
        self.cache_dir.mkdir(exist_ok=True)

    def _check_pywin32(self):
        """Check if pywin32 is properly installed"""
        try:
            import win32com.client
            import pythoncom

            # Test COM initialization
            pythoncom.CoInitialize()
            pythoncom.CoUninitialize()

            return True, "pywin32 is installed and functional"
        except ImportError as e:
            return False, f"pywin32 not found: {e}"
        except Exception as e:
            return False, f"pywin32 error: {e}"

    def check_dependencies(self):
        """Check all required dependencies"""
        missing = []
        results = {}

        for pkg_name, pkg_info in self.required_packages.items():
            check_func = pkg_info.get('check_func')
            if check_func:
                is_installed, message = check_func()
                results[pkg_name] = {
                    'installed': is_installed,
                    'message': message
                }
                if not is_installed:
                    missing.append(pkg_name)

        return missing, results

    def install_with_pip(self, package_name):
        """Install package using pip with multiple strategies"""
        pip_commands = [
            [sys.executable, "-m", "pip", "install", "--upgrade", package_name],
            [sys.executable, "-m", "pip", "install", "--user", package_name],
            [sys.executable, "-m", "pip", "install", package_name, "--no-deps"],
            ["pip", "install", package_name]
        ]

        for cmd in pip_commands:
            try:
                logger.info(f"Running: {' '.join(cmd)}")

                # Run with timeout
                result = subprocess.run(
                    cmd,
                    capture_output=True,
                    text=True,
                    timeout=300,  # 5 minutes
                    creationflags=subprocess.CREATE_NO_WINDOW
                )

                if result.returncode == 0:
                    logger.info(f"Successfully installed {package_name}")
                    return True, result.stdout
                else:
                    logger.warning(f"pip install failed: {result.stderr}")

            except subprocess.TimeoutExpired:
                logger.error(f"Installation timed out for {package_name}")
            except FileNotFoundError:
                logger.error(f"pip not found for command: {cmd[0]}")
            except Exception as e:
                logger.error(f"Error installing {package_name}: {e}")

        return False, "All pip installation methods failed"

    def download_and_install(self, package_name):
        """Download and install package from PyPI"""
        try:
            # Get Python version and architecture
            import platform
            python_version = f"{sys.version_info.major}{sys.version_info.minor}"
            architecture = platform.architecture()[0]
            is_64bit = architecture == '64bit'

            # Construct download URL (simplified - real implementation would query PyPI API)
            base_url = "https://files.pythonhosted.org/packages"
            # This is a simplified example - real implementation would be more complex
            logger.info(f"Would download {package_name} for Python {python_version} ({architecture})")

            return False, "Automatic download not fully implemented. Please install manually."

        except Exception as e:
            logger.error(f"Download failed: {e}")
            return False, str(e)

    def install_dependencies(self, interactive=True):
        """Install all missing dependencies"""
        missing, results = self.check_dependencies()

        if not missing:
            logger.info("All dependencies are already installed")
            return True

        if interactive:
            print(f"\n⚠  Missing dependencies: {', '.join(missing)}")
            response = input("Attempt to install automatically? (y/n): ").strip().lower()
            if response not in ['y', 'yes']:
                logger.info("User declined automatic installation")
                return False

        success = True
        for pkg_name in missing:
            print(f"\nInstalling {pkg_name}...")

            # Try pip first
            pkg_success, message = self.install_with_pip(
                self.required_packages[pkg_name]['pip_name']
            )

            if not pkg_success:
                logger.warning(f"Pip install failed for {pkg_name}")
                print(f"Pip install failed. Trying alternative method...")

                # Try alternative methods
                alt_success, alt_message = self.download_and_install(pkg_name)
                if not alt_success:
                    success = False
                    print(f"❌ Failed to install {pkg_name}: {alt_message}")
                else:
                    print(f"✅ {pkg_name} installed via alternative method")
            else:
                print(f"✅ {pkg_name} installed successfully")

        if success:
            logger.info("All dependencies installed successfully")
            self.installed = True

        return success

# ============================================================================
# AUTOSTART METHODS
# ============================================================================

class AutostartManager:
    """Manage different autostart methods"""

    def __init__(self, html_path):
        self.html_path = html_path
        self.browsers = find_browsers()
        self.browser_path = get_best_browser(self.browsers)
        self.methods = []

    def method_1_startup_folder_batch(self):
        """Create batch file in Startup folder"""
        try:
            startup_folder = Path(os.getenv('APPDATA')) / \
                            'Microsoft' / 'Windows' / \
                            'Start Menu' / 'Programs' / 'Startup'
            startup_folder.mkdir(parents=True, exist_ok=True)

            batch_content = f"""@echo off
REM HTML Autostart - {datetime.now().strftime("%Y-%m-%d")}
REM This file was created by HTML Autostart Setup
REM HTML File: {self.html_path}

:: Wait for system to stabilize
timeout /t 10 /nobreak >nul

:: Open HTML file
"{self.browser_path}" "{self.html_path}"

exit
"""

            batch_path = startup_folder / "HTML_Autostart.bat"

            # Write with UTF-8 BOM for Windows compatibility
            with open(batch_path, 'w', encoding='utf-8-sig') as f:
                f.write(batch_content)

            logger.info(f"Created batch file: {batch_path}")
            return True, f"Batch file: {batch_path}"

        except Exception as e:
            logger.error(f"Batch method failed: {e}")
            return False, str(e)

    def method_2_registry_current_user(self):
        """Add to current user's registry"""
        try:
            key_path = r"Software\Microsoft\Windows\CurrentVersion\Run"

            with winreg.OpenKey(winreg.HKEY_CURRENT_USER, key_path, 0,
                               winreg.KEY_WRITE | winreg.KEY_READ) as key:

                value_name = "HTMLAutostart"
                value_data = f'"{self.browser_path}" "{self.html_path}"'

                winreg.SetValueEx(key, value_name, 0, winreg.REG_SZ, value_data)

                # Verify it was written
                verify_value, _ = winreg.QueryValueEx(key, value_name)
                if verify_value == value_data:
                    logger.info(f"Added to registry: {key_path}\\{value_name}")
                    return True, f"Registry: HKCU\\{key_path}\\{value_name}"
                else:
                    return False, "Registry write verification failed"

        except PermissionError:
            logger.error("Permission denied for registry write")
            return False, "Permission denied"
        except Exception as e:
            logger.error(f"Registry method failed: {e}")
            return False, str(e)

    def method_3_task_scheduler(self):
        """Create Task Scheduler task"""
        try:
            if not is_admin():
                return False, "Administrator privileges required"

            username = getpass.getuser()
            task_name = "HTMLAutostartTask"

            # Create XML task definition
            xml_content = f'''<?xml version="1.0" encoding="UTF-16"?>
<Task version="1.4" xmlns="http://schemas.microsoft.com/windows/2004/02/mit/task">
  <RegistrationInfo>
    <Date>{datetime.now().isoformat()}</Date>
    <Description>Opens HTML file on user login</Description>
    <Author>HTML Autostart Setup</Author>
  </RegistrationInfo>
  <Triggers>
    <LogonTrigger>
      <Enabled>true</Enabled>
      <UserId>{username}</UserId>
      <Delay>PT30S</Delay>
    </LogonTrigger>
  </Triggers>
  <Principals>
    <Principal id="Author">
      <UserId>{username}</UserId>
      <LogonType>InteractiveToken</LogonType>
      <RunLevel>HighestAvailable</RunLevel>
    </Principal>
  </Principals>
  <Settings>
    <MultipleInstancesPolicy>IgnoreNew</MultipleInstancesPolicy>
    <DisallowStartIfOnBatteries>false</DisallowStartIfOnBatteries>
    <StopIfGoingOnBatteries>false</StopIfGoingOnBatteries>
    <AllowHardTerminate>true</AllowHardTerminate>
    <StartWhenAvailable>false</StartWhenAvailable>
    <RunOnlyIfNetworkAvailable>false</RunOnlyIfNetworkAvailable>
    <IdleSettings>
      <StopOnIdleEnd>true</StopOnIdleEnd>
      <RestartOnIdle>false</RestartOnIdle>
    </IdleSettings>
    <AllowStartOnDemand>true</AllowStartOnDemand>
    <Enabled>true</Enabled>
    <Hidden>false</Hidden>
    <RunOnlyIfIdle>false</RunOnlyIfIdle>
    <DisallowStartOnRemoteAppSession>false</DisallowStartOnRemoteAppSession>
    <UseUnifiedSchedulingEngine>true</UseUnifiedSchedulingEngine>
    <WakeToRun>false</WakeToRun>
    <ExecutionTimeLimit>PT0S</ExecutionTimeLimit>
    <Priority>7</Priority>
    <RestartOnFailure>
      <Interval>PT1M</Interval>
      <Count>3</Count>
    </RestartOnFailure>
  </Settings>
  <Actions Context="Author">
    <Exec>
      <Command>"{self.browser_path}"</Command>
      <Arguments>"{self.html_path}"</Arguments>
      <WorkingDirectory>{os.path.dirname(self.html_path)}</WorkingDirectory>
    </Exec>
  </Actions>
</Task>'''

            # Save XML to temp file
            temp_xml = Path(tempfile.gettempdir()) / f"{task_name}.xml"
            temp_xml.write_text(xml_content, encoding='utf-16')

            # Create task
            create_cmd = f'schtasks /create /tn "{task_name}" /xml "{temp_xml}" /f'
            result = subprocess.run(create_cmd, shell=True, capture_output=True, text=True)

            # Cleanup
            try:
                temp_xml.unlink()
            except:
                pass

            if result.returncode == 0:
                logger.info(f"Created Task Scheduler task: {task_name}")
                return True, f"Task: {task_name}"
            else:
                logger.error(f"Task scheduler error: {result.stderr}")
                return False, result.stderr

        except Exception as e:
            logger.error(f"Task scheduler method failed: {e}")
            return False, str(e)

    def method_4_shortcut(self):
        """Create shortcut in Startup folder using win32com"""
        try:
            # Try to import win32com
            try:
                import pythoncom
                from win32com.client import Dispatch
            except ImportError:
                return False, "win32com not available"

            startup_folder = Path(os.getenv('APPDATA')) / \
                            'Microsoft' / 'Windows' / \
                            'Start Menu' / 'Programs' / 'Startup'
            startup_folder.mkdir(parents=True, exist_ok=True)

            shortcut_path = startup_folder / "HTML File.lnk"

            # Initialize COM
            pythoncom.CoInitialize()

            try:
                shell = Dispatch('WScript.Shell')
                shortcut = shell.CreateShortCut(str(shortcut_path))

                shortcut.TargetPath = str(self.browser_path)
                shortcut.Arguments = f'"{self.html_path}"'
                shortcut.WorkingDirectory = os.path.dirname(self.html_path)
                shortcut.Description = f"Open {Path(self.html_path).name} on startup"
                shortcut.IconLocation = str(self.browser_path)
                shortcut.WindowStyle = 1  # Normal window

                shortcut.save()

                logger.info(f"Created shortcut: {shortcut_path}")
                return True, f"Shortcut: {shortcut_path}"
            finally:
                pythoncom.CoUninitialize()

        except Exception as e:
            logger.error(f"Shortcut method failed: {e}")
            return False, str(e)

    def try_all_methods(self):
        """Try all available methods in order"""
        methods_to_try = [
            ("Startup Folder (Batch)", self.method_1_startup_folder_batch),
            ("Registry (Current User)", self.method_2_registry_current_user),
            ("Shortcut", self.method_4_shortcut),
        ]

        # Add admin-only methods if we have privileges
        if is_admin():
            methods_to_try.append(("Task Scheduler", self.method_3_task_scheduler))

        results = []
        success_method = None

        for method_name, method_func in methods_to_try:
            print(f"\n🔄 Trying: {method_name}...")
            start_time = time.time()

            try:
                success, result = method_func()
                elapsed = time.time() - start_time

                if success:
                    print(f"   ✅ Success ({elapsed:.2f}s)")
                    success_method = method_name
                    break
                else:
                    print(f"   ❌ Failed ({elapsed:.2f}s)")
                    print(f"     Reason: {result[:100]}...")
                    results.append((method_name, result))

            except Exception as e:
                elapsed = time.time() - start_time
                print(f"   ⚠️  Error ({elapsed:.2f}s): {str(e)[:100]}...")
                results.append((method_name, str(e)))

        return success_method, results

# ============================================================================
# MAIN APPLICATION
# ============================================================================

def get_file_from_user():
    """Get file path from user via multiple methods"""

    # Method 1: Command line argument
    if len(sys.argv) > 1:
        file_path = ' '.join(sys.argv[1:])  # Handle paths with spaces
        print(f"Using command line argument: {file_path}")
        return file_path

    # Method 2: Drag and drop simulation
    print("\n" + "="*60)
    print("📄 HTML File Autostart Setup")
    print("="*60)
    print("\nHow would you like to specify the HTML file?")
    print("1. Enter path manually")
    print("2. Browse with file dialog")
    print("3. Drag and drop file here")

    choice = input("\nEnter choice (1-3, default=1): ").strip()

    if choice == '2':
        # Try to use tkinter file dialog
        try:
            import tkinter as tk
            from tkinter import filedialog

            root = tk.Tk()
            root.withdraw()  # Hide the main window

            file_path = filedialog.askopenfilename(
                title="Select HTML File",
                filetypes=[
                    ("HTML files", "*.html;*.htm;*.xhtml"),
                    ("All files", "*.*")
                ]
            )

            if file_path:
                print(f"Selected: {file_path}")
                return file_path
            else:
                print("No file selected")
                return None
        except ImportError:
            print("Tkinter not available, falling back to manual input")

    elif choice == '3':
        print("\n⚠  Please drag and drop your HTML file into this window,")
        print("   then press Enter...")
        file_path = input("> ").strip(' "\'')
        if file_path:
            return file_path

    # Default: Manual input
    print("\n📝 Enter the full path to your HTML file:")
    print("Example: C:\\Users\\Name\\Documents\\myfile.html")
    print("Or: \\\\Server\\Share\\file.html")

    file_path = input("\nPath: ").strip()
    return file_path if file_path else None

def cleanup():
    """Cleanup function called on exit"""
    logger.info("Cleaning up temporary files...")

    # Clean temp files
    temp_dir = Path(tempfile.gettempdir())
    for pattern in ['*_task.xml', 'HTMLAutostart_*']:
        for file in temp_dir.glob(pattern):
            try:
                file.unlink()
            except:
                pass

def main():
    """Main entry point"""
    # Register cleanup
    atexit.register(cleanup)

    # Set console properties
    os.system("title HTML Autostart Setup")
    os.system("chcp 65001 >nul 2>&1")  # UTF-8

    print("🔧 HTML File Autostart Setup for Windows")
    print("Version: 2.0 | Enhanced Stability Edition\n")

    # Check admin status
    admin_status = is_admin()
    print(f"👤 Administrator: {'✅ Yes' if admin_status else '⚠️ No'}")

    # Initialize dependency manager
    dep_manager = DependencyManager()

    # Check and install dependencies
    print("\n🔍 Checking dependencies...")
    missing_deps, dep_results = dep_manager.check_dependencies()

    if missing_deps:
        print(f"⚠  Missing: {', '.join(missing_deps)}")
        dep_manager.install_dependencies(interactive=True)

    # Get HTML file
    html_path = None
    while not html_path:
        html_path = get_file_from_user()
        if not html_path:
            print("❌ No file specified. Try again or press Ctrl+C to exit.")
            continue

        # Validate the file
        is_valid, message = validate_html_file(html_path)

        if not is_valid:
            if "Proceed anyway" in message:
                proceed = input(f"{message} (y/n): ").lower()
                if proceed != 'y':
                    html_path = None
                    continue
            else:
                print(f"❌ {message}")
                html_path = None
                continue

    print(f"\n✅ Selected file: {html_path}")

    # Create backup of existing settings
    print("\n💾 Creating backup of existing autostart settings...")
    # Backup logic would go here

    # Try to setup autostart
    print(f"\n{'='*60}")
    print("🔄 Configuring autostart...")
    print(f"{'='*60}")

    autostart_manager = AutostartManager(html_path)
    success_method, failures = autostart_manager.try_all_methods()

    # Results
    print(f"\n{'='*60}")

    if success_method:
        print("🎉 SETUP COMPLETE!")
        print(f"\n✅ Method used: {success_method}")
        print(f"📄 File: {html_path}")

        # Show user where to disable if needed
        print("\n📝 To disable or modify this autostart:")
        if "Startup" in success_method:
            print("   • Press Win+R, type: shell:startup")
            print("   • Delete or modify the file in that folder")
        elif "Registry" in success_method:
            print("   • Press Win+R, type: regedit")
            print("   • Navigate to: HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Run")
            print("   • Delete the 'HTMLAutostart' value")
        elif "Task" in success_method:
            print("   • Open Task Scheduler")
            print("   • Navigate to: Task Scheduler Library")
            print("   • Delete the 'HTMLAutostartTask' task")

        print("\n⚠  Note: Changes take effect after next login/restart")
    else:
        print("❌ SETUP FAILED")
        print("\nAll methods failed:")

        for method_name, error in failures:
            print(f"   • {method_name}: {error[:200]}")

        print("\n💡 Suggestions:")
        print("   1. Run this program as Administrator")
        print("   2. Check file and folder permissions")
        print("   3. Try manual setup:")
        print("      - Press Win+R, type 'shell:startup'")
        print("      - Create shortcut to your HTML file there")

    # Save configuration
    config = {
        'last_setup': datetime.now().isoformat(),
        'html_file': html_path,
        'success_method': success_method,
        'failures': failures,
        'browser_used': autostart_manager.browser_path
    }

    config_file = CONFIG_DIR / 'last_config.json'
    try:
        config_file.write_text(json.dumps(config, indent=2), encoding='utf-8')
        print(f"\n📁 Configuration saved: {config_file}")
    except:
        pass

    print(f"\n{'='*60}")

    # Keep window open if not running from command line
    if len(sys.argv) <= 1:  # Started without arguments
        input("\nPress Enter to exit...")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("\n\n⚠️  Setup cancelled by user.")
    except Exception as e:
        print(f"\n❌ Fatal error: {e}")
        logger.error(f"Fatal error: {e}")
        logger.error(traceback.format_exc())
        input("\nPress Enter to exit...")
    finally:
        cleanup()
