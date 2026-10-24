# Modernki — Design Backup & Architecture Reference

**Status:** Stable (2025-12-10)  
**New Features:** Review Heatmap Integration, Pink Blossom Theme, Master On/Off Toggle  
**Anki Version:** 25.09.2  
**Python:** 3.13.5, Qt 6.9.1, PyQt 6.9.1

---

## ⚠️ IMPORTANT NOTICE

This document is a **READ-ONLY reference** of all major design systems, architectural decisions, and working solutions as of the last "good state" checkpoint. 

**DO NOT modify this file automatically or during active development.** Only update when explicitly told "this is a good state."

Use this as a debugging guide and fallback reference if future changes break existing functionality.

---

## 1. TOOLBAR SYSTEM (Top Toolbar: Decks, Add, Browse, Stats, Sync)

### Problem Solved
Top toolbar was showing black background instead of pink (matching globalBackground).

### Root Cause
Anki 25.09.2 loads the toolbar webview (`TopWebView` class from `toolbar.py`) before CSS injection hooks fire. The webview uses Anki's internal `toolbar.scss` which applies `var(--canvas-glass)` or `var(--canvas-elevated)` backgrounds that override addon CSS.

### Solution (Working)
**Direct JavaScript injection at profile open** via `on_profile_did_open()`:

```python
# In on_profile_did_open():
if mw and hasattr(mw, 'toolbar') and hasattr(mw.toolbar, 'web'):
    cfg = load_config()
    toolbar_bg = cfg.get("globalBackground", "#0f0f17")
    mw.toolbar.web.eval(f"""
    document.documentElement.style.setProperty('background-color', '{toolbar_bg}', 'important');
    document.body.style.setProperty('background-color', '{toolbar_bg}', 'important');
    document.body.style.setProperty('background', '{toolbar_bg}', 'important');
    """)
```

**Why this works:**
- Runs AFTER toolbar webview is fully loaded
- Sets inline styles with `!important` to override Anki's stylesheet
- Targets `<html>`, `<body>` at document level
- Uses `globalBackground` color (not `toolbarBackground` or `panelBackground`)

### Key Details
- **Target webview:** `mw.toolbar.web` (TopWebView instance)
- **Background color source:** `cfg.get("globalBackground", "#0f0f17")`
- **Timing:** `profile_did_open` hook (fired when profile loads)
- **Method:** JavaScript `eval()` with `!important` inline styles

### Related Code Locations
- File: `__init__.py`, line ~2215 in `on_profile_did_open()`
- Hook: `gui_hooks.profile_did_open`
- Config key: `"globalBackground"`

---

## 2. CONTRAST SYSTEM (Light/Dark Text Auto-Detection)

