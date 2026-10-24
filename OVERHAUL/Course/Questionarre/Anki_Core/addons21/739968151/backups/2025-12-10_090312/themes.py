"""Theme definitions and preset management for Modernki."""

from typing import Dict, Any
import json
from pathlib import Path

try:
    from aqt import mw
    from aqt.utils import tooltip  # type: ignore
except Exception:
    mw = None
    tooltip = None

from .constants import DEFAULTS
from .config import load_config, reload_config

# Built-in (read-only) presets
THEME_PRESETS: Dict[str, Dict[str, Any]] = {
    "Default": {
        "fontFamily": "Inter, Segoe UI, Arial, sans-serif",
        "cardFontSize": "20px",
        "globalBackground": "#0f0f17",
        "panelBackground": "#1b1b26",
        "textColor": "#e0e0e6",
        "mutedTextColor": "#a0a0b0",
        "accentColor": "#4f86ff",
        "dangerColor": "#ff4f64",
        "successColor": "#3fbf7f",
        "borderColor": "#2a2a38",
        "focusRingColor": "#4f86ff",
        "toolbarHeight": 34,
        "webviewBackground": "#0f0f17",
        "webviewBackgroundImage": "",
        "webviewCanvas": "#1b1b26",
        "webviewForeground": "#e0e0e6",
        "webviewLink": "#4f86ff",
        "webviewBorder": "#2a2a38",
        "deckHoverBackground": "#2a2a38",
        "toolbarBackground": "#16161f",
        "buttonDecksColor": "#4f86ff",
        "buttonAddColor": "#3fbf7f",
        "buttonBrowseColor": "#4f86ff",
        "buttonStatsColor": "#4f86ff",
        "buttonSyncColor": "#4f86ff",
        "gradientStart": "#1e1e2e",
        "gradientEnd": "#11111b",
        "cardBackground": "rgba(255,255,255,0.05)",
        "cardRadius": "18px",
        "cardMaxWidth": "760px",
        "enableGlobalStyles": True,
        "enableReviewerStyles": True,
        "enableWebviewStyles": True,
        "extraGlobalCss": "",
        "extraReviewerCss": "",
        "extraWebviewCss": "",
        "menuGlowEnabled": False,
        "menuGlowColor": "#4f86ff",
        "menuGlowSpeed": 2.0,
        "menuGlowIntensity": 35,
        "menuGlowBlur": 8,
        "enableModernki": True,
        "heatmapColorZero": "#1b1b26",
        "heatmapLevel1": "#2d4f7f",
        "heatmapLevel2": "#3d6fb3",
        "heatmapLevel3": "#4f86ff",
        "heatmapLevel4": "#6fa0ff",
        "newCountColor": "#4fc3f7",
        "learnCountColor": "#ff8a65",
        "dueCountColor": "#81c784",
        "deckListFontSize": "1.15em",
        "countFontSize": "1.1em",
        "deckNameColumnWidth": "60%",
        "countColumnWidth": "50px",
    },
    "Upside Down": {
        "fontFamily": "'Roboto', 'Segoe UI', sans-serif",
        "cardFontSize": "20px",
        "globalBackground": "#0b0b0d",
        "panelBackground": "#121215",
        "textColor": "#e8e8ea",
        "mutedTextColor": "#b3b3b8",
        "accentColor": "#d7263d",
        "dangerColor": "#ff2e4c",
        "successColor": "#3fd77b",
        "borderColor": "#2a2a30",
        "focusRingColor": "#d7263d",
        "toolbarHeight": 34,
        "webviewBackground": "#0b0b0d",
        "webviewBackgroundImage": "stranger_things.jpg",
        "webviewBackgroundImageOpacity": 0.45,
        "webviewCanvas": "#16161a",
        "webviewForeground": "#e8e8ea",
        "webviewLink": "#ff3b57",
        "webviewBorder": "#2a2a30",
        "deckHoverBackground": "#1c1c21",
        "browserPreviewBackground": "#151518",
        "browserPreviewOuterBackground": "#000000",
        "toolbarBackground": "#0b0b0d",
        "buttonDecksColor": "#d7263d",
        "buttonAddColor": "#3fd77b",
        "buttonBrowseColor": "#d7263d",
        "buttonStatsColor": "#d7263d",
        "buttonSyncColor": "#d7263d",
        "gradientStart": "#1a0a0e",
        "gradientEnd": "#0b0b0d",
        "cardBackground": "rgba(215,38,61,0.07)",
        "cardRadius": "16px",
        "cardMaxWidth": "780px",
        "enableGlobalStyles": True,
        "enableReviewerStyles": True,
        "enableWebviewStyles": True,
        "extraGlobalCss": "QWidget { animation: fadeIn 0.5s ease; } QPushButton:hover { box-shadow: 0 4px 14px rgba(215,38,61,0.35); transition: all 0.3s; }",
        "extraReviewerCss": "@keyframes glowRed { from { box-shadow: 0 0 6px rgba(215,38,61,0.25); } to { box-shadow: 0 0 20px rgba(215,38,61,0.6); } } .card { border: 1px solid rgba(215,38,61,0.3); }",
        "extraWebviewCss": "tr.deck.current td { color: #000000 !important; }",
        "menuGlowEnabled": False,
        "menuGlowColor": "#d7263d",
        "menuGlowSpeed": 2.2,
        "menuGlowIntensity": 35,
        "menuGlowBlur": 8,
        "enableModernki": True,
        "heatmapColorZero": "#16161a",
        "heatmapLevel1": "#5a1420",
        "heatmapLevel2": "#8d1f31",
        "heatmapLevel3": "#d7263d",
        "heatmapLevel4": "#ff3b57",
        "newCountColor": "#ff6b6b",
        "learnCountColor": "#ffa726",
        "dueCountColor": "#66bb6a",
        "deckListFontSize": "1.15em",
        "countFontSize": "1.1em",
        "deckNameColumnWidth": "60%",
        "countColumnWidth": "50px",
    },
    "Midnight Eclipse": {
        "fontFamily": "'Roboto', 'Segoe UI', sans-serif",
        "cardFontSize": "20px",
        "globalBackground": "#0d0d12",
        "panelBackground": "#1a1a22",
        "textColor": "#d4d4e0",
        "mutedTextColor": "#7a7a90",
        "accentColor": "#6c63ff",
        "dangerColor": "#e63946",
        "successColor": "#06ffa5",
        "borderColor": "#2a2a38",
        "focusRingColor": "#6c63ff",
        "toolbarHeight": 34,
        "webviewBackground": "#0d0d12",
        "webviewBackgroundImage": "",
        "webviewCanvas": "#1a1a22",
        "webviewForeground": "#d4d4e0",
        "webviewLink": "#6c63ff",
        "webviewBorder": "#2a2a38",
        "deckHoverBackground": "#25252f",
        "browserPreviewBackground": "#252530",
        "browserPreviewOuterBackground": "#000000",
        "toolbarBackground": "#0d0d12",
        "buttonDecksColor": "#6c63ff",
        "buttonAddColor": "#06ffa5",
        "buttonBrowseColor": "#6c63ff",
        "buttonStatsColor": "#6c63ff",
        "buttonSyncColor": "#6c63ff",
        "gradientStart": "#1a1a25",
        "gradientEnd": "#0d0d15",
        "cardBackground": "rgba(108,99,255,0.06)",
        "cardRadius": "16px",
        "cardMaxWidth": "780px",
        "enableGlobalStyles": True,
        "enableReviewerStyles": True,
        "enableWebviewStyles": True,
        "extraGlobalCss": "QWidget { animation: fadeIn 0.5s ease; } QPushButton:hover { box-shadow: 0 4px 15px rgba(108,99,255,0.4); transition: all 0.3s; }",
        "extraReviewerCss": "@keyframes smoothEntry { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } } .card { animation: smoothEntry 0.6s ease-out; }",
        "extraWebviewCss": "tr.deck { transition: all 0.3s ease; } tr.deck:hover { transform: translateX(8px); box-shadow: -4px 0 8px rgba(108,99,255,0.3); }",
        "menuGlowEnabled": False,
        "menuGlowColor": "#6c63ff",
        "menuGlowSpeed": 2.5,
        "menuGlowIntensity": 35,
        "menuGlowBlur": 8,
        "enableModernki": True,
        "heatmapColorZero": "#1a1a22",
        "heatmapLevel1": "#3d3880",
        "heatmapLevel2": "#524bb3",
        "heatmapLevel3": "#6c63ff",
        "heatmapLevel4": "#8f87ff",
        "newCountColor": "#7c4dff",
        "learnCountColor": "#ff7043",
        "dueCountColor": "#69f0ae",
        "deckListFontSize": "1.15em",
        "countFontSize": "1.1em",
        "deckNameColumnWidth": "60%",
        "countColumnWidth": "50px",
    },
    "Forest Zen": {
        "fontFamily": "'Georgia', 'Times New Roman', serif",
        "cardFontSize": "21px",
        "globalBackground": "#1a2318",
        "panelBackground": "#253325",
        "textColor": "#d4e8d4",
        "mutedTextColor": "#8a9a8a",
        "accentColor": "#7bc67e",
        "dangerColor": "#d9a62e",
        "successColor": "#a3d977",
        "borderColor": "#3a4a3a",
        "focusRingColor": "#7bc67e",
        "toolbarHeight": 34,
        "webviewBackground": "#1a2318",
        "webviewBackgroundImage": "forest.jpg",
        "webviewBackgroundImageOpacity": 0.5,
        "webviewCanvas": "#253325",
        "webviewForeground": "#d4e8d4",
        "webviewLink": "#7bc67e",
        "deckHoverBackground": "#2e3e2e",
        "browserPreviewBackground": "#1a2820",
        "browserPreviewOuterBackground": "#000000",
        "toolbarBackground": "#1a2318",
        "buttonDecksColor": "#7bc67e",
        "buttonAddColor": "#a3d977",
        "buttonBrowseColor": "#7bc67e",
        "buttonStatsColor": "#7bc67e",
        "buttonSyncColor": "#7bc67e",
        "gradientStart": "#253325",
        "gradientEnd": "#1a2318",
        "cardBackground": "rgba(123,198,126,0.08)",
        "cardRadius": "14px",
        "cardMaxWidth": "740px",
        "enableGlobalStyles": True,
        "enableReviewerStyles": True,
        "enableWebviewStyles": True,
        "extraGlobalCss": "QWidget { animation: fadeIn 0.5s ease; } QPushButton:hover { background: #3a4a3a; transition: background 0.3s; }",
        "extraReviewerCss": "@keyframes gentleSlide { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } } .card { animation: gentleSlide 0.7s ease; }",
        "extraWebviewCss": "tr.deck { transition: background 0.3s ease; } tr.deck:hover { background: #2e3e2e; }",
        "menuGlowEnabled": False,
        "menuGlowColor": "#7bc67e",
        "menuGlowSpeed": 3.0,
        "menuGlowIntensity": 35,
        "menuGlowBlur": 8,
        "enableModernki": True,
        "heatmapColorZero": "#253325",
        "heatmapLevel1": "#3d5c3f",
        "heatmapLevel2": "#568c59",
        "heatmapLevel3": "#7bc67e",
        "heatmapLevel4": "#a3d977",
        "newCountColor": "#80deea",
        "learnCountColor": "#ffb74d",
        "dueCountColor": "#aed581",
        "deckListFontSize": "1.15em",
        "countFontSize": "1.1em",
        "deckNameColumnWidth": "60%",
        "countColumnWidth": "50px",
    },
    "Velvet Rose": {
        "fontFamily": "'Poppins', 'Segoe UI', Arial, sans-serif",
        "cardFontSize": "20px",
        "globalBackground": "#1f0f18",
        "panelBackground": "#2a1623",
        "textColor": "#f8eaf0",
        "mutedTextColor": "#d9b6c7",
        "accentColor": "#ff5ca8",
        "dangerColor": "#ff6b9a",
        "successColor": "#66d1a4",
        "borderColor": "#5a2a40",
        "focusRingColor": "#ff82bf",
        "toolbarHeight": 34,
        "webviewBackground": "#2b1724",
        "webviewBackgroundImage": "",
        "webviewCanvas": "#2e1a27",
        "webviewForeground": "#f8eaf0",
        "webviewLink": "#ff8ec3",
        "webviewBorder": "#5a2a40",
        "deckHoverBackground": "#3f2231",
        "browserPreviewBackground": "#2d1926",
        "browserPreviewOuterBackground": "#1a0d15",
        "toolbarBackground": "#3a1c2c",
        "buttonDecksColor": "#ff5ca8",
        "buttonAddColor": "#a3d977",
        "buttonBrowseColor": "#ff5ca8",
        "buttonStatsColor": "#ff5ca8",
        "buttonSyncColor": "#ff5ca8",
        "gradientStart": "#2c1623",
        "gradientEnd": "#1f0f18",
        "cardBackground": "rgba(255,160,200,0.10)",
        "cardRadius": "18px",
        "cardMaxWidth": "760px",
        "enableGlobalStyles": True,
        "enableReviewerStyles": True,
        "enableWebviewStyles": True,
        "extraGlobalCss": "QPushButton:hover { filter: brightness(1.05); transition: filter 0.2s; }",
        "extraReviewerCss": "",
        "extraWebviewCss": "tr.deck { transition: background 0.2s ease; } tr.deck:hover { background: #3f2231; }",
        "menuGlowEnabled": False,
        "menuGlowColor": "#ff5ca8",
        "menuGlowSpeed": 2.0,
        "menuGlowIntensity": 35,
        "menuGlowBlur": 8,
        "enableModernki": True,
        "heatmapColorZero": "#2a1623",
        "heatmapLevel1": "#5a2848",
        "heatmapLevel2": "#8d3c74",
        "heatmapLevel3": "#ff5ca8",
        "heatmapLevel4": "#ff8ec3",
        "newCountColor": "#f48fb1",
        "learnCountColor": "#ffab91",
        "dueCountColor": "#80cbc4",
        "deckListFontSize": "1.15em",
        "countFontSize": "1.1em",
        "deckNameColumnWidth": "60%",
        "countColumnWidth": "50px",
    },
    "Pink Blossom": {
        "fontFamily": "'Poppins', 'Segoe UI', Arial, sans-serif",
        "cardFontSize": "20px",
        "globalBackground": "#ffeef6",
        "panelBackground": "#fff5f9",
        "textColor": "#1a1a1a",
        "mutedTextColor": "#333333",
        "accentColor": "#ff5fa2",
        "dangerColor": "#ff4f78",
        "successColor": "#4CAF50",
        "borderColor": "#ffcce0",
        "focusRingColor": "#ffd4ed",
        "toolbarHeight": 34,
        "webviewBackground": "#ffeef6",
        "webviewBackgroundImage": "",
        "webviewCanvas": "#fff5f9",
        "webviewForeground": "#1a1a1a",
        "webviewLink": "#d6336c",
        "webviewBorder": "#ffb3d1",
        "deckHoverBackground": "#ffd6e8",
        "browserPreviewBackground": "#ffcce0",
        "browserPreviewOuterBackground": "#ffc4db",
        "toolbarBackground": "#ffd6e8",
        "buttonDecksColor": "#ff5fa2",
        "buttonAddColor": "#ffb3de",
        "buttonBrowseColor": "#ff5fa2",
        "buttonStatsColor": "#ff5fa2",
        "buttonSyncColor": "#ff5fa2",
        "gradientStart": "#ffd6e8",
        "gradientEnd": "#ffc4db",
        "cardBackground": "rgba(255,200,220,0.15)",
        "cardRadius": "18px",
        "cardMaxWidth": "760px",
        "enableGlobalStyles": True,
        "enableReviewerStyles": True,
        "enableWebviewStyles": True,
        "extraGlobalCss": "QPushButton:hover { filter: brightness(1.04); transition: filter 0.2s; }",
        "extraReviewerCss": "",
        "extraWebviewCss": "tr.deck { transition: background 0.2s ease; } tr.deck:hover { background: #ffd6e8; }",
        "menuGlowEnabled": False,
        "menuGlowColor": "#ff5fa2",
        "menuGlowSpeed": 2.0,
        "menuGlowIntensity": 35,
        "menuGlowBlur": 8,
        "enableModernki": True,
        "heatmapColorZero": "#ffd6e8",
        "heatmapLevel1": "#ffc4db",
        "heatmapLevel2": "#ff5fa2",
        "heatmapLevel3": "#e0449f",
        "heatmapLevel4": "#c75fa5",
        "newCountColor": "#0066cc",
        "learnCountColor": "#cc3300",
        "dueCountColor": "#228b22",
        "deckListFontSize": "1.15em",
        "countFontSize": "1.1em",
        "deckNameColumnWidth": "60%",
        "countColumnWidth": "50px",
        "deckListTextColor": "#1a1a1a",
    },
    "Sky Breeze (Light)": {
        "fontFamily": "'Inter', 'Segoe UI', Arial, sans-serif",
        "cardFontSize": "20px",
        "globalBackground": "#f4fbff",
        "panelBackground": "#eef7ff",
        "textColor": "#0f2230",
        "mutedTextColor": "#6b7c88",
        "accentColor": "#4aa3ff",
        "dangerColor": "#ff5c7a",
        "successColor": "#2fbf7f",
        "borderColor": "#dbeaf6",
        "focusRingColor": "#6ec1ff",
        "toolbarHeight": 34,
        "webviewBackground": "#f4fbff",
        "webviewBackgroundImage": "",
        "webviewCanvas": "#eef7ff",
        "webviewForeground": "#0f2230",
        "webviewLink": "#4aa3ff",
        "webviewBorder": "#d1e6fb",
        "deckHoverBackground": "#e6f3ff",
        "browserPreviewBackground": "#f8fdff",
        "browserPreviewOuterBackground": "#e9f5ff",
        "toolbarBackground": "#f2f9ff",
        "buttonDecksColor": "#4aa3ff",
        "buttonAddColor": "#2fbf7f",
        "buttonBrowseColor": "#4aa3ff",
        "buttonStatsColor": "#4aa3ff",
        "buttonSyncColor": "#4aa3ff",
        "gradientStart": "#f7fdff",
        "gradientEnd": "#e9f5ff",
        "cardBackground": "rgba(74,163,255,0.06)",
        "cardRadius": "18px",
        "cardMaxWidth": "760px",
        "enableGlobalStyles": True,
        "enableReviewerStyles": True,
        "enableWebviewStyles": True,
        "extraGlobalCss": "QPushButton:hover { filter: brightness(1.04); }",
        "extraReviewerCss": "",
        "extraWebviewCss": "tr.deck { transition: background 0.2s ease; } tr.deck:hover { background: #e6f3ff; }",
        "menuGlowEnabled": False,
        "menuGlowColor": "#4aa3ff",
        "menuGlowSpeed": 2.0,
        "menuGlowIntensity": 35,
        "menuGlowBlur": 8,
        "enableModernki": True,
        "heatmapColorZero": "#eef7ff",
        "heatmapLevel1": "#a8d4ff",
        "heatmapLevel2": "#6ec1ff",
        "heatmapLevel3": "#4aa3ff",
        "heatmapLevel4": "#2d85e6",
        "newCountColor": "#4aa3ff",
        "learnCountColor": "#ff5c7a",
        "dueCountColor": "#2fbf7f",
        "deckListFontSize": "1.15em",
        "countFontSize": "1.1em",
        "deckNameColumnWidth": "60%",
        "countColumnWidth": "50px",
        "deckListTextColor": "#0f2230",
    },
}


