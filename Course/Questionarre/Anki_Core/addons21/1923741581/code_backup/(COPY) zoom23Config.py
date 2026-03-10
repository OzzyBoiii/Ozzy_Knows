
from aqt import QCheckBox, QDialog, QDoubleSpinBox, QFrame, QHBoxLayout, QIcon, QLineEdit, QStyle,Qt
from aqt import QVBoxLayout, QLabel, QPushButton
from aqt import mw
from aqt.utils import tooltip
from aqt.utils import tr
from os.path import join, dirname
from aqt import QPixmap,gui_hooks
from aqt.utils import openLink

DEBUG_MODE = True

THE_ADDON_NAME = "Zoom23 by Shige"
SHORT_ADDON_NAME = "Zoom23"
RATE_THIS = None

SET_LINE_EDID_WIDTH = 400
MAX_LABEL_WIDTH = 100
ADDON_PACKAGE = mw.addonManager.addonFromModule(__name__)
# ｱﾄﾞｵﾝのURLが数値であるか確認
if (isinstance(ADDON_PACKAGE, (int, float))
    or (isinstance(ADDON_PACKAGE, str)
    and ADDON_PACKAGE.isdigit())):
    RATE_THIS = True

RATE_THIS_URL = f"https://ankiweb.net/shared/review/{ADDON_PACKAGE}"
POPUP_PNG = "popup_shige.png"

NEW_FEATURE = """
- manually force zoom
    Do not automatically set the zoom value.
"""

RATE_THIS_TEXT = """
[ Update : {addon} ]

Shigeyuki :
Shigeyuki :
Hello, thank you for using this add-on!
I developed a new option!
{new_feature}
If you rate this, it will be add to option.
Would you like to add it to options? Thank you!
""".format(addon=SHORT_ADDON_NAME,new_feature=NEW_FEATURE)


