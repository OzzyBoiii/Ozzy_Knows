import re
from aqt import mw, gui_hooks
from aqt.qt import *
from aqt.utils import showInfo

# ==============================================================================
#   CONFIG MANAGER
# ==============================================================================
def get_config():
    config = mw.addonManager.getConfig(__name__)
    if not config:
        config = {"theme": "standard_transparent"} # Default to Standard now
    return config

def save_config(new_conf):
    mw.addonManager.writeConfig(__name__, new_conf)

# ==============================================================================
#   THE SETTINGS UI
# ==============================================================================
class ToolbarSettings(QDialog):
    def __init__(self, mw):
        super().__init__(mw)
        # --- TITLE CHANGED HERE ---
        self.setWindowTitle("Toolbar Icons Settings - Made by Muhammad")
        self.setWindowIcon(QIcon(":/icons/anki.png"))
        self.setMinimumWidth(350)
        
        layout = QVBoxLayout()
        self.setLayout(layout)

        group = QGroupBox("Select Theme")
        group_layout = QVBoxLayout()
        
        # 1. Standard (Text + Icons)
        self.radio_std = QRadioButton("Standard (Text + Icons)")
        self.radio_std.setToolTip("Transparent background. Text visible. Smart contrast colors.")

        # 2. Compact (Icons Only)
        self.radio_compact = QRadioButton("Compact (Icons Only)")
        self.radio_compact.setToolTip("Transparent background. Icons only. Smart contrast colors.")
        
        # 3. Floating
        self.radio_float = QRadioButton("Floating Buttons")
        self.radio_float.setToolTip("Buttons with their own background.")
        
        # Load current setting
        current = get_config().get("theme", "standard_transparent")
        
        if current == "compact_transparent":
            self.radio_compact.setChecked(True)
        elif current == "floating_buttons":
            self.radio_float.setChecked(True)
        else:
            self.radio_std.setChecked(True)

        # --- REORDERED HERE (Standard is now First) ---
        group_layout.addWidget(self.radio_std)
        group_layout.addWidget(self.radio_compact)
        group_layout.addWidget(self.radio_float)
        group.setLayout(group_layout)
        layout.addWidget(group)

        # Buttons
        buttons = QDialogButtonBox(QDialogButtonBox.StandardButton.Ok | QDialogButtonBox.StandardButton.Cancel)
        buttons.accepted.connect(self.accept)
        buttons.rejected.connect(self.reject)
        layout.addWidget(buttons)

    def accept(self):
        if self.radio_compact.isChecked():
            choice = "compact_transparent"
        elif self.radio_float.isChecked():
            choice = "floating_buttons"
        else:
            choice = "standard_transparent"
            
        conf = get_config()
        conf["theme"] = choice
        save_config(conf)
        
        showInfo("Settings saved.\n\nPlease restart Anki for changes to apply.")
        super().accept()

def open_settings():
    diag = ToolbarSettings(mw)
    diag.exec()

action = QAction("Top Toolbar Settings...", mw)
action.triggered.connect(open_settings)
mw.form.menuTools.addAction(action)
mw.addonManager.setConfigAction(__name__, open_settings)

# ==============================================================================
#   ICONS
# ==============================================================================
icon_data = {
    "decks": """<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align: text-bottom;"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>""",
    "add": """<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align: text-bottom;"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>""",
    "browse": """<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align: text-bottom;"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>""",
    "stats": """<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align: text-bottom;"><path d="M10 20h4V4h-4v16zm-6 0h4v-8H4v8zM16 9v11h4V9h-4z"/></svg>""",
    "sync": """<svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="none" style="vertical-align: text-bottom;"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>"""
}

# ==============================================================================
#   SMART COLOR DETECTION (JS)
# ==============================================================================
js_smart_contrast = """
<script>
    (function(){
        function setColors() {
            var bg = window.getComputedStyle(document.body).backgroundColor;
            var rgb = bg.match(/\d+/g);
            if (!rgb) return;
            var r = parseInt(rgb[0]);
            var g = parseInt(rgb[1]);
            var b = parseInt(rgb[2]);
            
            // Calculate Brightness
            var brightness = (r * 299 + g * 587 + b * 114) / 1000;
            var root = document.documentElement;
            
            if (brightness > 125) {
                // LIGHT MODE (Background is bright -> Text/Icons Black)
                root.style.setProperty('--smart-icon', '#000000');
                root.style.setProperty('--smart-hover', 'rgba(0,0,0,0.08)');
                root.style.setProperty('--smart-btn-bg', '#ffffff');
                root.style.setProperty('--smart-btn-border', '#cccccc');
            } else {
                // DARK MODE (Background is dark -> Text/Icons White)
                root.style.setProperty('--smart-icon', '#ffffff');
                root.style.setProperty('--smart-hover', 'rgba(255,255,255,0.15)');
                root.style.setProperty('--smart-btn-bg', '#3a3a3a');
                root.style.setProperty('--smart-btn-border', '#555555');
            }
        }
        setColors();
        var observer = new MutationObserver(function(mutations) { setColors(); });
        observer.observe(document.body, { attributes: true, attributeFilter: ['class', 'style'] });
        window.addEventListener('load', setColors);
    })();
</script>
"""

