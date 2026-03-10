# Modernki - Session Memory

**Date**: December 10, 2025  
**Status**: Stable - Major Update Complete

## Latest Session (December 10, 2025 - Part 2)

### Deck List Customization Features

#### 1. Deck List Text & Font Controls
- **Deck List Text Color** (`deckListTextColor`): Explicit control over deck name color
  - Overrides auto-contrast calculation
  - Essential for light themes like Pink Blossom
- **Deck List Font Size** (`deckListFontSize`): Default `1.15em` (FAT text)
- **Count Font Size** (`countFontSize`): Default `1.1em` (FAT counts)
- **Font Weight**: 600-800 (extra bold throughout)

#### 2. Excel-Style Column Width Controls
- **Deck Name Column Width** (`deckNameColumnWidth`): Default `60%`
- **Count Column Width** (`countColumnWidth`): Default `50px`
- Uses `table-layout: fixed` for precise column sizing
- Configurable via Theme Designer

#### 3. Separate Count Colors (Anki-Style)
- **New Count Color** (`newCountColor`): Blue like regular Anki
- **Learn Count Color** (`learnCountColor`): Orange/Red like regular Anki  
- **Due Count Color** (`dueCountColor`): Green like regular Anki
- Fixed CSS override that was forcing all counts to white
- Each theme has coordinated but distinct count colors

#### 4. Pink Blossom Fixes
- Changed all text to black (#1a1a1a) for readability on light pink
- Set explicit `deckListTextColor: "#1a1a1a"` 
- Count colors: Blue (#0066aa), Orange (#cc6600), Green (#007744)

### Files Modified
- `__init__.py`: Added EDITABLE_FIELDS, CSS updates, preset updates
- `themes.py`: Updated all 7 presets with new fields
- `constants.py`: Added new defaults

### Backup Created
- `backups/2025-12-10_090312/` - Full backup of all core files

---

## Previous Session (December 10, 2025 - Part 1)

### Major Features Added

#### 1. Review Heatmap Integration
- **Goal**: Make Review Heatmap addon look beautiful with Modernki themes
- **Implementation**:
  - Added 5 heatmap color variables to all theme presets
  - Created comprehensive CSS in `heatmap_integration.py`
  - Targets all Review Heatmap selectors (containers, cells, buttons, tooltips, etc.)
  - Each theme has custom heatmap colors matching its aesthetic
- **Color System**:
  - `heatmapColorZero`: Days with 0 reviews
  - `heatmapLevel1`-`heatmapLevel4`: Activity intensity levels (1-25%, 26-50%, 51-75%, 76-100%)
- **Files Modified**:
  - `heatmap_integration.py`: Enhanced with full CSS generation
  - `constants.py`, `__init__.py`, `themes.py`: Added heatmap color defaults to all presets

#### 2. Pink Blossom Theme
- **New Theme**: Light pink theme with medium saturation
- **Design Philosophy**: 
  - Everything clearly pink (no white or dark backgrounds)
  - Lighter backgrounds (#ffb3d9, #ffc4e3) for better readability
  - Deep magenta text (#a02c6d) for strong contrast
  - Soft pink borders and hover states
- **Heatmap Colors**: Pink gradient from #ff99c9 → #c75fa5

#### 3. Master On/Off Toggle
- **Replaced**: `forceCardStyling` (removed feature)
- **New Feature**: `enableModernki` master toggle
- **Functionality**:
  - Checkbox in Theme Designer: "Enable Modernki"
  - When disabled: All styling bypassed, returns empty stylesheets
  - Instant revert to vanilla Anki without restart
  - Early exit checks in `build_global_stylesheet()` and `inject_webview_css()`
- **Benefit**: Safe testing/debugging, quick comparison with vanilla Anki

#### 4. Addon Renamed to Modernki
- **Old Name**: Universal Beautify Anki
- **New Name**: Modernki
- **Updated**: All documentation, code comments, constants, and headers

### Current Built-in Themes (7 Total)
1. Default - Blue dark theme
2. Upside Down - Red/dark Stranger Things theme
3. Midnight Eclipse - Purple dark theme
4. Forest Zen - Green nature theme
5. Velvet Rose - Deep plum/rose theme
6. Pink Blossom - Light pink theme (NEW)
7. Sky Breeze (Light) - Light blue theme

---

## Previous Session History

## Key Accomplishments

### 1. Color System Refactor
- **Issue**: Multiple conflicting layers fighting over background colors (palette, CSS, JavaScript)
- **Initial Approach**: Tried ultra-simplified single CSS injection (failed—looked bad)
- **Final Solution**: Restored attached version with proven multi-layer system
- **How it works**:
  - `browserPreviewBackground` controls preview box background
  - `browserPreviewOuterBackground` controls outer framing
  - Dynamic text color detection via luminance calculation (dark/light auto-select)
  - JavaScript enforcement with MutationObserver for reliability

### 2. Deck List Compactification
- **Goal**: Make deck list much smaller with minimal spacing
- **Changes Applied**:
  - Row padding: `6px 10px` → `2px 6px`
  - Row height: Fixed at `20px`
  - Font size: `0.85em` (smaller text)
  - Header: `0.8em` font, `2px 6px` padding, `18px` height
  - Table padding: `12px` → `2px`
  - Margins: `6px` → `2px` (minimal space)
  - Badge text: `0.9em` → `0.75em` (very compact)
  - Body padding: `6px` → `2px`
- **Result**: Ultra-compact deck list with minimal wasted space

### 3. Code System Used
- **Location**: `__init__.py`
- **Key Functions**:
  - `inject_webview_css()` - Handles CSS injection for different contexts (Reviewer, Browser, DeckBrowser, etc.)
  - `_get_text_color_for_bg()` - Calculates luminance-based text color (dark vs light)
  - `build_webview_css()` - Generates webview styling with compact deck list CSS
  - `_ensure_contrast_color()` - Ensures text contrasts with backgrounds

### 4. Architecture Notes
- Two UI systems in Anki:
  - **Qt Widgets**: Menus, toolbars, dialogs (styled via stylesheet)
  - **Webviews**: Deck browser, reviewer, overview (styled via CSS/JS injection)
- Browser preview uses separate `browserPreviewBackground` for isolation
- Auto-luminance detection prevents readability issues on light/dark backgrounds

### 5. Files Modified
- **`__init__.py`**: Main addon file with all styling logic
- **`themes.py`**: Theme presets (not modified this session)
- **`constants.py`**: Defaults (not modified this session)

### 6. Backups Created
- `__init__.py.backup` - Previous version before refactoring
- `__init__.py.attached` - Version from user's attached folder (used as reference)

## Current State
- Deck list is ultra-compact with 0.85em text
- Color system uses dynamic luminance-based text detection
- Browser preview has separate background controls
- All styling respects config values cleanly

## No Known Issues
- Layout is compact and functional
- Text is readable with auto-detected colors
- Spacing minimized as requested