def get_custom_presets_path() -> Path:
    """Get path to custom presets JSON file."""
    from .config import ADDON_DIR
    return ADDON_DIR / "custom_presets.json"


def load_custom_presets() -> Dict[str, Dict[str, Any]]:
    """Load custom user-created presets from disk."""
    path = get_custom_presets_path()
    if not path.exists():
        return {}
    try:
        with path.open("r", encoding="utf-8") as f:
            data = json.load(f)
            if isinstance(data, dict):
                return data
    except Exception:
        pass
    return {}


def save_custom_presets(presets: Dict[str, Dict[str, Any]]) -> bool:
    """Save custom presets to disk."""
    path = get_custom_presets_path()
    try:
        with path.open("w", encoding="utf-8") as f:
            json.dump(presets, f, indent=2, ensure_ascii=False)
        return True
    except Exception:
        return False


def get_all_presets() -> Dict[str, Dict[str, Any]]:
    """Get all presets: built-in + custom."""
    custom = load_custom_presets()
    # Custom presets override built-in if same name (allows user to override)
    return {**THEME_PRESETS, **custom}


def save_current_as_preset(preset_name: str, config_override: Dict[str, Any] | None = None) -> bool:
    """Save current config as a custom preset.
    
    Args:
        preset_name: Name for the preset
        config_override: Optional config dict to use instead of current config
    """
    if not preset_name or not preset_name.strip():
        return False
    
    preset_name = preset_name.strip()
    
    cfg = config_override if config_override else load_config()
    custom_presets = load_custom_presets()
    
    # Save all theme properties
    preset_data = {k: cfg.get(k, DEFAULTS[k]) for k in DEFAULTS.keys()}
    custom_presets[preset_name] = preset_data
    
    return save_custom_presets(custom_presets)


