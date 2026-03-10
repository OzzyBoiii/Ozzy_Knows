# Modernki - AI Coding Instructions

## Project Overview
This is an **Anki add-on** that themes Anki's UI. It targets Anki 2.1.60+ (Qt6/PyQt6).

**Critical constraint**: The workspace contains:
- `anki-25.09.2/` - Anki source code (read-only reference only)
- `1011095603/` - Onigiri addon (read-only reference only)

**Only modify files in `universal_beautify_anki/`.**

## Architecture: Two Separate UI Systems

Anki has **two distinct UI systems** requiring different styling approaches:

### 1. Qt Widgets (Native Controls)
- Menus, toolbars, dialogs, buttons, inputs
- Styled via **Qt stylesheets** (CSS-like but NOT standard CSS)
- Generated in `build_global_stylesheet()` in `__init__.py`

### 2. Webviews (HTML/CSS/JS)  
- Deck browser, overview screen, reviewer, congrats
- Styled via **standard CSS** injected into webviews
- Generated in `patcher.py` and `webview_handlers.py`

**Key pitfall**: Qt palette colors override CSS. Use `QWebEnginePage.setBackgroundColor()` for true background overrides.

## Hook System (Entry Points)

All styling hooks are registered in `register_hooks()`:
```python
gui_hooks.profile_did_open       # Apply Qt stylesheet on profile load
gui_hooks.webview_will_set_content  # Inject CSS into webviews
gui_hooks.theme_did_change       # Re-apply on Anki theme toggle
gui_hooks.card_review_webview_did_init  # Force reviewer background
gui_hooks.browser_will_show      # Fix browser gray boxes
```

## File Responsibilities

| File | Purpose |
|------|---------|
| `__init__.py` | Main entry, hooks, Qt stylesheet builders, Theme Designer UI (~3900 lines) |
| `constants.py` | All `DEFAULTS` dict, config schema, field labels |
| `config.py` | Config loading/caching with Anki addon manager integration |
| `themes.py` | Built-in theme presets (`THEME_PRESETS`), custom preset CRUD |
| `patcher.py` | CSS generation for webviews (color utilities, contrast functions) |
| `webview_handlers.py` | Webview injection logic, background image encoding |
| `heatmap_integration.py` | Review Heatmap addon integration with comprehensive CSS targeting |

## Config System

- User config: `config.json` (managed by Anki's addon manager)
- Custom presets: `custom_presets.json`
- Always provide defaults in `constants.py:DEFAULTS` - never rely on config keys existing
- Use `load_config()` which merges: `DEFAULTS` → preset values → user overrides

## Common Patterns

### Color Handling
```python
from .patcher import _hex_to_rgb, _rgba_from_hex, _ensure_contrast_color
# Always use _ensure_contrast_color() when placing text on colored backgrounds
```

### Adding New Theme Properties
1. Add default to `constants.py:DEFAULTS`
2. Add to all presets in `themes.py:THEME_PRESETS`
3. Use in stylesheet builders (`build_global_stylesheet`, `build_webview_css`, etc.)
4. Add to `EDITABLE_FIELDS` if user-configurable

### Background Images
- Stored in `backgrounds/` folder
- Converted to base64 data URIs via `_get_image_base64()` in `webview_handlers.py`
- Referenced by filename in `webviewBackgroundImage` config key

### Master On/Off Toggle
- Config key: `enableModernki` (boolean, default: `True`)
- When disabled: All styling is bypassed, returns empty stylesheets
- Early exit checks in `build_global_stylesheet()` and `inject_webview_css()`
- Allows instant revert to vanilla Anki without restart

## Built-in Themes (7 Total)

1. **Default** - Blue dark theme with modern accents
2. **Upside Down** - Red/dark theme with Stranger Things vibe
3. **Midnight Eclipse** - Purple dark theme
4. **Forest Zen** - Green nature-inspired theme
5. **Velvet Rose** - Deep plum/rose dark theme
6. **Pink Blossom** - Light pink theme (new 2025-12-10)
7. **Sky Breeze (Light)** - Light blue theme

### Theme Color Structure
Each preset includes:
- Typography: `fontFamily`, `cardFontSize`
- Qt colors: `globalBackground`, `panelBackground`, `textColor`, `accentColor`, etc.
- Webview colors: `webviewBackground`, `webviewCanvas`, `webviewForeground`, etc.
- Toolbar/buttons: `buttonDecksColor`, `buttonAddColor`, etc.
- Heatmap colors: `heatmapColorZero`, `heatmapLevel1`-`heatmapLevel4`
- Deck list: `deckListTextColor`, `deckListFontSize`, `countFontSize`
- Column widths: `deckNameColumnWidth`, `countColumnWidth`
- Count colors: `newCountColor`, `learnCountColor`, `dueCountColor`
- Effects: `menuGlowEnabled`, `menuGlowColor`, etc.

## Deck List Customization

### Font & Size Controls
- `deckListTextColor`: Explicit text color (overrides auto-contrast)
- `deckListFontSize`: Default `1.15em` (FAT text)
- `countFontSize`: Default `1.1em` (FAT counts)

### Excel-Style Column Widths
- `deckNameColumnWidth`: Default `60%`
- `countColumnWidth`: Default `50px` (each count column)
- Uses `table-layout: fixed` for precise sizing

### Anki-Style Count Colors
- `newCountColor`: Blue for "New" cards
- `learnCountColor`: Orange/Red for "Learn" cards
- `dueCountColor`: Green for "Due/Review" cards
- Each theme has coordinated but distinct colors

## Review Heatmap Integration

### Architecture
Modernki automatically detects and styles the Review Heatmap addon (ID: 1771074083) using theme-coordinated colors.

### Heatmap Color System
- `heatmapColorZero`: Days with zero reviews (matches panelBackground)
- `heatmapLevel1`: Low activity 1-25%
- `heatmapLevel2`: Medium activity 26-50%
- `heatmapLevel3`: High activity 51-75%
- `heatmapLevel4`: Very high activity 76-100%

### Implementation
- File: `heatmap_integration.py`
- Function: `build_heatmap_css(cfg)` generates comprehensive CSS
- Targets: All Review Heatmap selectors (`.rh-main-container`, `.rh-cell`, `.rh-tooltip`, etc.)
- Auto-detection: Only generates CSS if Review Heatmap is installed

## Testing Changes

No automated tests. Manual testing workflow:
1. Edit files in addon folder
2. Restart Anki (or use Anki's "Debug Console" → `mw.reset()`)
3. Check: deck browser, reviewer, browser window, dialogs
4. Test with Review Heatmap if installed

### Quick Disable
Use the "Enable Modernki" checkbox in Theme Designer to instantly toggle addon on/off without restart.

## Known Complexity

- `__init__.py` is monolithic (~3900 lines) - refactoring in progress per `REFACTORING_NOTES.md`
- Theme Designer UI is embedded in `__init__.py` (lines ~2900-3900)
- Multiple backup files exist (`.backup`, `.modular`, `.new`) - `__init__.py` is the active file
