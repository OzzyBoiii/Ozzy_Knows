"""Webview CSS generation and injection for Universal Beautify Anki.

Handles CSS injection into Anki's webviews (deck browser, overview, reviewer).
Includes background image encoding and special effects.
"""

from typing import Dict, Any, Optional
from pathlib import Path
import base64
from enum import Enum

from .constants import ADDON_NAME, DEFAULTS
from .config import load_config, ADDON_DIR, ADDON_ID
from .patcher import (
    _hex_to_rgb,
    _rgba_from_hex,
    _relative_luminance,
    _is_light_color,
    _ensure_contrast_color,
)

try:
    from aqt import mw
    from aqt.webview import AnkiWebView
except Exception:
    mw = None
    AnkiWebView = None


class WebviewContext(Enum):
    """Identifies which webview context CSS is being generated for."""
    BROWSER = "browser"
    OVERVIEW = "overview"
    REVIEWER = "reviewer"
    PREVIEWER = "previewer"
    UNKNOWN = "unknown"


def _get_image_base64(image_path: str) -> Optional[str]:
    """Convert an image file to base64 data URI. Returns None if file doesn't exist."""
    try:
        p = Path(image_path)
        if not p.exists():
            return None
        ext = p.suffix.lower()
        if ext not in ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.svg']:
            return None
        mime = {
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.png': 'image/png',
            '.gif': 'image/gif',
            '.webp': 'image/webp',
            '.svg': 'image/svg+xml'
        }.get(ext, 'image/jpeg')
        with open(p, 'rb') as f:
            b64 = base64.b64encode(f.read()).decode('ascii')
        return f"data:{mime};base64,{b64}"
    except Exception:
        return None


def build_toolbar_css(cfg: Dict[str, Any]) -> str:
    """Build toolbar button CSS for Qt."""
    return f"""
/* Toolbar Styling */
QToolBar {{
    background: {cfg['globalBackground']};
    spacing: 0px;
    padding: 4px 0px;
    border: none;
}}
QToolBar QWidget {{
    margin: 0px;
}}
QToolButton {{
    background: {cfg['globalBackground']};
    color: {cfg['textColor']};
    padding: 6px 12px;
    margin: 2px 2px;
    border: 1px solid transparent;
    border-radius: 4px;
    font-size: 12px;
    font-weight: 500;
}}
QToolButton:hover {{
    background: {cfg['cardBackground']};
    border: 1px solid {cfg['borderColor']};
}}
QToolButton:pressed {{
    background: {cfg['accentColor']};
    color: #fff;
    border: 1px solid {cfg['accentColor']};
}}
QToolButton:disabled {{
    color: {cfg['mutedTextColor']};
    background: transparent;
}}
QToolBar::separator {{
    width: 1px;
    background: {cfg['borderColor']};
    margin: 0px 4px;
}}
"""


def build_browser_editor_css(cfg: Dict[str, Any]) -> str:
    """Build CSS for browser editor webviews."""
    return f"""
/* Browser Editor Webview */
.field {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    border-radius: 4px !important;
    padding: 8px !important;
    margin: 4px !important;
}}
.field:focus {{
    border-color: {cfg['accentColor']} !important;
    outline: none !important;
}}
.field-label {{
    color: {cfg['mutedTextColor']} !important;
    font-weight: 500 !important;
}}
"""


def build_bottom_bar_css(cfg: Dict[str, Any]) -> str:
    """Build CSS for bottom bar (like study stats)."""
    return f"""
/* Bottom Bar Styling */
.bottom-bar {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border-top: 1px solid {cfg['borderColor']} !important;
    padding: 8px 12px !important;
}}
.stats-label {{
    color: {cfg['mutedTextColor']} !important;
}}
.stats-value {{
    color: {cfg['accentColor']} !important;
    font-weight: bold !important;
}}
"""


