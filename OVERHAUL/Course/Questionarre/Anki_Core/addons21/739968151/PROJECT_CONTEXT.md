# Project Context - Modernki

## Role & Objectives

Developing an Anki add-on called **Modernki** (formerly Universal Beautify Anki).

## Project Structure

### 1. Universal Beautify Anki Add-on
- **Location**: `C:\Users\Colin\AppData\Roaming\Anki2\addons21\universal_beautify_anki`
- **Status**: All current features were developed by previous iterations
- **Development Goal**: Understand existing code and coding style, then continue development
- **Action**: Actively develop and modify this add-on

### 2. Anki Source Code (anki-25.09.2)
- **Location**: `C:\Users\Colin\Downloads\anki-25.09.2\anki-25.09.2`
- **Purpose**: Reference only - to understand how Anki works internally
- **Action**: **DO NOT modify or change anything** - use only as a guide/reference

## Current Status

There is a specific issue with a part of the add-on project that needs to be addressed (to be discussed).

## Development Guidelines

1. Study the existing add-on code to understand the implementation and coding style
2. Reference the Anki source code when needed to understand Anki's internal behavior
3. Only modify files in the `universal_beautify_anki` directory
4. Never modify files in the `anki-25.09.2` directory

---

# Complete Architecture Understanding

## Anki Core Architecture

### Two UI Systems
Anki has **TWO completely different UI systems** that must be styled separately:

#### 1. Qt Widgets (Native Controls)
- **What**: Native OS controls - menus, toolbars, dialogs, buttons, inputs, tables, trees
- **Styled Via**: Qt stylesheets (CSS-like syntax but NOT standard CSS)
- **Examples**: Main window, Browser window, deck options dialogs, menu bars
- **Key Files in Source**:
  - `qt/aqt/main.py` - Main window (AnkiQt class)
  - `qt/aqt/browser/browser.py` - Browser window
  - `qt/aqt/theme.py` - Theme manager with palette/colors system
  - `qt/aqt/stylesheets.py` - Qt stylesheet definitions

#### 2. Webviews (HTML/CSS/JS)
- **What**: Embedded web browser views using QWebEngineView
- **Styled Via**: Standard HTML/CSS injected into webviews
- **Examples**: Deck browser, overview screen, review cards, congrats screen, toolbar
- **Key Files in Source**:
  - `qt/aqt/webview.py` - WebView base class and infrastructure
  - `qt/aqt/deckbrowser.py` - Deck browser HTML screen
  - `qt/aqt/overview.py` - Deck overview screen
  - `qt/aqt/reviewer.py` - Card review screen
  - `qt/aqt/toolbar.py` - Top toolbar

### Anki Hook System
Anki provides a comprehensive hook system for add-ons to inject custom code:

#### Key Hooks Used by Universal Beautify Anki:
1. **`gui_hooks.profile_did_open`** - Fired when a profile is opened
   - Used to apply global Qt stylesheet
   - Override Anki's CANVAS palette colors
   
2. **`gui_hooks.webview_will_set_content`** - Fired before webview content is set
   - Receives `WebContent` object with `.head` and `.body` strings
   - Used to inject custom CSS into webviews
   - Context object identifies which webview (DeckBrowser, Reviewer, etc.)

3. **`gui_hooks.style_did_init`** - Fired when Anki initializes its stylesheet
   - Allows appending additional Qt styles

4. **`gui_hooks.theme_did_change`** - Fired when user changes theme (light/dark)
   - Used to re-apply custom colors and fix backgrounds

5. **`gui_hooks.card_review_webview_did_init`** - Fired when review webview is created
   - Used to force background color at Qt level

6. **`gui_hooks.previewer_did_init`** - Fired when previewer dialog opens
   - Used to style previewer chrome

### Anki Color System
Anki uses a palette-based color system defined in `qt/aqt/colors.py`:
- `CANVAS` - Main canvas background
- `CANVAS_CODE` - Code/monospace backgrounds  
- `CANVAS_OVERLAY` - Overlay backgrounds
- etc.

