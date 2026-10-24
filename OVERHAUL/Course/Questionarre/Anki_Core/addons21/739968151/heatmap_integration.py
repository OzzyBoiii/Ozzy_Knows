"""Integration with other Anki addons for theme customization.

Handles styling for popular addons like Review Heatmap, Image Occlusion, etc.
"""

from typing import Dict, Any, List, Optional
from pathlib import Path

from .constants import ADDON_NAME
from .config import load_config, ADDON_ID

try:
    from aqt import mw
except Exception:
    mw = None


def get_installed_addons() -> List[str]:
    """Return list of installed addon IDs."""
    if not mw or not hasattr(mw, 'addonManager'):
        return []
    try:
        return mw.addonManager.allAddons()  # type: ignore
    except Exception:
        return []


def is_addon_installed(addon_id: str) -> bool:
    """Check if a specific addon is installed by ID."""
    return addon_id in get_installed_addons()


# Known addon IDs
REVIEW_HEATMAP_ID = "1771074083"
IMAGE_OCCLUSION_ID = "1111933094"
ADVANCED_BROWSER_ID = "2024900846"
HIERARCHICAL_TAGS_ID = "594329179"
MORE_DECKS_STATS_ID = "1556734708"


def build_heatmap_css(cfg: Dict[str, Any]) -> str:
    """Build CSS for Review Heatmap addon integration."""
    if not is_addon_installed(REVIEW_HEATMAP_ID):
        return ""

    # Get heatmap colors from config with fallbacks
    heatmap_zero = cfg.get('heatmapColorZero', cfg.get('panelBackground', '#1b1b26'))
    heatmap_l1 = cfg.get('heatmapLevel1', '#2d4f7f')
    heatmap_l2 = cfg.get('heatmapLevel2', '#3d6fb3')
    heatmap_l3 = cfg.get('heatmapLevel3', cfg.get('accentColor', '#4f86ff'))
    heatmap_l4 = cfg.get('heatmapLevel4', '#6fa0ff')

    return f"""
/* Review Heatmap Integration - Modernki Theme */
.heatmap {{
    background-color: {cfg['globalBackground']} !important;
    color: {cfg['textColor']} !important;
    font-family: {cfg['fontFamily']} !important;
}}

/* Main heatmap container */
.heatmap-graph, 
#cal,
.rh-container,
.rh-main-container {{
    background: {cfg['panelBackground']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    border-radius: 12px !important;
    padding: 16px !important;
}}

/* Heatmap controls and buttons */
.heatmap-controls,
.rh-controls {{
    background: {cfg['cardBackground']} !important;
    color: {cfg['textColor']} !important;
    border-radius: 8px !important;
    padding: 8px !important;
    margin-bottom: 12px !important;
}}

.heatmap-controls button,
.rh-btn,
.rh-control-btn {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    padding: 6px 14px !important;
    border-radius: 6px !important;
    font-family: {cfg['fontFamily']} !important;
    transition: all 0.2s ease !important;
}}

.heatmap-controls button:hover,
.rh-btn:hover,
.rh-control-btn:hover {{
    background: {cfg['deckHoverBackground']} !important;
    border-color: {cfg['accentColor']} !important;
    color: {cfg['accentColor']} !important;
}}

.heatmap-controls button.active,
.rh-btn.active {{
    background: {cfg['accentColor']} !important;
    border-color: {cfg['accentColor']} !important;
    color: {cfg['globalBackground']} !important;
}}

/* Heatmap labels and text */
.heatmap-label,
.rh-label,
.rh-month-label,
.rh-day-label {{
    color: {cfg['mutedTextColor']} !important;
    font-size: 11px !important;
    font-family: {cfg['fontFamily']} !important;
}}

/* Heatmap statistics */
.heatmap-stats,
.rh-stats {{
    background: {cfg['cardBackground']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    border-radius: 8px !important;
    padding: 12px !important;
    color: {cfg['textColor']} !important;
    margin-top: 12px !important;
}}

.heatmap-stat-value,
.rh-stat-value {{
    color: {cfg['accentColor']} !important;
    font-weight: 600 !important;
}}

/* Heatmap streak counter */
.rh-streak,
.heatmap-streak {{
    background: {cfg['cardBackground']} !important;
    color: {cfg['successColor']} !important;
    border-radius: 6px !important;
    padding: 4px 10px !important;
    font-weight: 600 !important;
}}

/* Heatmap cells/tiles - themed intensity levels */
.heatmap-cell,
.rh-cell,
.rh-tile {{
    border: 1px solid {cfg['borderColor']} !important;
    border-radius: 3px !important;
    transition: transform 0.2s ease, box-shadow 0.2s ease !important;
}}

.heatmap-cell:hover,
.rh-cell:hover,
.rh-tile:hover {{
    transform: scale(1.15) !important;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3) !important;
    z-index: 10 !important;
}}

/* Heatmap intensity levels using theme colors */
.heatmap-cell[data-count="0"],
.rh-cell[data-count="0"],
.rh-tile-empty {{
    background-color: {heatmap_zero} !important;
}}

.heatmap-cell[data-level="1"],
.rh-cell[data-level="1"],
.rh-tile-level-1 {{
    background-color: {heatmap_l1} !important;
}}

.heatmap-cell[data-level="2"],
.rh-cell[data-level="2"],
.rh-tile-level-2 {{
    background-color: {heatmap_l2} !important;
}}

.heatmap-cell[data-level="3"],
.rh-cell[data-level="3"],
.rh-tile-level-3 {{
    background-color: {heatmap_l3} !important;
}}

.heatmap-cell[data-level="4"],
.rh-cell[data-level="4"],
.rh-tile-level-4,
.heatmap-cell[data-level="5"],
.rh-cell[data-level="5"] {{
    background-color: {heatmap_l4} !important;
}}

/* Tooltips */
.heatmap-tooltip,
.rh-tooltip {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    border-radius: 6px !important;
    padding: 8px 12px !important;
    font-family: {cfg['fontFamily']} !important;
    font-size: 12px !important;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3) !important;
}}

/* Legend */
.heatmap-legend,
.rh-legend {{
    color: {cfg['mutedTextColor']} !important;
    font-family: {cfg['fontFamily']} !important;
}}

.heatmap-legend-item,
.rh-legend-item {{
    margin: 0 4px !important;
}}

/* Today indicator */
.heatmap-cell.today,
.rh-cell.today,
.rh-tile-today {{
    border: 2px solid {cfg['accentColor']} !important;
    box-shadow: 0 0 8px {cfg['accentColor']}80 !important;
}}

/* Year/Month navigation */
.rh-nav-btn {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    border-radius: 6px !important;
    padding: 4px 10px !important;
    cursor: pointer !important;
}}

.rh-nav-btn:hover {{
    background: {cfg['deckHoverBackground']} !important;
    border-color: {cfg['accentColor']} !important;
}}

/* Additional polish */
.rh-main-container * {{
    box-sizing: border-box !important;
}}
"""


