"""CSS/Stylesheet generation for Universal Beautify Anki.

This module builds all CSS for Qt widgets, webviews, toolbars, and reviewers.
Handles color contrast, background images, and special effects.
"""

from typing import Dict, Any, Optional, Tuple
from pathlib import Path
import base64

from .constants import ADDON_NAME, DEFAULTS
from .config import load_config, ADDON_DIR, ADDON_ID

try:
    from aqt import mw
except Exception:
    mw = None


# Color utility functions
def _hex_to_rgb(hex_color: str) -> Tuple[int, int, int]:
    """Parse a hex color string into an RGB tuple. Returns (0,0,0) on failure."""
    try:
        s = hex_color.strip()
        if s.startswith("#"):
            s = s[1:]
        if len(s) == 3:  # shorthand #rgb
            return (int(s[0] * 2, 16), int(s[1] * 2, 16), int(s[2] * 2, 16))
        if len(s) >= 6:
            return (int(s[0:2], 16), int(s[2:4], 16), int(s[4:6], 16))
    except Exception:
        pass
    return (0, 0, 0)


def _rgba_from_hex(hex_color: str, alpha: float) -> str:
    """Convert hex color #RRGGBB to rgba(r,g,b,a) string."""
    try:
        s = hex_color.strip()
        if s.startswith('#'):
            s = s[1:]
        if len(s) == 3:
            r = int(s[0] * 2, 16)
            g = int(s[1] * 2, 16)
            b = int(s[2] * 2, 16)
        elif len(s) >= 6:
            r = int(s[0:2], 16)
            g = int(s[2:4], 16)
            b = int(s[4:6], 16)
        else:
            r, g, b = 0, 0, 0
        a = 0.0 if alpha < 0 else (1.0 if alpha > 1 else alpha)
        return f"rgba({r},{g},{b},{a})"
    except Exception:
        a = 0.0 if alpha < 0 else (1.0 if alpha > 1 else alpha)
        return f"rgba(0,0,0,{a})"


def _relative_luminance(hex_color: str) -> float:
    """Compute WCAG relative luminance for a given hex color."""
    r, g, b = _hex_to_rgb(hex_color)

    def _channel(c: int) -> float:
        c_lin = c / 255.0
        return c_lin / 12.92 if c_lin <= 0.04045 else ((c_lin + 0.055) / 1.055) ** 2.4

    return 0.2126 * _channel(r) + 0.7152 * _channel(g) + 0.0722 * _channel(b)


def _is_light_color(hex_color: str) -> bool:
    """Return True if color is light based on luminance threshold."""
    try:
        return _relative_luminance(hex_color) >= 0.6
    except Exception:
        return False


def _ensure_contrast_color(bg_hex: str, fg_hex: Optional[str], *, light_fg: str = "#f7f7f7", dark_fg: str = "#111111") -> str:
    """Ensure text color contrasts with background."""
    try:
        bg_is_light = _is_light_color(bg_hex)
    except Exception:
        bg_is_light = False
    preferred = dark_fg if bg_is_light else light_fg

    if not fg_hex:
        return preferred

    try:
        fg_is_light = _is_light_color(fg_hex)
    except Exception:
        return preferred

    if bg_is_light and fg_is_light:
        return dark_fg
    if (not bg_is_light) and (not fg_is_light):
        return light_fg
    return fg_hex


# CSS builders
def _build_menu_glow_css(cfg: Dict[str, Any]) -> str:
    """Build menu glow CSS if enabled."""
    if not cfg.get("menuGlowEnabled", False):
        return ""
    color = cfg.get("menuGlowColor", "#00ffff")
    blur = int(cfg.get("menuGlowBlur", 8) or 8)
    return f"""
/* Menu Glow Effect - Optimized */
QMenuBar {{
    border: 1px solid {color};
    box-shadow: 0 0 {blur}px {color};
}}
QMenu {{
    border: 1px solid {color};
    box-shadow: 0 0 {blur}px {color};
}}
QPushButton {{
    border: 1px solid {color};
    box-shadow: 0 0 {blur}px {color};
}}
QToolBar {{
    border-bottom: 1px solid {color};
    box-shadow: 0 0 {blur}px {color};
}}
"""