# ==============================================================================
#   THEME CSS
# ==============================================================================

# 1. Standard (Text + Icons)
css_standard = """
<style>
    .toolbar {
        background-color: transparent !important;
        box-shadow: none !important;
        border: none !important;
        margin: 0 auto;
        padding: 6px 20px !important;
        width: fit-content !important;
        min-width: 420px;
        display: flex !important;
        justify-content: center;
        gap: 8px;
    }
    
    .toolbar a.hitem {
        background-color: transparent !important;
        box-shadow: none !important;
        border: none !important;
        border-radius: 20px;
        padding: 8px 14px;
        font-weight: 700;
        color: var(--smart-icon, #555) !important;
    }
    
    .toolbar a.hitem:hover {
        background-color: var(--smart-hover, #ccc) !important;
        text-decoration: none !important;
    }
    
    .toolbar svg { margin-right: 6px; }
</style>
"""

# 2. Compact (Icons Only)
css_compact = """
<style>
    .toolbar {
        background-color: transparent !important;
        box-shadow: none !important;
        border: none !important;
        margin: 0 auto;
        padding: 6px 20px !important;
        width: fit-content !important;
        display: flex !important;
        justify-content: center;
        gap: 20px;
    }
    
    .toolbar a.hitem {
        background-color: transparent !important;
        box-shadow: none !important;
        border: none !important;
        border-radius: 50%;
        padding: 8px !important;
        min-width: 30px;
        justify-content: center;
        font-weight: 700;
        color: var(--smart-icon, #555) !important;
    }
    
    .toolbar a.hitem:hover {
        background-color: var(--smart-hover, #ccc) !important;
        transform: scale(1.1);
    }
    
    .toolbar a.hitem span { display: none !important; }
    .toolbar svg { margin: 0 !important; }
</style>
"""

# 3. Floating Buttons
css_floating = """
<style>
    .toolbar {
        background-color: transparent !important;
        box-shadow: none !important;
        border: none !important;
        margin: 0 auto;
        padding: 10px !important;
        width: fit-content !important;
        display: flex !important;
        justify-content: center;
        gap: 12px;
    }
    
    .toolbar a.hitem {
        background-color: var(--smart-btn-bg, #fff) !important;
        color: var(--smart-icon, #000) !important;
        border: 1px solid var(--smart-btn-border, #ccc) !important;
        
        font-weight: 700;
        padding: 10px 20px;
        border-radius: 25px;
        box-shadow: 0 2px 5px rgba(0,0,0,0.15);
    }
    
    .toolbar a.hitem:hover {
        background-color: var(--smart-hover, #eee) !important;
        transform: translateY(-2px);
    }
    
    .toolbar svg { margin-right: 6px; }
</style>
"""

# ==============================================================================
#   INJECTION LOGIC
# ==============================================================================
def get_style_string():
    theme = get_config().get("theme", "standard_transparent")
    
    selected_css = css_standard
    if theme == "compact_transparent": selected_css = css_compact
    elif theme == "floating_buttons": selected_css = css_floating
    
    return selected_css + """
    <style>
        .toolbar a.hitem {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            font-size: 13px;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s ease;
        }
        #sync { color: #4dabf7 !important; }
        #sync svg { fill: #4dabf7 !important; }
        .toolbar a.hitem svg { pointer-events: none; }
    </style>
    """

def update_toolbar_links(links, toolbar):
    for i, link in enumerate(links):
        cmd = None
        if hasattr(link, "cmd"): cmd = link.cmd
        elif isinstance(link, str):
            match = re.search(r"pycmd\(['\"](\w+)['\"]\)", link)
            if match: cmd = match.group(1)

        if cmd and cmd in icon_data:
            if hasattr(link, "label"):
                link.label = icon_data[cmd] + "<span>" + link.label + "</span>"
            elif isinstance(link, str):
                pattern = re.compile(f"(<a\\s+[^>]*pycmd\\(['\"]{cmd}['\"]\\)[^>]*>)(.*?)(</a>)", re.IGNORECASE | re.DOTALL)
                def replacer(m):
                    if "<svg" in m.group(2): return m.group(0)
                    return f"{m.group(1)}{icon_data[cmd]}<span>{m.group(2)}</span>{m.group(3)}"
                links[i] = pattern.sub(replacer, link)

def inject_content(web_content, context):
    web_content.head += get_style_string()
    web_content.body += js_smart_contrast

gui_hooks.top_toolbar_did_init_links.append(update_toolbar_links)
gui_hooks.webview_will_set_content.append(inject_content)