**Critical Issue**: These palette colors are set at the Qt level and override CSS!
- Must use `QWebEnginePage.setBackgroundColor()` to truly override
- CSS alone won't work if palette is set

## Universal Beautify Anki Add-on Architecture

### File Structure
```
universal_beautify_anki/
├── __init__.py           # Main add-on code (~4000 lines)
├── config.json           # User's current config
├── meta.json             # Add-on metadata (disabled status, etc.)
├── custom_presets.json   # User-created theme presets
├── constants.py          # Default configuration values
├── themes.py             # Built-in theme presets
├── config.py             # Config loading/caching utilities
├── patcher.py            # CSS generation utilities
├── webview_handlers.py   # Webview injection logic
├── heatmap_integration.py # Review Heatmap addon CSS
├── PROJECT_CONTEXT.md    # This file
├── SESSION_MEMORY.md     # Session-by-session development log
├── backups/              # Timestamped backups
└── backgrounds/          # Background image folder
    └── README.txt
```

### Code Organization (All in `__init__.py`)

#### 1. Configuration System (Lines 1-360)
- `_DEFAULTS` dict - Default values for all settings
- `load_config()` - Load config with caching
- `reload_config()` - Force reload, clear cache
- Config keys: colors, fonts, sizes, toggles, etc.

#### 2. Theme Presets (Lines 106-460)
- `THEME_PRESETS` dict - Built-in read-only presets (7 themes):
  - "Default" - Modern dark blue
  - "Upside Down" - Stranger Things inspired red
  - "Midnight Eclipse" - Purple/violet
  - "Forest Zen" - Nature green
  - "Velvet Rose" - Deep plum/rose
  - "Pink Blossom" - Light pink theme (black text for readability)
  - "Sky Breeze (Light)" - Light blue theme
- `load_custom_presets()` - Load user presets from JSON
- `save_custom_presets()` - Save user presets to disk
- `apply_preset()` - Apply a preset by name, save to config, reload UI

#### 3. Stylesheet Builders (Lines 460-1800)

**Qt Widget Stylesheet**:
- `build_global_stylesheet(cfg)` - Returns Qt stylesheet string
- Styles: QWidget, QMainWindow, QToolBar, QMenuBar, QMenu, QPushButton, QLineEdit, QScrollBar, QListView, QTreeView, QTableView, Browser-specific overrides
- Uses config colors for backgrounds, text, accents, borders
- Includes menu glow effect CSS if enabled

**Webview CSS Builders**:
- `build_webview_css(cfg)` - Deck browser & overview screens
  - Handles background images with opacity
  - Styles deck tables, buttons, counts
  - Flattens overview layout
- `build_reviewer_css(cfg)` - Review card display
  - CSS variables for theming
  - Card container with gradient background
  - Animation for card entrance
  - **CRITICAL**: Aggressively overrides Anki's CANVAS colors
- `build_toolbar_css(cfg)` - Toolbar button styling
- `build_browser_editor_css(cfg)` - Browser editor webview
- `build_bottom_bar_css(cfg)` - Bottom bars without background image
- `_build_card_content_css(cfg)` - Force theme onto card content (if enabled)
  - Styles Show Answer button, rating buttons
  - Preset-specific animations

**Add-on Integration**:
- `build_addon_integration_css(cfg)` - Automatic styling for popular add-ons
  - Review Heatmap (909972253) - Full color override system
  - Image Occlusion Enhanced (1374772155)
  - Hierarchical Tags (594329229)
  - Advanced Browser (874215009)
  - More Decks Stats (1556734708)

#### 4. Application Logic (Lines 1800-2600)
- `apply_global_stylesheet()` - Apply Qt stylesheet to QApplication
- `inject_webview_css(web_content, context)` - Hook callback to inject CSS
  - Detects context type (Reviewer, DeckBrowser, Toolbar, etc.)
  - Injects appropriate CSS into web_content.head
  - Adds JavaScript for aggressive background forcing
- `_override_canvas_palette()` - Override Anki's CANVAS colors at Qt level
- `_set_webview_bg(webview, color_hex)` - Force webview background color
- `_patch_on_theme_did_change()` - Monkey-patch AnkiWebView method
- `_fix_webview_backgrounds_on_theme_change()` - Fix backgrounds on theme change