### Problem Solved
Pink theme had light pink background (#ffe0f0) with light text (#5a1745) → poor contrast. Needed automatic light/dark text based on background luminance.

### Solution (Working)
Three utility functions calculate WCAG luminance and pick contrasting colors:

```python
def _hex_to_rgb(hex_color: str) -> Tuple[int, int, int]:
    """Parse hex color to RGB tuple."""

def _relative_luminance(hex_color: str) -> float:
    """Calculate WCAG relative luminance (0.0 to 1.0)."""
    # Uses standard formula: 0.2126*R + 0.7152*G + 0.0722*B (gamma-adjusted)

def _is_light_color(hex_color: str) -> bool:
    """Return True if luminance >= 0.6 (threshold for light colors)."""

def _ensure_contrast_color(bg_hex: str, fg_hex: Optional[str], *, 
                           light_fg: str = "#f7f7f7", 
                           dark_fg: str = "#111111") -> str:
    """Ensure text color contrasts with background.
    - If bg is light → prefer dark text (#111111)
    - If bg is dark → prefer light text (#f7f7f7)
    - If user-specified fg clashes → fall back to preferred color
    """
```

### Usage Pattern
Every CSS builder function that applies text color now uses contrast:

```python
# In build_webview_css():
webview_fg = _ensure_contrast_color(bg_color, cfg.get("webviewForeground"))
panel_text = _ensure_contrast_color(cfg.get("panelBackground", bg_color), cfg.get("textColor"))

# Then in CSS:
html, body { color: {webview_fg} !important; }
tr.deck td { color: {panel_text} !important; }
```

### Applied To
- Webview main background/text (build_webview_css)
- Toolbar background/text (build_toolbar_css)
- Bottom bar background/text (build_bottom_bar_css)
- Panel/table text colors (webview deck rows)

### Related Code Locations
- File: `__init__.py`, lines ~1045-1135
- Functions: `_hex_to_rgb`, `_relative_luminance`, `_is_light_color`, `_ensure_contrast_color`
- Config keys: `"webviewForeground"`, `"textColor"`, `"panelBackground"`

---

## 3. WEBVIEW CSS INJECTION SYSTEM

### Problem Solved
Different webview contexts (Reviewer, Browser, DeckBrowser, etc.) need different CSS. Some need background images, some need dark text on light backgrounds, some need card-specific styling.

### Solution (Working)
Centralized `inject_webview_css()` hook triggered on `gui_hooks.webview_will_set_content`.  
Context is determined by class name and routed to appropriate builder:

```python
def inject_webview_css(web_content: WebContent, context: Any) -> None:
    cfg = load_config()
    ctx_name = getattr(context, "__class__", type(context)).__name__
    
    if ctx_name in {"Reviewer", "Previewer", "CardLayout"}:
        # Apply card-specific styles + fallback override CSS
    elif ctx_name in {"TopToolbar", "Toolbar"}:
        # Apply toolbar CSS (note: this is secondary; JS at profile_open is primary)
    elif ctx_name in {"Browser", "PreviewDialog"}:
        # Apply browser preview CSS + JS to force card preview background
    elif ctx_name in {"DeckBrowser", "Overview"}:
        # Apply main webview CSS with background images
    else:
        # Apply generic webview CSS
```

### Context Types & Builders
| Context | Builder | Purpose |
|---------|---------|---------|
| Reviewer, Previewer | `build_reviewer_css()` | Card review styling |
| TopToolbar, Toolbar | `build_toolbar_css()` | Toolbar button styling |
| Browser, PreviewDialog | `build_webview_css()` | Card preview area in browser |
| DeckBrowser, Overview | `build_webview_css()` | Main deck browser & overview screens |
| Editor, EditorWebView | `build_browser_editor_css()` | Note editor in browser |

### Key Design: CSS vs JavaScript
- **CSS injection:** Applied via `web_content.head` for static styling
- **JavaScript injection:** Applied via `web_content.body` for dynamic effects (e.g., forcing card preview backgrounds on every DOM change)

### Related Code Locations
- File: `__init__.py`, lines ~2060-2170 in `inject_webview_css()`
- Hook: `gui_hooks.webview_will_set_content`
- Builders: `build_reviewer_css()`, `build_toolbar_css()`, `build_webview_css()`, `build_browser_editor_css()`

---

## 4. BROWSER PREVIEW BACKGROUND FORCING SYSTEM

### Problem Solved
Browser preview boxes had gray background (from Anki's colors.CANVAS) that overrode theme colors. Text on gray was low contrast.

### Solution (Working)
Two-pronged approach:

**A) Qt-Level Override (for gray boxes):**
```python
def _set_webview_bg(webview: Any, color_hex: str) -> None:
    """Force QWebEnginePage background and inject CSS shim."""
    try:
        from PyQt6.QtGui import QColor
        page = webview.page() if hasattr(webview, "page") else None
        if page:
            page.setBackgroundColor(QColor(color_hex))
    except Exception:
        pass
```

Called from:
- `_on_browser_will_show()` hook
- `_on_browser_did_change_row()` hook
- On theme change via `_fix_webview_backgrounds_on_theme_change()`

**B) CSS + JavaScript Injection (for webview content):**
```javascript
// In Browser/PreviewDialog context:
function forceBackground() {
    const bg = '{webview_bg}';
    const fg = '{webview_fg}';  // contrast-aware foreground
    document.querySelectorAll('*').forEach(el => {
        el.style.setProperty('background', bg, 'important');
        el.style.setProperty('color', fg, 'important');
    });
}
// Run on load, on DOM mutations, every 500ms
```