def build_image_occlusion_css(cfg: Dict[str, Any]) -> str:
    """Build CSS for Image Occlusion addon integration."""
    if not is_addon_installed(IMAGE_OCCLUSION_ID):
        return ""

    return f"""
/* Image Occlusion Integration */
.io-container {{
    background: {cfg['cardBackground']} !important;
    border: 2px solid {cfg['borderColor']} !important;
    border-radius: 8px !important;
}}
.io-canvas {{
    background: {cfg['cardBackground']} !important;
}}
.io-controls {{
    background: {cfg['panelBackground']} !important;
    border-top: 1px solid {cfg['borderColor']} !important;
    color: {cfg['textColor']} !important;
}}
.io-button {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    padding: 6px 12px !important;
    border-radius: 4px !important;
}}
.io-button:hover {{
    background: {cfg['deckHoverBackground']} !important;
    border-color: {cfg['accentColor']} !important;
}}
.io-button.active {{
    background: {cfg['accentColor']} !important;
    color: #fff !important;
}}
"""


def build_advanced_browser_css(cfg: Dict[str, Any]) -> str:
    """Build CSS for Advanced Browser addon integration."""
    if not is_addon_installed(ADVANCED_BROWSER_ID):
        return ""

    return f"""
/* Advanced Browser Integration */
.adv-browser {{
    background: {cfg['panelBackground']} !important;
}}
.adv-browser-search {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    padding: 8px !important;
    border-radius: 4px !important;
}}
.adv-browser-search input {{
    background: {cfg['cardBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
}}
.adv-browser-results {{
    background: {cfg['panelBackground']} !important;
}}
.adv-browser-row {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    border: 1px solid {cfg['borderColor']} !important;
}}
.adv-browser-row:hover {{
    background: {cfg['deckHoverBackground']} !important;
}}
.adv-browser-row.selected {{
    background: {cfg['accentColor']} !important;
    color: #fff !important;
}}
"""