#### 5. Glow Animation System (Lines 2600-2800)
- `_GlowAnimator` class - QTimer-based animation
  - Qt stylesheets don't support @keyframes
  - Periodically updates stylesheet with different opacity values
  - Breathing pulse effect (sine wave)
- `_start_glow_animation(cfg)` - Start/stop animator based on config

#### 6. Hook Registration (Lines 2800-2900)
- `register_hooks()` - Register all GUI hooks
- `on_profile_did_open()` - Profile open callback
- Hooks registered on import (immediate execution)

#### 7. Theme Designer UI (Lines 2900-3628)
- `ThemeDesignerDialog` class - Qt dialog for editing themes
- `ColorButton` class - Custom color picker widget
- `EDITABLE_FIELDS` - List of all editable settings
- Preset management UI
- Apply/Save/Reset functionality
- `add_beautify_menu()` - Add "Design" menu to menubar
- Menu items: Theme Designer, Style Guide, Presets, Force Card Styling toggle

### Key Implementation Details

#### Background Color Override Strategy
The add-on uses a **multi-layer approach** to override Anki's default colors:

1. **Qt Palette Override** (`_override_canvas_palette()`)
   - Rewrites `colors.CANVAS`, `colors.CANVAS_CODE`, etc. dictionaries
   - Forces theme manager to reapply palette

2. **QWebEnginePage Background** (`_set_webview_bg()`)
   - Calls `page.setBackgroundColor(QColor(hex))`
   - Most effective method - overrides CSS

3. **CSS Variables Override** (in `build_reviewer_css()`)
   - Sets `--canvas`, `--canvas-code`, etc. to custom color
   - Fallback for CSS-based styling

4. **Aggressive CSS with !important** 
   - Every background/background-color rule uses `!important`
   - Targets `*`, `body`, `body *`, `[style*="background"]`
   - Multiple style tags (head + body) for redundancy

5. **JavaScript Injection** (in `inject_webview_css()`)
   - Adds script to force background via JS
   - Uses MutationObserver + setInterval for persistence
   - Nuclear option when CSS fails

#### Monkey Patching
- `_patch_on_theme_did_change()` - Wraps `AnkiWebView.on_theme_did_change()`
- Calls original method first, then applies custom color override
- Ensures add-on colors persist after theme changes

#### Config Caching
- `_config_cache` global variable
- `load_config()` returns cached value if available
- `reload_config()` clears cache
- Improves performance (avoid repeated file reads)

### Coding Style & Conventions

1. **Type Hints**: Uses Python 3.9+ type hints throughout
2. **Defensive Imports**: Try/except around Anki imports for safe import outside Anki
3. **Config Safety**: Always use `.get(key, default)` to avoid KeyErrors
4. **Exception Handling**: Broad try/except blocks to prevent add-on crashes
5. **Comments**: Extensive docstrings and inline comments
6. **Separation**: Functions grouped by purpose with clear separator comments
7. **Qt Compatibility**: Handles both Qt5 and Qt6 APIs where needed
8. **CSS Organization**: Logical sections with comments in stylesheets

### Known Issues & Workarounds

1. **Gray Backgrounds in Reviewer**
   - Cause: Anki's CANVAS_CODE color set at Qt level
   - Fix: Multi-layer override strategy (see above)

2. **Browser Window Colors**
   - Issue: QTableView/QTreeView backgrounds revert to gray
   - Fix: `_force_browser_colors()` with QPalette + recursive widget forcing

3. **Theme Changes Resetting Colors**
   - Issue: Anki's theme_did_change resets palette
   - Fix: Hook into theme_did_change and re-apply overrides

4. **Menu Glow Animation Performance**
   - Issue: Qt stylesheets don't support @keyframes
   - Fix: QTimer-based animation with 150ms updates (was 50ms)

5. **Background Image Scaling**
   - Issue: Images scale/distort on different screen sizes
   - Fix: Recommend 2560x1440 images, convert to data URIs