class ZoomConfig(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent)

        config = mw.addonManager.getConfig(__name__)
        self.overview_zoom = config["overview_zoom"] # 1.0,
        self.review_zoom = config["review_zoom"] # 1.0,
        self.zoom_in_shortcut = config["zoom_in_shortcut"] # "Ctrl+Shift++"
        self.zoom_out_shortcut = config["zoom_out_shortcut"] #"Ctrl+Shift+-"
        self.reset_shortcut = config["reset_shortcut"] # "Ctrl+Shift+^"

        self.manually_force_zoom = config["manually_force_zoom"] # false


        addon_path = dirname(__file__)
        self.setWindowIcon(QIcon(join(addon_path,"icon.png")))

        # Set image on QLabel
        self.patreon_label = QLabel()
        patreon_banner_path = join(addon_path, r"banner.jpg")
        pixmap = QPixmap(patreon_banner_path)
        pixmap = pixmap.scaledToWidth(300, Qt.TransformationMode.SmoothTransformation)
        self.patreon_label.setPixmap(pixmap)
        self.patreon_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        self.patreon_label.setFixedSize(pixmap.width(), pixmap.height())
        self.patreon_label.mousePressEvent = self.open_patreon_Link
        self.patreon_label.setCursor(Qt.CursorShape.PointingHandCursor)
        self.patreon_label.enterEvent = self.patreon_label_enterEvent
        self.patreon_label.leaveEvent = self.patreon_label_leaveEvent

        self.setWindowTitle(THE_ADDON_NAME)

        button = QPushButton('OK')
        button.clicked.connect(self.handle_button_clicked)
        button.clicked.connect(self.hide)
        button.setFixedWidth(100)

        button2 = QPushButton('Cancel')
        button2.clicked.connect(self.cancelSelect)
        button2.clicked.connect(self.hide)
        button2.setFixedWidth(100)

        if RATE_THIS:
            button3 = QPushButton('RateThis')
            button3.clicked.connect(self.open_rate_this_Link)
            button3.setFixedWidth(100)

        # ｳｨﾝﾄﾞｳにQFontComboBoxとQLabelとQPushButtonを追加
        layout = QVBoxLayout()


        #-----------------------------
        self.overview_zoom_label,self.overview_zoom_spinbox = self.create_spinbox(
        "[ overview zoom ]", 0.1, 5, self.overview_zoom, 70, 1, 0.1,"overview_zoom")

        self.review_zoom_label,self.review_zoom_spinbox = self.create_spinbox(
        "[ review zoom ]", 0.1, 5, self.review_zoom, 70, 1, 0.1,"review_zoom")

        self.zoom_in_shortcut_label = self.create_line_edits_and_labels(
            "zoom_in_shortcut", self.zoom_in_shortcut, "zoom in Shortcut")
        self.zoom_out_shortcut_label = self.create_line_edits_and_labels(
            "zoom_out_shortcut", self.zoom_out_shortcut, "zoom out shortcut")
        self.reset_shortcut_label = self.create_line_edits_and_labels(
            "reset_shortcut", self.reset_shortcut, "reset shortcut")



        # new option ------------
        if config["is_rate_this"]:
            self.manually_force_zoom_label = self.create_checkbox(
                "manually force zoom",  "manually_force_zoom")
            self.add_icon_to_checkbox(self.manually_force_zoom_label, "Do not automatically set the zoom value.")
        #-------------------------


        layout.addWidget(self.patreon_label)

        layout.addWidget(self.overview_zoom_label)
        self.add_widget_with_spacing(layout,self.overview_zoom_spinbox)

        layout.addWidget(self.review_zoom_label)
        self.add_widget_with_spacing(layout,self.review_zoom_spinbox)

        layout.addWidget(self.create_separator())#-------------

        layout.addLayout(self.zoom_in_shortcut_label)
        layout.addLayout(self.zoom_out_shortcut_label)
        layout.addLayout(self.reset_shortcut_label)


        # new option ------------
        if config["is_rate_this"]:
            layout.addWidget(self.create_separator())#-------------
            layout.addWidget(self.manually_force_zoom_label)
        # ----------------------


        button_layout = QHBoxLayout()
        button_layout.addWidget(button)
        button_layout.addWidget(button2)
        if RATE_THIS:button_layout.addWidget(button3)

        layout.addLayout(button_layout)
        self.setLayout(layout)




    # ﾁｪｯｸﾎﾞｯｸｽを生成する関数=======================
    def create_checkbox(self, label, attribute_name):
        checkbox = QCheckBox(label, self)
        checkbox.setChecked(getattr(self, attribute_name))

        def handler(state):
            if state == 2:
                setattr(self, attribute_name, True)
            else:
                setattr(self, attribute_name, False)

        checkbox.stateChanged.connect(handler)
        return checkbox

    # ﾁｪｯｸﾎﾞｯｸｽにﾂｰﾙﾁｯﾌﾟとﾊﾃﾅｱｲｺﾝを追加する関数=========
    def add_icon_to_checkbox(self, checkbox: QCheckBox, tooltip_text):
        qtip_style = """
            QToolTip {
                border: 1px solid black;
                padding: 5px;
                font-size: 2em;
                background-color: #303030;
                color: white;
            }
        """
        checkbox.setStyleSheet(qtip_style)
        checkbox.setToolTip(tooltip_text)
        icon = self.style().standardIcon(QStyle.StandardPixmap.SP_MessageBoxQuestion)
        checkbox_height = checkbox.height()
        checkbox.setIcon(QIcon(icon.pixmap(checkbox_height, checkbox_height)))
    #=================================================


    # ｾﾊﾟﾚｰﾀを作成する関数=========================
    def create_separator(self):
        separator = QFrame()
        separator.setFrameShape(QFrame.Shape.HLine)
        separator.setFrameShadow(QFrame.Shadow.Sunken)
        separator.setStyleSheet("border: 1px solid gray")
        return separator
    # =================================================


    # ﾚｲｱｳﾄにｽﾍﾟｰｽを追加する関数=======================
    def add_widget_with_spacing(self,layout, widget):
        hbox = QHBoxLayout()
        hbox.addSpacing(15)  # ｽﾍﾟｰｼﾝｸﾞを追加
        hbox.addWidget(widget)
        hbox.addStretch(1)
        layout.addLayout(hbox)

    # ------------ patreon label----------------------
    def patreon_label_enterEvent(self, event):
        addon_path = dirname(__file__)
        patreon_banner_hover_path = join(addon_path, r"Patreon_banner.jpg")
        self.pixmap = QPixmap(patreon_banner_hover_path)
        self.pixmap = self.pixmap.scaledToWidth(300, Qt.TransformationMode.SmoothTransformation)
        self.patreon_label.setPixmap(self.pixmap)

    def patreon_label_leaveEvent(self, event):
        addon_path = dirname(__file__)
        patreon_banner_hover_path = join(addon_path, r"banner.jpg")
        self.pixmap = QPixmap(patreon_banner_hover_path)
        self.pixmap = self.pixmap.scaledToWidth(300, Qt.TransformationMode.SmoothTransformation)
        self.patreon_label.setPixmap(self.pixmap)
    # ------------ patreon label----------------------

    #-- open patreon link-----
    def open_patreon_Link(self,url):
        openLink("http://patreon.com/Shigeyuki")

    #-- open rate this link-----
    def open_rate_this_Link(self,url):
        openLink(RATE_THIS_URL)
        toggle_rate_this()

    # --- cancel -------------
    def cancelSelect(self):
        self.close()
    #-----------------------------


    #----------------------------
    # ｽﾋﾟﾝﾎﾞｯｸｽを作成する関数=========================
    def create_spinbox(self, label_text, min_value,
                                max_value, initial_value, width,
                                decimals, step, attribute_name):
        def spinbox_handler(value):
            value = round(value, 1)
            if decimals == 0:
                setattr(self, attribute_name, int(value))
            else:
                setattr(self, attribute_name, value)

        label = QLabel(label_text, self)
        spinbox = QDoubleSpinBox(self)
        spinbox.setMinimum(min_value)
        spinbox.setMaximum(max_value)
        spinbox.setValue(initial_value)
        spinbox.setFixedWidth(width)
        spinbox.setDecimals(decimals)
        spinbox.setSingleStep(step)
        spinbox.valueChanged.connect(spinbox_handler)
        return label, spinbox
    #=================================================


    # ﾃｷｽﾄﾎﾞｯｸｽを作成する関数=========================
    def create_line_edits_and_labels(self, list_attr_name, list_items, b_name, b_index=None):
        main_layout = QVBoxLayout()
        items = list_items if isinstance(list_items, list) else [list_items]
        for i, item in enumerate(items):
            line_edit = QLineEdit(item)
            line_edit.textChanged.connect(lambda text,
                                        i=i,
                                        name=list_attr_name: self.update_list_item(name, i, text))
            line_edit.setMaximumWidth(SET_LINE_EDID_WIDTH)

            if i == 0:
                layout = QHBoxLayout()
                if b_index is not None:
                    b_name_attr = getattr(self, b_name)
                    label_edit = QLineEdit(b_name_attr[b_index])
                    label_edit.textChanged.connect(lambda text,
                                                i=i,
                                                b_name=b_name: self.update_label_item(b_name, b_index, text))
                    label_edit.setFixedWidth(MAX_LABEL_WIDTH)
                    layout.addWidget(label_edit)
                else:
                    label = QLabel(b_name)
                    label.setFixedWidth(MAX_LABEL_WIDTH)
                    layout.addWidget(label)
            else:
                label = QLabel()
                label.setFixedWidth(MAX_LABEL_WIDTH)
                layout = QHBoxLayout()
                layout.addWidget(label)

            line_edit = QLineEdit(item)
            line_edit.textChanged.connect(lambda text,
                                        i=i,
                                        name=list_attr_name: self.update_list_item(name, i, text))
            line_edit.setMaximumWidth(SET_LINE_EDID_WIDTH)
            layout.addWidget(line_edit)
            main_layout.addLayout(layout)
        return main_layout

    def update_label_item(self, b_name, index, text):
        update_label = getattr(self,b_name)
        update_label[index] = text
    def update_list_item(self, list_attr_name, index, text):
        # list_to_update = getattr(self, list_attr_name)
        # list_to_update[index] = text
        list_to_update = getattr(self, list_attr_name)
        if isinstance(list_to_update, list):
            list_to_update[index] = text
        else:
            setattr(self, list_attr_name, text)
    # ===================================================

    def handle_button_clicked(self):
        self.save_config_fontfamiles()
        from . import set_zoom
        set_zoom()

    def save_config_fontfamiles(self):
        config = mw.addonManager.getConfig(__name__)

        config["overview_zoom"] = self.overview_zoom # 1.0,
        config["review_zoom"] = self.review_zoom # 1.0,
        config["zoom_in_shortcut"] = self.zoom_in_shortcut # "Ctrl+Shift++",
        config["zoom_out_shortcut"] = self.zoom_out_shortcut #"Ctrl+Shift+-" ,
        config["reset_shortcut"] = self.reset_shortcut # "Ctrl+Shift+^"

        config["manually_force_zoom"] = self.manually_force_zoom

        mw.addonManager.writeConfig(__name__, config)

        # --------------show message box-----------------
        try:some_restart_anki =tr.preferences_some_settings_will_take_effect_after()
        except:some_restart_anki ="Some settings will take effect after you restart Anki."
        tooltip(some_restart_anki)
        # --------------show message box-----------------