def build_webview_css(cfg: Dict[str, Any], context: WebviewContext = WebviewContext.OVERVIEW) -> str:
    """Build comprehensive CSS for deck browser, overview, and webview contexts.

    Args:
        cfg: Configuration dictionary with color and style settings
        context: Which webview is being styled

    Returns:
        CSS string to inject into the webview
    """
    bg_image_uri = None
    if cfg.get("webviewBackgroundImage"):
        bg_path = str(ADDON_DIR / cfg["webviewBackgroundImage"])
        bg_image_uri = _get_image_base64(bg_path)

    bg_css = f"background-image: url('{bg_image_uri}'); background-size: cover; background-attachment: fixed;" if bg_image_uri else ""

    return f"""
/* {ADDON_NAME} - Webview Styling */
* {{
    background-color: {cfg['globalBackground']};
    color: {cfg['textColor']};
}}
body {{
    background-color: {cfg['globalBackground']} !important;
    color: {cfg['textColor']} !important;
    font-family: {cfg['fontFamily']}, sans-serif !important;
    font-size: 14px !important;
    margin: 0 !important;
    padding: 0 !important;
    {bg_css}
}}
html {{
    background-color: {cfg['globalBackground']} !important;
    {bg_css}
}}
a {{
    color: {cfg['linkColor']} !important;
    text-decoration: none !important;
}}
a:hover {{
    color: {cfg['accentColor']} !important;
    text-decoration: underline !important;
}}
button, .btn {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    padding: 6px 12px !important;
    border-radius: 4px !important;
    cursor: pointer !important;
}}
button:hover, .btn:hover {{
    background: {cfg['deckHoverBackground']} !important;
    border-color: {cfg['accentColor']} !important;
}}
button:active, .btn:active {{
    background: {cfg['accentColor']} !important;
    color: #fff !important;
}}
input, textarea, select {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    padding: 6px 8px !important;
    border-radius: 4px !important;
}}
input:focus, textarea:focus, select:focus {{
    border-color: {cfg['accentColor']} !important;
    outline: none !important;
}}
table {{
    border-collapse: collapse !important;
    width: 100% !important;
}}
th, td {{
    border: 1px solid {cfg['borderColor']} !important;
    padding: 8px !important;
    text-align: left !important;
    background: {cfg['panelBackground']} !important;
}}
th {{
    background: {cfg['cardBackground']} !important;
    color: {cfg['textColor']} !important;
    font-weight: bold !important;
}}
tr:hover {{
    background: {cfg['deckHoverBackground']} !important;
}}
h1, h2, h3, h4, h5, h6 {{
    color: {cfg['textColor']} !important;
    margin-top: 12px !important;
    margin-bottom: 8px !important;
}}
.card {{
    background: {cfg['cardBackground']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    border-radius: 8px !important;
    padding: 12px !important;
    margin: 8px !important;
}}
.card:hover {{
    border-color: {cfg['accentColor']} !important;
    box-shadow: 0 0 10px {_rgba_from_hex(cfg.get('accentColor', '#00ff00'), 0.3)} !important;
}}
.title {{
    color: {cfg['accentColor']} !important;
    font-weight: bold !important;
}}
.subtitle {{
    color: {cfg['mutedTextColor']} !important;
}}
.error {{
    color: {cfg['dangerColor']} !important;
}}
.success {{
    color: {cfg['successColor']} !important;
}}
.warning {{
    color: {cfg['warningColor']} !important;
}}
.info {{
    color: {cfg['infoColor']} !important;
}}
p {{
    margin: 8px 0 !important;
    color: {cfg['textColor']} !important;
}}
code, pre {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['accentColor']} !important;
    border-radius: 4px !important;
    padding: 4px 8px !important;
    font-family: 'Courier New', monospace !important;
}}
blockquote {{
    border-left: 4px solid {cfg['accentColor']} !important;
    padding-left: 12px !important;
    color: {cfg['mutedTextColor']} !important;
    margin-left: 0 !important;
}}
hr {{
    border: none !important;
    border-top: 1px solid {cfg['borderColor']} !important;
    margin: 16px 0 !important;
}}
.glow {{
    box-shadow: 0 0 20px {_rgba_from_hex(cfg.get('accentColor', '#00ff00'), 0.5)} !important;
}}
.shadow {{
    box-shadow: 0 4px 8px rgba(0,0,0,0.2) !important;
}}
/* Additional context-specific styling */
{cfg.get('extraWebviewCss', '')}
"""


