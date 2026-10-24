# -*- coding: utf-8 -*-
"""
Anki Add-on: Search Shortcuts
Adds configurable shortcut buttons (1-5) below the search bar for quick access to saved searches.
Copyright: 2026
License: GNU AGPLv3 or later <https://www.gnu.org/licenses/agpl.html>
"""
from aqt.qt import *
from aqt import gui_hooks, mw
from aqt.utils import showInfo
import json

# Storage key for saved searches
STORAGE_KEY = "search_shortcuts"

def get_config():
    """Get addon configuration"""
    config = mw.addonManager.getConfig(__name__)
    if config is None:
        return {"num_shortcuts": 5, "button_labels": {}}
    return config

def get_num_shortcuts():
    """Get the configured number of shortcuts from addon config"""
    config = get_config()
    return min(max(config.get("num_shortcuts", 5), 1), 10)

def get_button_label(slot):
    """Get the custom label for a button slot, or default to heart + number"""
    config = get_config()
    button_labels = config.get("button_labels", {})
    return button_labels.get(str(slot), f"♡ {slot}")

def load_shortcuts():
    """Load saved search shortcuts from Anki's meta storage"""
    meta = mw.col.get_config(STORAGE_KEY, {})
    num_shortcuts = get_num_shortcuts()
    # Default empty searches for configured number of slots
    return {str(i): meta.get(str(i), "") for i in range(1, num_shortcuts + 1)}

def save_shortcuts(shortcuts):
    """Save search shortcuts to Anki's meta storage"""
    mw.col.set_config(STORAGE_KEY, shortcuts)

def add_search_shortcuts(browser):
    """Add search shortcut buttons below the search bar"""
    
    # Load saved shortcuts
    shortcuts = load_shortcuts()
    num_shortcuts = get_num_shortcuts()
    
    # Create container widget for buttons
    container = QWidget()
    button_layout = QHBoxLayout()
    button_layout.setContentsMargins(0, 5, 0, 5)
    button_layout.setSpacing(5)
    container.setLayout(button_layout)
    
    # Create configured number of shortcut buttons
    for i in range(1, num_shortcuts + 1):
        button_text = get_button_label(i)
        button = QPushButton(button_text)
        button.setFlat(True)
        button.setMinimumWidth(50)
        button.setMinimumHeight(25)
        
        # Set tooltip to show saved search
        search_text = shortcuts.get(str(i), "")
        if search_text:
            button.setToolTip(f"Slot {i}: {search_text}")
        else:
            button.setToolTip(f"Slot {i}: (empty - right-click to save current search)")
        
        # Left click: execute saved search
        button.clicked.connect(lambda checked, slot=i: execute_search(browser, slot))
        
        # Right click: save current search
        button.setContextMenuPolicy(Qt.ContextMenuPolicy.CustomContextMenu)
        button.customContextMenuRequested.connect(
            lambda pos, btn=button, slot=i: show_context_menu(browser, btn, slot, pos)
        )
        
        button_layout.addWidget(button, stretch=1)
    
    # No stretch needed - buttons will expand to fill space
    
    # Add container to browser layout (row 1, span all columns)
    layout = browser.form.gridLayout
    layout.addWidget(container, 1, 0, 1, layout.columnCount())

def execute_search(browser, slot):
    """Execute the search saved in the given slot"""
    shortcuts = load_shortcuts()
    search_text = shortcuts.get(str(slot), "")
    
    if search_text:
        browser.form.searchEdit.setEditText(search_text)
        browser.search_for(search_text)
    else:
        showInfo(f"Slot {slot} is empty. Right-click to save current search.")

def show_context_menu(browser, button, slot, pos):
    """Show context menu for saving/clearing search"""
    menu = QMenu()
    
    # Save current search action
    save_action = menu.addAction("Save current search")
    save_action.triggered.connect(lambda: save_current_search(browser, button, slot))
    
    # Rename button action
    rename_action = menu.addAction("Rename button")
    rename_action.triggered.connect(lambda: rename_button(browser, button, slot))
    
    # Clear search action
    shortcuts = load_shortcuts()
    if shortcuts.get(str(slot), ""):
        clear_action = menu.addAction("Clear saved search")
        clear_action.triggered.connect(lambda: clear_search(browser, button, slot))
    
    # Show menu at button position
    menu.exec(button.mapToGlobal(pos))

def save_current_search(browser, button, slot):
    """Save the current search text to the given slot"""
    current_search = browser.form.searchEdit.currentText()
    
    if not current_search.strip():
        showInfo("Search bar is empty. Type a search first, then right-click to save it.")
        return
    
    # Save to storage
    shortcuts = load_shortcuts()
    shortcuts[str(slot)] = current_search
    save_shortcuts(shortcuts)
    
    # Update button tooltip
    button.setToolTip(f"Slot {slot}: {current_search}")
    showInfo(f"Saved search to slot {slot}")

def clear_search(browser, button, slot):
    """Clear the saved search in the given slot"""
    shortcuts = load_shortcuts()
    shortcuts[str(slot)] = ""
    save_shortcuts(shortcuts)
    
    # Update button tooltip
    button.setToolTip(f"Slot {slot}: (empty - right-click to save current search)")
    showInfo(f"Cleared slot {slot}")

def rename_button(browser, button, slot):
    """Rename the button label"""
    from aqt.utils import getText
    
    current_label = get_button_label(slot)
    
    # Show input dialog
    new_label, ok = getText(
        f"Enter new label for button {slot}:",
        default=current_label,
        title="Rename Button"
    )
    
    if ok and new_label is not None:
        new_label = new_label.strip()
        
        # Save to config
        config = get_config()
        if "button_labels" not in config:
            config["button_labels"] = {}
        
        if new_label:
            config["button_labels"][str(slot)] = new_label
        else:
            # If empty, remove custom label (revert to default)
            if str(slot) in config["button_labels"]:
                del config["button_labels"][str(slot)]
        
        mw.addonManager.writeConfig(__name__, config)
        
        # Update button text
        button.setText(new_label if new_label else f"♡ {slot}")
        showInfo(f"Button {slot} renamed! Label will persist across sessions.")

# Register the hook to add buttons when browser opens
gui_hooks.browser_will_show.append(add_search_shortcuts)