def SetAnkiRestartConfig():
    font_viewer = ZoomConfig()
    if hasattr(ZoomConfig, 'exec'):font_viewer.exec() # Qt6
    else:font_viewer.exec_() # Qt5


# ------- Rate This PopUp ---------------

def set_gui_hook_rate_this():
    gui_hooks.main_window_did_init.append(change_log_popup)

def change_log_popup(*args,**kwargs):
    try:
        config = mw.addonManager.getConfig(__name__)
        if (config["is_rate_this"] == False
            and config["is_change_log_2024_2_21"] == False
            ):

            dialog = CustomDialog()
            if hasattr(dialog, 'exec'):result = dialog.exec() # Qt6
            else:result = dialog.exec_() # Qt5

            if result == QDialog.DialogCode.Accepted:
                open_rate_this_Link(RATE_THIS_URL)
                toggle_rate_this()
            elif  result == QDialog.DialogCode.Rejected:
                toggle_changelog()

    except Exception as e:
        if DEBUG_MODE:raise e
        else:pass


class CustomDialog(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent)

        addon_path = dirname(__file__)
        icon = QPixmap(join(addon_path,POPUP_PNG))
        layout = QVBoxLayout()

        self.setWindowTitle(THE_ADDON_NAME)

        icon_label = QLabel()
        icon_label.setPixmap(icon)

        hbox = QHBoxLayout()

        rate_this_label = QLabel(RATE_THIS_TEXT)
        hbox.addWidget(icon_label)
        hbox.addWidget(rate_this_label)

        layout.addLayout(hbox)

        button_layout = QHBoxLayout()

        self.yes_button = QPushButton("Add to option(RateThis)")
        self.yes_button.clicked.connect(self.accept)
        self.yes_button.setFixedWidth(200)
        button_layout.addWidget(self.yes_button)

        self.no_button = QPushButton("No")
        self.no_button.clicked.connect(self.reject)
        self.no_button.setFixedWidth(100)
        button_layout.addWidget(self.no_button)

        layout.addLayout(button_layout)
        self.setLayout(layout)

def open_rate_this_Link(url):
    openLink(url)

def toggle_rate_this():
    config = mw.addonManager.getConfig(__name__)
    config["is_rate_this"] = True
    config["is_change_log_2024_2_21"] = True
    mw.addonManager.writeConfig(__name__, config)

def toggle_changelog():
    config = mw.addonManager.getConfig(__name__)
    config["is_change_log_2024_2_21"] = True
    mw.addonManager.writeConfig(__name__, config)

# -----------------------------------