def build_global_stylesheet(cfg: Dict[str, Any]) -> str:
    """Build the application-wide Qt stylesheet."""
    if not cfg.get("enableGlobalStyles", True):
        return ""

    return f"""
/* {ADDON_NAME} - Global Qt Stylesheet */
QWidget {{
    background-color: {cfg['globalBackground']};
    color: {cfg['textColor']};
    font-family: {cfg['fontFamily']};
    font-size: 14px;
}}
QToolTip {{
    background: {cfg['panelBackground']};
    color: {cfg['textColor']};
    border: 1px solid {cfg['borderColor']};
    padding: 6px 8px;
    border-radius: 6px;
}}
QMainWindow, QDialog {{
    background-color: {cfg['globalBackground']};
}}
QMainWindow::separator {{
    width: 1px;
    height: 1px;
    background: {cfg['borderColor']};
}}
QToolBar {{
    background: {cfg['globalBackground']};
    spacing: 6px;
    padding: 4px 8px;
    border-bottom: 1px solid {cfg['borderColor']};
    min-height: {cfg['toolbarHeight']}px;
    max-height: {cfg['toolbarHeight']}px;
}}
QToolBar QWidget {{
    margin: 0px 2px;
}}
QToolButton {{
    background: transparent;
    color: {cfg['textColor']};
    padding: 4px 10px;
    border-radius: 6px;
}}
QToolButton:hover {{
    background: {cfg['cardBackground']};
}}
QToolButton:pressed {{
    background: {cfg['accentColor']};
    color: #fff;
}}
QMenuBar {{
    background: {cfg['globalBackground']};
    padding: 2px 4px;
    spacing: 4px;
}}
QMenuBar::item {{
    padding: 6px 12px;
    margin: 2px 4px;
    background: transparent;
    border-radius: 6px;
}}
QMenuBar::item:selected {{
    background: {cfg['cardBackground']};
    border-radius: 6px;
}}
QMenu {{
    background: {cfg['panelBackground']};
    border: 1px solid {cfg['borderColor']};
    padding: 8px 4px;
    border-radius: 8px;
}}
QMenu::item {{
    padding: 8px 20px;
    margin: 2px 4px;
    border-radius: 6px;
}}
QMenu::item:selected {{
    background: {cfg['accentColor']};
    color: #fff;
}}
QMenu::separator {{
    height: 1px;
    background: {cfg['borderColor']};
    margin: 4px 8px;
}}
QPushButton, QRadioButton, QCheckBox {{
    background: {cfg['panelBackground']};
    color: {cfg['textColor']};
    padding: 8px 16px;
    border: 1px solid {cfg['borderColor']};
    border-radius: 8px;
    min-height: 24px;
}}
QPushButton {{
    text-align: center;
    qproperty-alignment: AlignCenter;
}}
QPushButton:hover {{
    border-color: {cfg['accentColor']};
    background: {cfg['cardBackground']};
}}
QPushButton:pressed {{
    background: {cfg['accentColor']};
    color: #fff;
}}
QPushButton:disabled {{
    background: {cfg['panelBackground']};
    color: {cfg['mutedTextColor']};
    border-color: {cfg['borderColor']};
}}
QLineEdit, QSpinBox, QComboBox, QTextEdit {{
    background: {cfg['panelBackground']};
    color: {cfg['textColor']};
    border: 1px solid {cfg['borderColor']};
    padding: 6px 10px;
    border-radius: 8px;
    selection-background-color: {cfg['accentColor']};
    selection-color: #fff;
}}
QLineEdit:focus, QSpinBox:focus, QComboBox:focus, QTextEdit:focus {{
    border: 1px solid {cfg['focusRingColor']};
}}
QScrollBar:vertical {{
    background: transparent;
    width: 12px;
    margin: 4px;
    border-radius: 6px;
}}
QScrollBar::handle:vertical {{
    background: {cfg['panelBackground']};
    min-height: 20px;
    border-radius: 6px;
}}
QScrollBar::handle:vertical:hover {{
    background: {cfg['accentColor']};
}}
QScrollBar::add-line:vertical, QScrollBar::sub-line:vertical {{ height:0; }}
QListView, QTreeView, QTableView {{
    background: {cfg['panelBackground']} !important;
    alternate-background-color: {cfg['panelBackground']} !important;
    border: 1px solid {cfg['borderColor']};
    border-radius: 8px;
    selection-background-color: {cfg['accentColor']};
    selection-color: #fff;
    color: {cfg['textColor']} !important;
}}
QAbstractItemView {{
    background: {cfg['panelBackground']} !important;
    alternate-background-color: {cfg['panelBackground']} !important;
    selection-background-color: {cfg['accentColor']} !important;
    selection-color: #fff !important;
}}
Browser {{
    background: {cfg['panelBackground']} !important;
}}
QHeaderView {{
    background: {cfg['panelBackground']};
    border: none;
}}
QHeaderView::section {{
    background: {cfg['panelBackground']};
    color: {cfg['textColor']};
    padding: 6px 10px;
    border-right: 1px solid {cfg['borderColor']};
}}
QTreeView::item, QTableView::item {{
    padding: 6px 8px;
    color: {cfg['textColor']};
}}
QTreeView::item:hover, QTableView::item:hover {{
    background: {cfg['cardBackground']};
}}
QTreeView::item:selected, QTableView::item:selected {{
    background: {cfg['accentColor']};
    color: #fff;
}}
QSplitter {{
    background: {cfg['globalBackground']};
}}
QSplitter::handle {{
    background: {cfg['borderColor']};
}}
QSplitter::handle:horizontal {{
    width: 2px;
}}
QSplitter::handle:vertical {{
    height: 2px;
}}
QTreeWidget {{
    background-color: {cfg['panelBackground']} !important;
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: none;
    border-radius: 8px;
    margin: 0px !important;
    padding: 0px !important;
    outline: none;
}}
QTreeWidget::item {{
    padding: 6px 8px;
    color: {cfg['textColor']} !important;
    background-color: {cfg['panelBackground']} !important;
    background: {cfg['panelBackground']} !important;
    margin: 0px;
}}
QTreeWidget::item:hover {{
    background-color: {cfg['deckHoverBackground']} !important;
    background: {cfg['deckHoverBackground']} !important;
    color: {cfg['textColor']} !important;
}}
QTreeWidget::item:selected {{
    background-color: {cfg['accentColor']} !important;
    background: {cfg['accentColor']} !important;
    color: #fff !important;
}}
QTreeWidget::branch {{
    background-color: {cfg['panelBackground']} !important;
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
}}
QLineEdit {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']};
    border-radius: 6px;
    padding: 6px 10px;
    selection-background-color: {cfg['accentColor']};
    selection-color: #fff;
}}
QLineEdit:focus {{
    border: 1px solid {cfg['accentColor']};
}}
QComboBox {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
}}
QComboBox:hover {{
    background: {cfg['deckHoverBackground']} !important;
}}
QComboBox QAbstractItemView {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    selection-background-color: {cfg['accentColor']};
    selection-color: #fff;
}}
QFrame {{
    background: {cfg['globalBackground']} !important;
    color: {cfg['textColor']} !important;
}}
QWidget {{
    color: {cfg['textColor']};
    background-color: {cfg['globalBackground']};
}}
Browser QTableView {{
    background-color: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    alternate-background-color: {cfg['panelBackground']} !important;
}}
Browser QTableView::item {{
    color: {cfg['textColor']} !important;
    background-color: {cfg['panelBackground']} !important;
}}
Browser QTableView::item:selected {{
    background-color: {cfg['accentColor']} !important;
    color: #fff !important;
}}
Browser QTreeWidget {{
    background-color: {cfg['panelBackground']} !important;
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
}}
Browser QTreeWidget::item {{
    color: {cfg['textColor']} !important;
}}
Browser QTreeWidget::item:selected {{
    background-color: {cfg['accentColor']} !important;
    color: #fff !important;
}}
Browser QHeaderView::section {{
    background-color: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    padding: 4px 8px !important;
}}
Browser QLineEdit {{
    background-color: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
}}
Browser QLabel {{
    color: {cfg['textColor']} !important;
}}
Browser QToolBar {{
    background: {cfg['panelBackground']} !important;
    border: none !important;
    padding: 6px 4px !important;
    margin: 0px !important;
    spacing: 0px !important;
}}
Browser QToolBar::separator {{
    width: 0px;
    margin: 0px;
}}
Browser QToolButton {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    border-radius: 4px !important;
    padding: 6px 12px !important;
    margin: 2px 2px !important;
    font-weight: 500 !important;
    font-size: 12px !important;
    min-width: 60px !important;
    text-align: center !important;
}}
Browser QToolButton:hover {{
    background: {cfg['deckHoverBackground']} !important;
    border: 1px solid {cfg['accentColor']} !important;
    color: {cfg['textColor']} !important;
}}
Browser QToolButton:pressed {{
    background: {cfg['accentColor']} !important;
    color: #fff !important;
}}
Browser QPushButton {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    padding: 4px 10px !important;
    margin: 1px !important;
    border-radius: 4px !important;
    font-weight: 500 !important;
    font-size: 12px !important;
}}
Browser QPushButton:hover {{
    background: {cfg['deckHoverBackground']} !important;
    border: 1px solid {cfg['accentColor']} !important;
    color: {cfg['textColor']} !important;
}}
QTabBar::tab {{
    background: {cfg['panelBackground']};
    color: {cfg['textColor']};
    padding: 6px 12px;
    border: 1px solid {cfg['borderColor']};
    border-bottom: none;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
}}
QTabBar::tab:selected {{
    background: {cfg['globalBackground']};
    border-color: {cfg['accentColor']};
}}
QGroupBox {{
    border: 1px solid {cfg['borderColor']};
    border-radius: 8px;
    margin-top: 12px;
}}
QGroupBox::title {{
    subcontrol-origin: margin;
    left: 10px;
    padding: 0 4px;
    color: {cfg['mutedTextColor']};
}}
QStatusBar {{
    background: {cfg['panelBackground']};
    border-top: 1px solid {cfg['borderColor']};
}}
.accent-bg {{ background: {cfg['accentColor']}; color:#fff; }}
.success-bg {{ background: {cfg['successColor']}; color:#fff; }}
.danger-bg {{ background: {cfg['dangerColor']}; color:#fff; }}
Browser {{
    background: {cfg['panelBackground']} !important;
}}
Browser QAbstractScrollArea {{
    background: {cfg['panelBackground']} !important;
}}
Browser QMainWindow {{
    background: {cfg['panelBackground']} !important;
}}
Browser QWidget {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
}}
Browser QTableView,
Browser QTreeView,
Browser QListView {{
    background: {cfg['panelBackground']} !important;
    alternate-background-color: {cfg['panelBackground']} !important;
}}
Browser QHeaderView,
Browser QHeaderView::section {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
}}
Browser QSplitter {{
    background: {cfg['panelBackground']} !important;
}}
Browser QSplitter::handle {{
    background: {cfg['borderColor']} !important;
}}
Browser QTableView::item {{
    background-color: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    selection-background-color: {cfg['accentColor']} !important;
}}
Browser QTreeView::item {{
    background-color: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    selection-background-color: {cfg['accentColor']} !important;
}}
Browser QListView::item {{
    background-color: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    selection-background-color: {cfg['accentColor']} !important;
}}
QAbstractScrollArea::viewport {{
    background: {cfg['panelBackground']} !important;
}}
Browser QAbstractScrollArea::viewport {{
    background: {cfg['panelBackground']} !important;
    background-color: {cfg['panelBackground']} !important;
}}
QTreeView::viewport,
QTableView::viewport,
QListView::viewport {{
    background: {cfg['panelBackground']} !important;
    background-color: {cfg['panelBackground']} !important;
}}
QAbstractScrollArea {{
    background: {cfg['panelBackground']} !important;
}}
Browser QScrollBar {{
    background: {cfg['panelBackground']} !important;
}}
Browser QAbstractItemView {{
    background: {cfg['panelBackground']} !important;
    alternate-background-color: {cfg['panelBackground']} !important;
}}
{_build_menu_glow_css(cfg)}
{cfg.get('extraGlobalCss','')}
"""


def apply_global_stylesheet() -> None:
    """Apply the global stylesheet to the QApplication instance."""
    if not mw:
        return
    cfg = load_config()
    stylesheet = build_global_stylesheet(cfg)
    if not stylesheet:
        return
    try:
        mw.app.setStyleSheet(stylesheet)  # type: ignore
    except Exception:
        pass