def build_reviewer_css(cfg: Dict[str, Any]) -> str:
    """Build CSS specifically for the reviewer/card display webview."""
    return f"""
/* {ADDON_NAME} - Reviewer Card Styling */
body.night_mode, body {{
    background-color: {cfg['globalBackground']} !important;
    color: {cfg['textColor']} !important;
}}
.card {{
    background: {cfg['cardBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 2px solid {cfg['borderColor']} !important;
    border-radius: 12px !important;
    padding: 20px !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15) !important;
}}
.back {{
    background: {cfg['cardBackground']} !important;
}}
.qa {{
    color: {cfg['textColor']} !important;
}}
.q {{
    color: {cfg['accentColor']} !important;
    font-weight: bold !important;
}}
a {{
    color: {cfg['linkColor']} !important;
}}
a:hover {{
    color: {cfg['accentColor']} !important;
    text-decoration: underline !important;
}}
/* Extra styling from config */
{cfg.get('extraReviewerCss', '')}
"""


def build_addon_integration_css(cfg: Dict[str, Any]) -> str:
    """Build CSS for integrating other addons like Review Heatmap, etc."""
    css = f"""
/* {ADDON_NAME} - Addon Integration Styling */
"""

    # Review Heatmap styling if enabled and addon is present
    if cfg.get("heatmapIntegration", False):
        css += f"""
/* Review Heatmap */
.graph-stats {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
}}
.heatmap-graph {{
    background: {cfg['cardBackground']} !important;
    border: 1px solid {cfg['borderColor']} !important;
}}
"""

    # Image Occlusion styling
    if cfg.get("imageOcclusionIntegration", False):
        css += f"""
/* Image Occlusion */
.occlusion-canvas {{
    border: 2px solid {cfg['borderColor']} !important;
    background: {cfg['cardBackground']} !important;
}}
"""

    # Advanced Browser styling
    if cfg.get("advancedBrowserIntegration", False):
        css += f"""
/* Advanced Browser */
.search-box {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
}}
"""

    return css


def inject_webview_css(web_content: Any, context: str = "") -> None:
    """Inject CSS into a webview. Called by Anki hooks.

    Args:
        web_content: The webview's content object (has head, body, attrs)
        context: Optional context string identifying the webview type
    """
    try:
        cfg = load_config()
        if not cfg.get("enableWebviewStyling", True):
            return

        # Detect context from caller or passed context
        if "reviewer" in context.lower() or "card" in context.lower():
            ctx = WebviewContext.REVIEWER
            css = build_reviewer_css(cfg)
        elif "browser" in context.lower():
            ctx = WebviewContext.BROWSER
            css = build_webview_css(cfg, ctx)
        elif "overview" in context.lower() or "deck" in context.lower():
            ctx = WebviewContext.OVERVIEW
            css = build_webview_css(cfg, ctx)
        else:
            ctx = WebviewContext.UNKNOWN
            css = build_webview_css(cfg, ctx)

        # Add addon integration CSS
        css += build_addon_integration_css(cfg)

        # Inject into webview
        if hasattr(web_content, 'style'):
            web_content.style(css)  # type: ignore
        elif hasattr(web_content, 'head'):
            style_tag = f"<style>{css}</style>"
            web_content.head += style_tag  # type: ignore
        elif hasattr(web_content, '_head'):
            style_tag = f"<style>{css}</style>"
            web_content._head += style_tag  # type: ignore

    except Exception as e:
        print(f"{ADDON_NAME}: Error injecting webview CSS: {e}")


def refresh_all_webviews() -> None:
    """Force refresh of all active webviews."""
    try:
        if not mw:
            return
        if hasattr(mw, 'web'):
            if hasattr(mw.web, 'reloadPage'):
                mw.web.reloadPage()  # type: ignore
    except Exception:
        pass