### Related Code Locations
- File: `__init__.py`
- Functions: `_set_webview_bg()` (line ~1810), `_on_browser_will_show()` (line ~2460), `_on_browser_did_change_row()` (inherited from browser_will_show hook)
- Hooks: `gui_hooks.browser_will_show`, `gui_hooks.browser_did_change_row`
- CSS injection: Lines ~2110-2130 (Browser context in `inject_webview_css`)

---

## 5. PRESET SYSTEM (Velvet Rose, Upside Down, Midnight Eclipse, etc.)

### Structure
Each preset is a complete color dictionary with:
- Typography (fontFamily, cardFontSize)
- Qt colors (globalBackground, panelBackground, textColor, etc.)
- Webview colors (webviewBackground, webviewForeground, webviewLink, etc.)
- Toolbar colors (toolbarHeight, toolbarBackground)
- Extras (extraGlobalCss, extraReviewerCss, extraWebviewCss)

### Velvet Rose Preset (Current Active)
```python
"Velvet Rose": {
    "fontFamily": "'Comic Sans MS', 'Segoe UI', cursive",
    "cardFontSize": "22px",
    "globalBackground": "#ffe0f0",    # Light pink main
    "panelBackground": "#ffc0e0",     # Slightly darker pink panels
    "textColor": "#3a0f2f",           # Dark wine text
    "webviewBackground": "#ffe0f0",
    "webviewForeground": "#3a0f2f",   # Dark wine text (contrasted)
    "webviewLink": "#b00060",         # Deep pink links
    "toolbarBackground": "#ffb0d8",   # Toolbar pink
    # ... other colors
}
```

### Key Concept: Auto-Contrast in Presets
When a light preset is active:
1. Preset defines `textColor: "#3a0f2f"` (dark)
2. `_ensure_contrast_color(bg, fg)` verifies it's dark enough for light background
3. If mismatch detected → falls back to `#111111` (pure dark)

### Storage
- **Built-in presets:** In `__init__.py` (THEME_PRESETS dict)
- **Custom presets:** In `custom_presets.json` (user-created variants)
- **Active preset:** Stored in Anki's config.json via `mw.addonManager.writeConfig(ADDON_ID, preset_dict)`

### Related Code Locations
- File: `__init__.py`, lines ~100-310 (THEME_PRESETS definitions)
- Functions: `apply_preset()` (line ~418), `get_all_presets()` (line ~375)
- Config file: `config.json` (active theme values)
- Presets file: `custom_presets.json`

---

## 6. GLOBAL Qt STYLESHEET SYSTEM

### Purpose
Apply consistent colors to Anki's Qt widgets: QToolBar, QMenuBar, QPushButton, QLineEdit, QComboBox, QTreeView, QTableView, etc.

### Application Flow
```
apply_global_stylesheet()
  ↓
build_global_stylesheet(cfg) — generates Qt CSS
  ↓
mw.app.setStyleSheet(our_css)
  ↓
Qt engine applies to all widgets
```

### Key Selectors
```css
QWidget { background-color: globalBackground; color: textColor; }
QToolBar { background: globalBackground; }
QMenuBar { background: globalBackground; }
QPushButton { background: panelBackground; color: textColor; }
QLineEdit { background: panelBackground; border: borderColor; }
QTableView, QTreeView { background: panelBackground; }
QTreeWidget::item:selected { background: accentColor; }
```

