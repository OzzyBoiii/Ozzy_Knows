"""Constants and default configuration for Modernki."""

from typing import Dict, Any

# Default settings for the add-on
DEFAULTS: Dict[str, Any] = {
    # Typography
    "fontFamily": "Inter, Segoe UI, Arial, sans-serif",
    "cardFontSize": "20px",
    # Qt Widget Colors (menus, toolbars, buttons, dialogs)
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
    # Webview/HTML Screens (deck browser, overview, congrats)
    "webviewBackground": "#0f0f17",
    "webviewBackgroundImage": "",  # data URI or path; empty disables image
    "webviewBackgroundImageOpacity": 1.0,  # 0.0 to 1.0
    "webviewCanvas": "#1b1b26",
    "webviewForeground": "#e0e0e6",
    "webviewLink": "#4f86ff",
    "webviewBorder": "#2a2a38",
    "deckHoverBackground": "#2a2a38",
    "browserPreviewBackground": "#1b1b26",
    "browserPreviewOuterBackground": "#000000",
    # Toolbar
    "toolbarBackground": "#16161f",
    # Toolbar Buttons
    "buttonDecksColor": "#4f86ff",
    "buttonAddColor": "#3fbf7f",
    "buttonBrowseColor": "#4f86ff",
    "buttonStatsColor": "#4f86ff",
    "buttonSyncColor": "#4f86ff",
    # Reviewer/Card Display
    "gradientStart": "#1e1e2e",
    "gradientEnd": "#11111b",
    "cardBackground": "rgba(255,255,255,0.05)",
    "cardRadius": "18px",
    "cardMaxWidth": "760px",
    # Toggles
    "enableGlobalStyles": True,
    "enableReviewerStyles": True,
    "enableWebviewStyles": True,
    "enableAddonIntegration": True,  # Auto-style popular addons
    "extraGlobalCss": "",
    "extraReviewerCss": "",
    "extraWebviewCss": "",
    # Review Heatmap Integration Colors
    "heatmapColorZero": "#1b1b26",  # Days with zero reviews
    "heatmapLevel1": "#2d4f7f",     # Low activity (1-25%)
    "heatmapLevel2": "#3d6fb3",     # Medium activity (26-50%)
    "heatmapLevel3": "#4f86ff",     # High activity (51-75%)
    "heatmapLevel4": "#6fa0ff",     # Very high activity (76-100%)
    # New/Learn/Due Count Colors (deck browser)
    "newCountColor": "#4f86ff",     # Color for New card count
    "learnCountColor": "#ff4f64",   # Color for Learn card count
    "dueCountColor": "#3fbf7f",     # Color for Due/Review card count
    # Deck Browser Font Sizes & Column Widths
    "deckListFontSize": "1.15em",   # Font size for deck names (FAT)
    "countFontSize": "1.1em",       # Font size for counts (FAT)
    "deckListTextColor": "",        # Explicit text color for deck list (empty = auto-contrast)
    "deckNameColumnWidth": "60%",   # Width of deck name column
    "countColumnWidth": "50px",     # Width of each count column
    # Menu Glow Effect
    "menuGlowEnabled": False,
    "menuGlowColor": "#00ffff",
    "menuGlowSpeed": 2.0,  # seconds per pulse cycle
    "menuGlowIntensity": 35,  # max glow spread in pixels at peak
    "menuGlowBlur": 8,  # base blur radius in pixels
    "enableModernki": True,  # Master toggle to enable/disable Modernki
}

ADDON_NAME = "Modernki"

# Technical labels and help text for tooltips
TECH_LABELS: Dict[str, str] = {
    "fontFamily": "fontFamily",
    "cardFontSize": "cardFontSize",
    "cardMaxWidth": "cardMaxWidth",
    "cardRadius": "cardRadius",
    "globalBackground": "Qt globalBackground",
    "panelBackground": "Qt panelBackground",
    "textColor": "Qt textColor",
    "mutedTextColor": "Qt mutedTextColor",
    "accentColor": "Qt accentColor",
    "dangerColor": "Qt dangerColor",
    "successColor": "Qt successColor",
    "borderColor": "Qt borderColor",
    "webviewBackground": "webview background",
    "webviewBackgroundImage": "webview background image",
    "webviewBackgroundImageOpacity": "webview background image opacity",
    "webviewCanvas": "webview canvas",
    "webviewForeground": "webview foreground (text)",
    "webviewLink": "webview link",
    "webviewBorder": "webview border",
    "deckHoverBackground": "deck hover background",
    "gradientStart": "reviewer gradient start",
    "gradientEnd": "reviewer gradient end",
    "cardBackground": "reviewer card background",
    "menuGlowEnabled": "menu glow enabled",
    "menuGlowColor": "menu glow color",
    "menuGlowSpeed": "menu glow speed",
    "menuGlowIntensity": "menu glow intensity",
    "menuGlowBlur": "menu glow blur",
    "forceCardStyling": "force card styling",
}

FIELD_HELP: Dict[str, str] = {
    "fontFamily": "Primary font family used across Anki.",
    "cardFontSize": "Default font size for card text.",
    "cardMaxWidth": "Maximum width of the card container (e.g. 800px).",
    "cardRadius": "Corner radius of the card container (e.g. 12px).",
    "globalBackground": "Background of the main window and dialogs (Qt widgets).",
    "panelBackground": "Background of toolbars, sidebars, and panels (Qt widgets).",
    "textColor": "Primary text color in Qt widgets.",
    "mutedTextColor": "Secondary/disabled text color in Qt widgets.",
    "accentColor": "Highlight, focus rings, and selected items (Qt).",
    "dangerColor": "Warning/error accents (Qt).",
    "successColor": "Success/confirmation accents (Qt).",
    "borderColor": "Borders for Qt widgets.",
    "webviewBackground": "Main page background for Deck Browser & Overview.",
    "webviewBackgroundImage": "Optional image (file or data URI) behind main background (covers entire page). Images should be 2560x1440 for lossless scaling.",
    "webviewBackgroundImageOpacity": "Transparency of background image (0.0 = invisible, 1.0 = fully opaque).",
    "webviewCanvas": "Tables and content panels within webviews.",
    "webviewForeground": "Text color in Deck Browser & Overview.",
    "webviewLink": "Link color in HTML pages.",
    "webviewBorder": "Borders for tables and panels in webviews.",
    "deckHoverBackground": "Background when hovering over a deck row.",
    "gradientStart": "Top color of Reviewer background gradient.",
    "gradientEnd": "Bottom color of Reviewer background gradient.",
    "cardBackground": "Reviewer card container background.",
    "menuGlowEnabled": "Enable pulsing glow effect on menus and buttons.",
    "menuGlowColor": "Color of the glow effect.",
    "menuGlowSpeed": "Duration of one glow pulse cycle in seconds (e.g., 2.0).",
    "menuGlowIntensity": "Maximum glow spread at peak pulse, in pixels (e.g. 35).",
    "menuGlowBlur": "Base blur radius for the glow, in pixels (e.g. 8).",
    "forceCardStyling": "Apply theme colors and animations to card content, buttons (Show Answer, Again, etc.). Only affects display, doesn't modify your cards permanently.",
}
