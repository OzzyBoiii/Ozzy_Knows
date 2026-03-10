# -*- coding: utf-8 -*-
"""
Anki Add-on: Search Shortcuts
Adds configurable shortcut buttons (1-5) below the search bar for quick access to saved searches.
Copyright: 2026
License: GNU AGPLv3 or later <https://www.gnu.org/licenses/agpl.html>
"""

from . import search_shortcuts
from .config_dialog import show_config_dialog
from aqt import mw

# Register config action
mw.addonManager.setConfigAction(__name__, show_config_dialog)