### Called From
- `on_profile_did_open()` hook
- `apply_preset()` when theme is switched
- `refresh_theme()` public helper

### Related Code Locations
- File: `__init__.py`
- Function: `build_global_stylesheet()` (line ~540), `apply_global_stylesheet()` (line ~660)
- Hook: `gui_hooks.profile_did_open`

---

## 7. THEME CHANGE SYSTEM

### Problem Solved
When user switches themes, need to update Qt widgets, webviews, and overrides simultaneously without conflicts.

### Solution (Working)
Hook into `gui_hooks.theme_did_change` with multiple handlers in sequence:

```python
gui_hooks.theme_did_change.append(_override_canvas_palette)  # 1st: Override Anki's CANVAS
gui_hooks.theme_did_change.append(_fix_webview_backgrounds_on_theme_change)  # 2nd: Fix Qt-level backgrounds
gui_hooks.theme_did_change.append(_patch_on_theme_did_change)  # 3rd: Monkey-patch webview handler
```

Each handler rebuilds its piece without interfering:
1. `_override_canvas_palette()` — Forces Anki's color palette to our webviewBackground
2. `_fix_webview_backgrounds_on_theme_change()` — Calls `_set_webview_bg()` on all open webviews
3. `_patch_on_theme_did_change()` — Patches AnkiWebView's handler to re-apply our background after Anki's reset

### Order Matters
The sequence ensures our overrides take precedence because they run AFTER Anki's defaults.

### Related Code Locations
- File: `__init__.py`
- Functions: `_override_canvas_palette()` (line ~1790), `_fix_webview_backgrounds_on_theme_change()` (line ~2180), `_patch_on_theme_did_change()` (line ~1850)
- Hook: `gui_hooks.theme_did_change`

---

## 8. BROWSER WINDOW STYLING

### Problem Solved
Browser tables and trees showed white/light text on light backgrounds; black text on dark. Needed consistent readable black text throughout.

### Solution (Working)
Qt stylesheet with browser-specific selectors:

```css
Browser QTableView,
Browser QTreeWidget,
Browser QHeaderView::section,
Browser QLineEdit,
Browser QLabel { color: #000000; }

Browser QTableView::item:selected,
Browser QTreeWidget::item:selected { color: #000000; }
```

Forces black text in all browser widgets regardless of theme.

### Related Code Locations
- File: `__init__.py`
- Location: Lines ~700-820 in `build_global_stylesheet()`
- Selector prefix: `Browser ` (Q object name matching)

---

## 9. CARD REVIEWER STYLING

### Features
- Background gradient (gradientStart → gradientEnd)
- Card container styling (cardBackground, cardRadius, cardMaxWidth)
- Optional animated effects (neon for Midnight Eclipse)
- Contrast-aware text color

### CSS Builder
```python
def _build_card_content_css(cfg: Dict[str, Any]) -> str:
    """Styles card text, buttons (Again, Hard, Good, Easy), preset-specific animations."""
```

### Applied Via
- `build_reviewer_css()` — main card styling
- Optional preset-specific animations detected by font family or accent color

### Related Code Locations
- File: `__init__.py`
- Functions: `build_reviewer_css()` (line ~1500), `_build_card_content_css()` (line ~1540)

---

## 10. ADDON INTEGRATION CSS

### Purpose
Auto-detect popular add-ons and apply theme-consistent styling to their UI elements.

### Supported Add-ons
- Review Heatmap (1771074083)
- Image Occlusion Enhanced (1374772155)
- Hierarchical Tags (594329229)
- Advanced Browser (874215009)
- More Decks Stats (1556734708)

### Function
```python
def build_addon_integration_css(cfg: Dict[str, Any]) -> str:
    """Auto-detect installed add-ons and inject compatible CSS."""
```

### Related Code Locations
- File: `__init__.py`
- Function: `build_addon_integration_css()` (line ~1800)

---

## DEBUGGING CHECKLIST