## Important Anki API Components

### Commonly Used Anki Objects
- `mw` - Main window instance (AnkiQt)
- `mw.col` - Collection (database)
- `mw.app` - QApplication instance
- `mw.form` - Form with menubar, widgets
- `mw.toolbar` - Top toolbar
- `mw.bottomWeb` - Bottom bar
- `mw.state` - Current state ("deckBrowser", "overview", "review", etc.)
- `mw.addonManager` - Add-on manager (for config)

### WebContent Object
```python
web_content.head  # HTML to inject in <head>
web_content.body  # HTML to inject in <body>
```

### Context Objects (for webview_will_set_content)
Context determines which webview is being styled:
- `DeckBrowser` - Deck list
- `Overview` - Deck overview/study screen
- `Reviewer` - Card review
- `Previewer` - Preview dialog
- `TopToolbar` / `Toolbar` - Top toolbar
- `Editor` / `EditorWebView` - Card editor
- `Browser` - Browser window
- `DeckBrowserBottomBar` / `OverviewBottomBar` - Bottom bars

### Qt Widget Classes to Target
- `QMainWindow` - Main windows
- `QDialog` - Dialog boxes
- `QWidget` - Base widget class
- `QToolBar` - Toolbars
- `QMenuBar` - Menu bar
- `QMenu` - Dropdown menus
- `QPushButton` - Buttons
- `QLineEdit` - Text inputs
- `QComboBox` - Dropdowns
- `QTableView` - Tables
- `QTreeView` - Tree views
- `QListView` - List views
- `QScrollBar` - Scrollbars

## Development Workflow

When making changes:
1. Modify code in `universal_beautify_anki/__init__.py`
2. Restart Anki to see changes (add-ons loaded on startup)
3. Use Anki's Tools → Add-ons → Config to test config changes
4. Use Design → Theme Designer for live preview (Qt only, not webviews)
5. Check Anki's terminal output for errors (if running from terminal)
6. Test in both light and dark themes
7. Test all screens: deck browser, overview, reviewer, browser, dialogs

## Common Terminology

- **Qt Widgets** = Native controls (menus, buttons, etc.)
- **Webviews** = HTML screens (deck browser, cards, etc.)
- **CANVAS** = Anki's palette color for backgrounds
- **Stylesheet** = Qt stylesheet (for widgets) or CSS (for webviews)
- **Hook** = Anki's event system for add-on integration
- **Context** = Webview type identifier
- **Preset** = Saved theme configuration
- **Palette** = Qt color scheme
- **Force Card Styling** = Apply theme to card content itself

## Quick Reference: What Affects What

| Setting | Affects | System |
|---------|---------|--------|
| globalBackground | Main window, dialogs | Qt Widgets |
| panelBackground | Toolbars, sidebars, tables | Qt Widgets |
| textColor | Text in Qt widgets | Qt Widgets |
| accentColor | Selected items, focus | Qt Widgets |
| webviewBackground | Deck browser, overview page bg | Webview |
| webviewCanvas | Deck table background | Webview |
| gradientStart/End | Review card screen bg | Webview |
| cardBackground | Card container in reviewer | Webview |
| fontFamily | All text | Both |
| cardFontSize | Card text size | Webview |
| deckListTextColor | Deck name text color | Webview |
| deckListFontSize | Deck name font size | Webview |
| countFontSize | New/Learn/Due count font size | Webview |
| deckNameColumnWidth | Width of deck name column | Webview |
| countColumnWidth | Width of count columns | Webview |
| newCountColor | "New" count color (blue) | Webview |
| learnCountColor | "Learn" count color (orange) | Webview |
| dueCountColor | "Due" count color (green) | Webview |
| heatmapColorZero | Review Heatmap zero days | Webview |
| heatmapLevel1-4 | Review Heatmap activity levels | Webview |
| enableModernki | Master on/off toggle | Both |

---

**Always remember**: 
- Modify ONLY the add-on code
- Reference the Anki source for understanding
- Test thoroughly after changes
- Use defensive coding (try/except, .get() with defaults)
