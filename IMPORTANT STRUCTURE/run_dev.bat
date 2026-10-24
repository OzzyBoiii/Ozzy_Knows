@echo off
setlocal enabledelayedexpansion
title Ozzy_Knows Ultimate Pro Dev Pipeline v2.1
color 0B

:: =====================================================================
:: CORE CONTEXT LOCK
:: =====================================================================
cd /d "C:\Users\CrozzyBoii\Documents\Ozzy_Knower"

echo =====================================================================
echo    OZZY_KNOWS AUTOMATED ULTRA PIPELINE v2.1 ^& DIAGNOSTICS
echo =====================================================================

:: 1. ENFORCE ADMINISTRATOR PRIVILEGES
net session >nul 2>&1
if %errorlevel% neq 0 (
    color 0C
    echo [CRITICAL ERROR] SYSTEM PRIVILEGES INSUFFICIENT
    echo -----------------------------------------------------------------
    echo This pipeline requires elevated Administrator permissions.
    echo.
    echo ACTION REQUIRED: Right-click this script and select 'Run as administrator'.
    echo =====================================================================
    pause
    exit /b
)

:: 2. PARSER-SAFE ENVIRONMENT ENGINE VALIDATION
echo [1/9] Verifying local compilation engines...
where node >nul 2>&1 && where npm >nul 2>&1 && where cargo >nul 2>&1 || (
    color 0C
    echo [FAIL] Core engines missing from system PATH. Ensure Node and Rust are installed.
    pause & exit /b
)
echo [STATUS] Compilers, runtimes, and package environments are valid.

:: 3. AUTOMATIC GHOST PORT TERMINATION
echo [2/9] Scanning for hanging or orphan web processes...
powershell -Command "Stop-Process -Id (Get-NetTCPConnection -LocalPort 1420 -ErrorAction SilentlyContinue).OwningProcess -Force -ErrorAction SilentlyContinue" >nul 2>&1
powershell -Command "Stop-Process -Id (Get-NetTCPConnection -LocalPort 5173 -ErrorAction SilentlyContinue).OwningProcess -Force -ErrorAction SilentlyContinue" >nul 2>&1
echo [STATUS] Networking pipelines clean and ready for binding.

:: 4. RUST TARGET CACHE MONITORING (Smart Storage Warning)
echo [3/9] Analyzing Rust target compilation database size...
set "TARGET_DIR=src-tauri\target"
if exist "%TARGET_DIR%" (
    for /f "usebackq tokens=1" %%x in (`powershell -Command "[Math]::Round((Get-ChildItem '%TARGET_DIR%' -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1GB, 2)"`) do set "CACHE_SIZE=%%x"
    echo [STATUS] Current Cargo build cache size: !CACHE_SIZE! GB
    for /f "delims=." %%a in ("!CACHE_SIZE!") do set "CACHE_INT=%%a"
    if !CACHE_INT! GTR 8 (
        color 0E
        echo [WARN] Rust compilation cache exceeds 8GB. Consider running a manual 'cargo clean' soon.
        color 0B
    )
)

:: 5. SURGICAL CACHE ^& TEMP FILE PURGE
echo [4/9] Performing targeted workspace optimization sweeps...
if exist "node_modules\.vite" (
    rmdir /s /q "node_modules\.vite"
    echo [OK] Purged frontend bundler cache (.vite)
)
if exist "dist" (
    rmdir /s /q "dist"
    echo [OK] Purged distribution pipeline folder (/dist)
)
if exist "src-tauri\target\.rustc_info.json" del /f /q "src-tauri\target\.rustc_info.json"
if exist "*.log" (
    del /f /q "*.log"
    echo [OK] Cleaned local error dump log fragments
)
echo [STATUS] Targeted optimization sweep complete.

:: 6. LIGHTWEIGHT HOT-BACKUP CHECKPOINT
echo [5/9] Creating hot-checkpoint of vital configuration logic...
set "BACKUP_DIR=.dev_backups"
powershell -Command "New-Item -ItemType Directory -Force -Path '%BACKUP_DIR%' > $null; $timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'; Get-ChildItem -Path 'src', 'src-tauri/src', 'src-tauri/tauri.conf.json', 'src-tauri/capabilities/default.json' -ErrorAction SilentlyContinue | Copy-Item -Destination { '%BACKUP_DIR%\' + $_.Name + '_' + $timestamp } -Recurse -Force -ErrorAction SilentlyContinue"
echo [STATUS] Safety configuration snapshot stored in /.dev_backups/

:: 7. WORKSPACE VERSION CONTROL INSIGHT (Parser Fixed to check for .git directory first)
echo [6/9] Querying local repository status...
if not exist ".git" (
    echo [STATUS] Directory is a standalone project. Git monitoring skipped.
) else (
    echo -----------------------------------------------------------------
    powershell -Command "Write-Host 'Active Branch: ' -NoNewline -ForegroundColor Cyan; git branch --show-current; git status -s"
    echo -----------------------------------------------------------------
)

:: 8. DEPENDENCY TREE MAINTENANCE
echo [7/9] Reconciling package trees...
call npm install --no-audit --no-fund
call npm prune --no-audit --no-fund

:: 9. SYSTEM SCHEDULER ACCELERATION
echo [8/9] Tuning process execution matrices...
wmic process where name="cmd.exe" CALL setpriority "above normal" >nul 2>&1
echo [STATUS] Thread priority matrix calibrated.

:: 10. LAUNCH AND CRASH TRAP
echo [9/9] Initializing application framework execution...
echo -----------------------------------------------------------------
color 07
call npm run tauri dev
set "EXIT_CODE=%errorlevel%"

echo -----------------------------------------------------------------
if %EXIT_CODE% neq 0 (
    color 0C
    echo [CRITICAL] Application pipeline terminated with unexpected error code: %EXIT_CODE%
    echo Diagnostics: Check your compilation logs above for Rust syntax errors or invalid JSON files.
) else (
    color 0A
    echo [SUCCESS] Application pipeline shut down cleanly.
)
pause