def build_hierarchical_tags_css(cfg: Dict[str, Any]) -> str:
    """Build CSS for Hierarchical Tags addon integration."""
    if not is_addon_installed(HIERARCHICAL_TAGS_ID):
        return ""

    return f"""
/* Hierarchical Tags Integration */
.tags-tree {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
}}
.tags-item {{
    background: {cfg['panelBackground']} !important;
    color: {cfg['textColor']} !important;
    padding: 4px 8px !important;
    border-radius: 4px !important;
}}
.tags-item:hover {{
    background: {cfg['deckHoverBackground']} !important;
}}
.tags-item.selected {{
    background: {cfg['accentColor']} !important;
    color: #fff !important;
}}
.tags-expander {{
    color: {cfg['mutedTextColor']} !important;
}}
"""


def build_more_decks_stats_css(cfg: Dict[str, Any]) -> str:
    """Build CSS for More Decks Stats addon integration."""
    if not is_addon_installed(MORE_DECKS_STATS_ID):
        return ""

    return f"""
/* More Decks Stats Integration */
.deck-stats {{
    background: {cfg['panelBackground']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    border-radius: 8px !important;
    padding: 12px !important;
    color: {cfg['textColor']} !important;
}}
.stats-label {{
    color: {cfg['mutedTextColor']} !important;
    font-weight: 500 !important;
}}
.stats-value {{
    color: {cfg['accentColor']} !important;
    font-size: 14px !important;
    font-weight: bold !important;
}}
.stats-bar {{
    background: {cfg['cardBackground']} !important;
    border: 1px solid {cfg['borderColor']} !important;
    border-radius: 4px !important;
    height: 8px !important;
    overflow: hidden !important;
}}
.stats-bar-fill {{
    background: {cfg['accentColor']} !important;
    height: 100% !important;
    transition: width 0.3s ease !important;
}}
"""


def build_all_addon_integration_css(cfg: Dict[str, Any]) -> str:
    """Build CSS for all installed addons.

    Returns concatenated CSS for all detected addons.
    """
    css = f"""
/* {ADDON_NAME} - Addon Integration Layer */
"""
    css += build_heatmap_css(cfg)
    css += build_image_occlusion_css(cfg)
    css += build_advanced_browser_css(cfg)
    css += build_hierarchical_tags_css(cfg)
    css += build_more_decks_stats_css(cfg)

    return css


def get_addon_status() -> Dict[str, bool]:
    """Return dict of known addons and whether they're installed."""
    return {
        'Review Heatmap': is_addon_installed(REVIEW_HEATMAP_ID),
        'Image Occlusion': is_addon_installed(IMAGE_OCCLUSION_ID),
        'Advanced Browser': is_addon_installed(ADVANCED_BROWSER_ID),
        'Hierarchical Tags': is_addon_installed(HIERARCHICAL_TAGS_ID),
        'More Decks Stats': is_addon_installed(MORE_DECKS_STATS_ID),
    }