If something breaks in the future, check in this order:

### Toolbar Not Colored
- [ ] Check `on_profile_did_open()` is registered via `gui_hooks.profile_did_open`
- [ ] Verify `mw.toolbar.web.eval()` call is not wrapped in try/except that swallows errors
- [ ] Ensure `cfg.get("globalBackground")` is not returning default dark color
- [ ] Test manually: `mw.toolbar.web.eval("console.log('toolbar web exists')")`

### Low Contrast Text
- [ ] Verify `_ensure_contrast_color()` is being called for the affected element
- [ ] Check luminance calculation: `_relative_luminance(bg_color)` should return 0.0-1.0
- [ ] Ensure light_fg and dark_fg defaults are correct (should be opposite colors)

### Webview Background Gray
- [ ] Check `_override_canvas_palette()` is called first in theme_did_change
- [ ] Verify `_set_webview_bg()` is actually called on the right webview instance
- [ ] Ensure QWebEnginePage.setBackgroundColor() is supported in current Qt version

### Browser Preview Still Gray
- [ ] Verify `_on_browser_will_show()` hook is registered
- [ ] Check JavaScript injection is not malformed (watch for quote escaping)
- [ ] Ensure mutation observer in JS is actually running (no console errors)

### Preset Not Applied
- [ ] Verify preset exists in THEME_PRESETS or custom_presets.json
- [ ] Check `apply_preset()` is calling `mw.addonManager.writeConfig()`
- [ ] Ensure `reload_config()` clears the `_config_cache` global
- [ ] Test manually: `print(load_config()['globalBackground'])`

---

## IMPORTANT VARIABLES & CONSTANTS

| Name | Value | Purpose |
|------|-------|---------|
| `ADDON_NAME` | `"Visuals"` | Display name |
| `ADDON_ID` | `__name__` | Config key for addon manager |
| `ADDON_DIR` | `Path(__file__).parent` | Add-on folder path |
| `_config_cache` | Global dict or None | Caches loaded config to avoid repeated file reads |
| Luminance threshold | `0.6` | Colors >= 0.6 luminance are "light", < 0.6 are "dark" |
| Dark fallback | `"#111111"` | Pure black text for light backgrounds |
| Light fallback | `"#f7f7f7"` | Near-white text for dark backgrounds |

---

## FUTURE NOTES & CONSIDERATIONS

1. **Toolbar CSS Injection**: The CSS injection route (`build_toolbar_css()`) is still incomplete. We switched to direct JS injection at `on_profile_did_open()` because the `webview_will_set_content` hook was not reliable for TopToolbar in Anki 25.09.2. If Anki changes its toolbar architecture again, this may need revisiting.

2. **Contrast Thresholds**: The luminance threshold of `0.6` was chosen empirically. If future themes have mid-range backgrounds, consider using a more granular scale or allowing threshold configuration.

3. **Browser Preview**: The `_set_webview_bg()` + JavaScript combination is somewhat redundant. A cleaner future approach would be to patch QWebEnginePage creation at the source, but that requires deeper Anki internals access.

4. **Performance**: The JavaScript `setInterval(forceBackground, 500)` in preview injection runs every 500ms. For high-refresh scenarios, consider debouncing or using MutationObserver exclusively.

5. **Qt6 Migration**: All code assumes PyQt6. If support for PyQt5 is ever needed, import guards and version detection would be required.

---

## 7. REVIEW HEATMAP INTEGRATION (2025-12-10)

### Overview
Modernki now provides comprehensive styling for the Review Heatmap addon (ID: 1771074083). Each theme preset includes custom heatmap colors that match its aesthetic.

### Architecture

**Heatmap Color System:**
- `heatmapColorZero`: Days with zero reviews (matches panelBackground)
- `heatmapLevel1`: Low activity 1-25% (subtle theme color)
- `heatmapLevel2`: Medium activity 26-50% (moderate theme color)
- `heatmapLevel3`: High activity 51-75% (strong accent color)
- `heatmapLevel4`: Very high activity 76-100% (brightest accent)