def delete_custom_preset(preset_name: str) -> bool:
    """Delete a custom preset. Cannot delete built-in presets."""
    if preset_name in THEME_PRESETS:
        return False  # Cannot delete built-in
    
    custom_presets = load_custom_presets()
    if preset_name in custom_presets:
        del custom_presets[preset_name]
        return save_custom_presets(custom_presets)
    return False


def is_builtin_preset(preset_name: str) -> bool:
    """Check if preset is a built-in (read-only) preset."""
    return preset_name in THEME_PRESETS


def apply_preset(preset_name: str) -> None:
    """Apply a theme preset by name, save to config, and refresh UI."""
    from .patcher import apply_global_stylesheet, build_toolbar_css
    
    all_presets = get_all_presets()
    if preset_name not in all_presets:
        return
    preset = all_presets[preset_name]
    if mw and hasattr(mw, "addonManager"):
        try:
            from .config import ADDON_ID
            mw.addonManager.writeConfig(ADDON_ID, preset)  # type: ignore
        except Exception:
            pass
    
    # Force reload config to clear cache
    reload_config()
    
    # Apply global styles
    apply_global_stylesheet()
    
    # Force toolbar to rebuild and re-inject CSS
    if mw and hasattr(mw, 'toolbar'):
        try:
            # Get the new CSS with updated colors
            toolbar_css = build_toolbar_css(load_config())
            # Inject directly into toolbar webview
            if hasattr(mw.toolbar, 'web') and hasattr(mw.toolbar.web, 'eval'):
                js_code = f"""
                (function() {{
                    let style = document.getElementById('uba-toolbar-style');
                    if (!style) {{
                        style = document.createElement('style');
                        style.id = 'uba-toolbar-style';
                        document.head.appendChild(style);
                    }}
                    style.textContent = `{toolbar_css.replace('`', '\\`').replace('\\', '\\\\')}`;
                }})();
                """
                mw.toolbar.web.eval(js_code)
        except Exception:
            pass
    
    # Force deck browser reload
    if mw and mw.state == "deckBrowser":
        try:
            # Use a slight delay to ensure config is written
            from aqt.qt import QTimer  # type: ignore
            QTimer.singleShot(100, lambda: mw.moveToState("deckBrowser"))
        except Exception:
            pass
    
    if tooltip:
        tooltip(f"{preset_name} theme applied!", period=2000)  # type: ignore
