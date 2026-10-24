"""
MODULAR REFACTORING - PROJECT STRUCTURE UPDATE

Date: December 10, 2025

COMPLETED:
✅ constants.py - All defaults and field descriptions
✅ config.py - Config loading with Anki integration
✅ themes.py - Built-in presets + custom preset management
✅ __init__.py.new - Lean entry point with imports

NEW FILE LAYOUT:

universal_beautify_anki/
├── __init__.py                    (3856 lines → ~100 lines) Hooks only
├── constants.py                   NEW ~400 lines  
├── config.py                      NEW ~60 lines
├── themes.py                      NEW ~700 lines
├── patcher.py                     (TO EXTRACT) ~2000 lines
├── webview_handlers.py            (TO EXTRACT) ~400 lines
├── heatmap_integration.py         (TO EXTRACT) ~300 lines
├── config.json
├── custom_presets.json
├── meta.json
└── backgrounds/

BENEFITS OF MODULAR STRUCTURE:

1. Single Responsibility
   - constants.py = data/config schema
   - config.py = loading/caching logic
   - themes.py = preset management
   - patcher.py = CSS generation
   - webview_handlers.py = webview injection
   - heatmap_integration.py = addon integration

2. Easier Feature Addition
   - Light/Dark mode: add to constants, split themes
   - New presets: just add to themes.py
   - New integrations: new files like heatmap_integration.py

3. Better Maintainability
   - Each file ~300-700 lines (vs 3856 monolithic)
   - Easier to debug and test
   - Follows Onigiri's proven pattern

4. Preparation for Light/Dark Mode
   - themes.py ready for nested light/dark palettes
   - config.py ready for mode detection
   - Presets become: {name: {light: {...}, dark: {...}}}

NEXT STEPS FOR LIGHT/DARK MODE:

1. Extend constants.py:
   ```python
   "themeMode": "auto",  # "auto", "light", "dark"
   "colors": {
       "light": {...},
       "dark": {...}
   }
   ```

2. Add to config.py:
   ```python
   def get_theme_mode() -> str:
       """Detect or get user's light/dark preference"""
       
   def get_current_color(key: str) -> str:
       """Get color for current mode"""
   ```

3. Update themes.py presets:
   ```python
   "Velvet Rose": {
       "light": {...all light colors...},
       "dark": {...all dark colors...}
   }
   ```

4. Update patcher.py to use get_current_color() instead of direct cfg access

CURRENT IMPORTS (in __init__.py):

from .constants import DEFAULTS, ADDON_NAME
from .config import load_config, reload_config, get_config, ADDON_DIR, ADDON_ID
from .themes import (
    THEME_PRESETS, 
    get_all_presets, 
    apply_preset, 
    load_custom_presets,
    save_current_as_preset,
    delete_custom_preset,
    is_builtin_preset,
)

EXTRACTED FUNCTIONS (to move later):

config.py:
✅ load_config()
✅ reload_config()
✅ get_config()

themes.py:
✅ get_custom_presets_path()
✅ load_custom_presets()
✅ save_custom_presets()
✅ get_all_presets()
✅ save_current_as_preset()
✅ delete_custom_preset()
✅ is_builtin_preset()
✅ apply_preset()

Still in __init__.py (need extraction):
- build_global_stylesheet()
- build_toolbar_css()
- build_browser_editor_css()
- build_bottom_bar_css()
- build_webview_css()
- build_reviewer_css()
- build_addon_integration_css()
- _hex_to_rgb()
- _rgba_from_hex()
- _relative_luminance()
- _is_light_color()
- _ensure_contrast_color()
- inject_webview_css()
- apply_global_stylesheet()
- GUI code (ThemeDesignerDialog, etc.)
- Hook registration

RECOMMENDATION:

Before extracting patcher.py, review the structure:
1. Does this organization make sense?
2. Ready to add light/dark mode now?
3. Should we test the imports work before continuing?

Once confirmed, can extract:
- patcher.py (CSS builders)
- webview_handlers.py (injection + hooks)
- heatmap_integration.py (addon-specific CSS)
"""