### Implementation Files
- **`heatmap_integration.py`**: Generates comprehensive CSS targeting all Review Heatmap selectors
- **`constants.py`**: Defines default heatmap colors
- **All theme presets**: Include custom heatmap color definitions

### CSS Targeting
The integration styles:
- Main containers (`.heatmap-graph`, `.rh-main-container`)
- Controls and buttons (`.rh-btn`, `.rh-control-btn`)
- Individual cells with intensity levels (`.rh-cell[data-level="1"]` through `[data-level="4"]`)
- Tooltips, legends, navigation, streak counters
- Today indicator with accent color glow

### Theme Examples
- **Default**: Blue gradient (#1b1b26 → #6fa0ff)
- **Upside Down**: Red gradient (#16161a → #ff3b57)
- **Pink Blossom**: Pink gradient (#ff99c9 → #c75fa5)
- **Forest Zen**: Green gradient (#253325 → #a3d977)

### Key Code Locations
- File: `heatmap_integration.py`, function `build_heatmap_css()`
- Hook: Integrated via `inject_webview_css()` when Review Heatmap is detected
- Config keys: `heatmapColorZero`, `heatmapLevel1`-`heatmapLevel4`

---

## 8. PINK BLOSSOM THEME (2025-12-10)

### Overview
New light pink theme with medium saturation, designed to be clearly pink without being overwhelming.

### Color Palette
```python
"globalBackground": "#ffb3d9",      # Light pink base
"panelBackground": "#ffc4e3",       # Slightly lighter panels
"textColor": "#a02c6d",             # Deep magenta text
"accentColor": "#ff5fa2",           # Vibrant pink accent
"borderColor": "#ff99cc",           # Soft pink borders
"deckHoverBackground": "#ff99c9",   # Hover state
```

### Design Philosophy
- Maintains clear pink identity throughout
- Uses lighter backgrounds for better readability
- Text colors provide strong contrast (dark magenta on light pink)
- No white or dark backgrounds - everything is distinctly pink

### Heatmap Colors
- Zero reviews: `#ff99c9` (light pink)
- Level 1-4: `#ff7eb9` → `#ff5fa2` → `#e0449f` → `#c75fa5` (pink gradient)

---

## 9. MASTER ON/OFF TOGGLE (2025-12-10)

### Problem Solved
Users needed a way to disable Modernki and revert to vanilla Anki without restarting.

### Solution
Replaced `forceCardStyling` with `enableModernki` master toggle.

### Implementation

**Config Key:** `enableModernki` (boolean, default: `True`)

**Early Exit Pattern:**
```python
def build_global_stylesheet(cfg: Dict[str, Any]) -> str:
    if not cfg.get("enableModernki", True):
        return ""
    # ... rest of styling
```

**Applied In:**
- `build_global_stylesheet()`: Qt widget styling
- `inject_webview_css()`: Webview styling
- All major CSS generation functions

### UI Location
- Theme Designer → "Modernki Control" section
- Checkbox: "Enable Modernki"
- Changes take effect immediately for webviews
- Qt widgets update on next action/screen change

### Benefits
1. Instant disable without addon removal
2. Safe testing/debugging
3. Quick comparison with vanilla Anki
4. No restart required

---

## LAST VERIFIED STATE

- **Date:** 2025-12-10
- **Active Themes:** All 7 presets (Default, Upside Down, Midnight Eclipse, Forest Zen, Velvet Rose, Pink Blossom, Sky Breeze)
- **Anki Version:** 25.09.2
- **Status:** ✅ Review Heatmap integration complete
- **Status:** ✅ Pink Blossom theme added
- **Status:** ✅ Master on/off toggle functional
- **Known Issues:** None

---

**End of Design Backup**  
*Do not modify this document except by explicit user instruction.*
