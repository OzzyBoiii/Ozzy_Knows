# Copyright (C) Shigeyuki <http://patreon.com/Shigeyuki>
# License: GNU AGPL version 3 or later <http://www.gnu.org/licenses/agpl.html>

import random
from os.path import join, dirname

from aqt import mw, gui_hooks
from aqt import (
    QCheckBox, QDialog, QDoubleSpinBox, QFrame, QHBoxLayout, QIcon, QLineEdit, QStyle, QTabWidget, QWidget,
    Qt, QVBoxLayout, QLabel, QPushButton, QPixmap, QTextBrowser)

from aqt.utils import tr, tooltip, openLink

from .shige_pop.shige_addons import add_shige_addons_tab
from .shige_pop.endroll.endroll import add_credit_tab
from .shige_pop.button_manager import mini_button

from anki.utils import pointVersion
MIN_VERSION = 44
    # if pointVersion() <= MIN_VERSION:


DEBUG_MODE = True

THE_ADDON_NAME = "Zoom for Anki25 (Fixed by Shige)"
SHORT_ADDON_NAME = "Zoom for Anki25 (Fixed by Shige)"
RATE_THIS = None

BANNAR_LABEL_WIDTH = 500

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


WIDGET_HEIGHT = 550


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

        self.editor_zoom = config.get("editor_zoom", 1.0)
        self.stats_zoom = config.get("stats_zoom", 1.0)

        # configにまだ追加してない(answer_zoomの値を引き継ぎするため)
        # "question_zoom": 1.0 ,
        # "answer_zoom" : 1.0 ,
        # "different_zoom_question_and_answer" : true ,

        self.question_zoom = config.get("question_zoom", self.review_zoom)
        self.answer_zoom = config.get("answer_zoom", self.review_zoom)
        self.different_zoom_question_and_answer = config.get("different_zoom_question_and_answer", True)



        addon_path = dirname(__file__)
        self.setWindowIcon(QIcon(join(addon_path,"icon.png")))

        # Set image on QLabel
        self.patreon_label = QLabel()
        patreon_banner_path = join(addon_path, r"banner.jpg")
        pixmap = QPixmap(patreon_banner_path)
        pixmap = pixmap.scaledToWidth(BANNAR_LABEL_WIDTH, Qt.TransformationMode.SmoothTransformation)
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
            button3 = QPushButton('👍️RateThis')
            button3.clicked.connect(self.open_rate_this_Link)
            mini_button(button3)
            # button3.setFixedWidth(120)

        button4 = QPushButton("💖BecomePatron")
        button4.clicked.connect(self.open_patreon_Link)
        mini_button(button4)

        button5 = QPushButton("🚨Report")
        button5.clicked.connect(lambda: openLink("https://shigeyukey.github.io/shige-addons-wiki/contact.html"))
        mini_button(button5)

        button6 = QPushButton("📖Wiki")
        button6.clicked.connect(lambda: openLink("https://shigeyukey.github.io/shige-addons-wiki/zoom-23.html"))
        mini_button(button6)

        # button4.setFixedWidth(120)


        # ｳｨﾝﾄﾞｳにQFontComboBoxとQLabelとQPushButtonを追加
        layout = QVBoxLayout()


        #-----------------------------
        self.overview_zoom_spinbox = self.create_spinbox(
        "[ Home & Overview Zoom ]", 0.1, 5, self.overview_zoom, 70, 1, 0.1,"overview_zoom")

        self.review_zoom_spinbox = self.create_spinbox(
        "[ Reviewer zoom ]", 0.1, 5, self.review_zoom, 70, 1, 0.1,"review_zoom")


        self.zoom_in_shortcut_label = self.create_line_edits_and_labels(
            "zoom_in_shortcut", self.zoom_in_shortcut, "Zoom in Shortcut")
        self.zoom_out_shortcut_label = self.create_line_edits_and_labels(
            "zoom_out_shortcut", self.zoom_out_shortcut, "Zoom out shortcut")
        self.reset_shortcut_label = self.create_line_edits_and_labels(
            "reset_shortcut", self.reset_shortcut, "Reset shortcut")

        self.manually_force_zoom_label = self.create_checkbox(
            "Do not auto save zoom values.(Ctrl + Scroll wheel)",  "manually_force_zoom")

        self.editor_zoom_spinbox = self.create_spinbox(
            "[ Editor Zoom ]", 0.1, 5, self.editor_zoom, 70, 1, 0.1, "editor_zoom")
        self.stats_zoom_spinbox = self.create_spinbox(
            "[ Stats Zoom ]", 0.1, 5, self.stats_zoom, 70, 1, 0.1, "stats_zoom")


        # new option ------------
        self.different_zoom_question_and_answer_checkbox = self.create_checkbox(
            "Use different zoom values for questions and answers.", "different_zoom_question_and_answer"
        )

        self.question_zoom_spinbox = self.create_spinbox(
            "[ Question Zoom ]", 0.1, 5, self.question_zoom, 70, 1, 0.1, "question_zoom"
        )

        self.answer_zoom_spinbox = self.create_spinbox(
            "[ Answer Zoom ]", 0.1, 5, self.answer_zoom, 70, 1, 0.1, "answer_zoom"
        )
        #-------------------------

        # # top label (not tab)
        # layout.addWidget(self.patreon_label)

        # # reviewer and overview tab
        # layout.addWidget(self.create_separator())#-------------
        # auto_save_label = QLabel("These have shortcut keys and are auto saved.(Ctrl + Scroll wheel)")
        # auto_save_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        # layout.addWidget(auto_save_label)
        # layout.addWidget(self.create_separator())#-------------

        # layout.addLayout(self.overview_zoom_spinbox)

        # layout.addWidget(self.create_separator())#-------------
        # layout.addLayout(self.review_zoom_spinbox)

        # layout.addWidget(self.create_separator())#-------------

        # layout.addWidget(self.different_zoom_question_and_answer_checkbox)
        # layout.addLayout(self.question_zoom_spinbox)
        # layout.addLayout(self.answer_zoom_spinbox)

        # layout.addWidget(self.create_separator())#-------------

        # # others tab
        # layout.addWidget(self.manually_force_zoom_label)

        # layout.addWidget(self.create_separator())#-------------

        # layout.addLayout(self.zoom_in_shortcut_label)
        # layout.addLayout(self.zoom_out_shortcut_label)
        # layout.addLayout(self.reset_shortcut_label)


        # # ----------------------
        # # stats and editor tab
        # layout.addWidget(self.create_separator())#-------------
        # bata_label = QLabel("These do not have shortcut keys and are auto saved.(Ctrl + Scroll wheel)")
        # bata_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        # layout.addWidget(bata_label)
        # layout.addWidget(self.create_separator())#-------------

        # layout.addLayout(self.editor_zoom_spinbox)

        # layout.addLayout(self.stats_zoom_spinbox)

        # layout.addWidget(self.create_separator())#-------------

        # # buttons (not tab)
        # button_layout = QHBoxLayout()
        # button_layout.addWidget(button)
        # button_layout.addWidget(button2)
        # if RATE_THIS:button_layout.addWidget(button3)
        # button_layout.addWidget(button4)

        # layout.addLayout(button_layout)
        # self.setLayout(layout)

        layout = QVBoxLayout()
        tab_widget = QTabWidget()

        # Top label (not in a tab)
        layout.addWidget(self.patreon_label)

        # Reviewer and Overview Tab
        reviewer_tab = QWidget()
        reviewer_layout = QVBoxLayout()
        reviewer_layout.addWidget(self.create_separator())
        shortcut_key_out_save = QLabel("These have shortcut keys and are auto saved.(Ctrl + Scroll wheel)")
        shortcut_key_out_save.setTextInteractionFlags(Qt.TextInteractionFlag.TextBrowserInteraction)
        self.old_anki(shortcut_key_out_save)
        auto_save_label = shortcut_key_out_save
        auto_save_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        reviewer_layout.addWidget(auto_save_label)
        reviewer_layout.addWidget(self.create_separator())

        reviewer_layout.addLayout(self.review_zoom_spinbox)

        reviewer_layout.addWidget(self.create_separator())
        reviewer_layout.addWidget(self.different_zoom_question_and_answer_checkbox)
        if_enabel_text = QLabel("If enabled, the value of Reviewer Zoom will be disabled.")
        if_enabel_text.setTextInteractionFlags(Qt.TextInteractionFlag.TextBrowserInteraction)
        self.old_anki(if_enabel_text)
        reviewer_layout.addWidget(if_enabel_text)
        reviewer_layout.addLayout(self.question_zoom_spinbox)
        reviewer_layout.addLayout(self.answer_zoom_spinbox)

        reviewer_layout.addWidget(self.create_separator())

        fade_in_addon_text = QLabel(
            'If the flicker problem occurs the Fade In add-on might help alleviate it a bit.<br>'
            'addon: <a href="https://ankiweb.net/shared/info/33018515">'
            '👻Anki Fade In - add fade in effect to Reviewer Home etc (by Shigeඞ)</a>'
        )
        fade_in_addon_text.setOpenExternalLinks(True)
        fade_in_addon_text.setTextInteractionFlags(Qt.TextInteractionFlag.TextBrowserInteraction)

        self.old_anki(fade_in_addon_text)
        reviewer_layout.addWidget(fade_in_addon_text)

        self.old_anki(self.different_zoom_question_and_answer_checkbox)
        self.old_anki(self.question_zoom_spinbox)
        self.old_anki(self.answer_zoom_spinbox)

        reviewer_layout.addStretch()
        reviewer_tab.setLayout(reviewer_layout)

        # Stats and Editor Tab
        stats_editor_tab = QWidget()
        stats_editor_layout = QVBoxLayout()


        auto_save_label = QLabel("These have shortcut keys and are auto saved.(Ctrl + Scroll wheel)")
        self.old_anki(auto_save_label)
        auto_save_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        auto_save_label.setTextInteractionFlags(Qt.TextInteractionFlag.TextBrowserInteraction)
        stats_editor_layout.addWidget(self.create_separator())
        stats_editor_layout.addWidget(auto_save_label)
        stats_editor_layout.addWidget(self.create_separator())
        stats_editor_layout.addLayout(self.overview_zoom_spinbox)


        stats_editor_layout.addWidget(self.create_separator())
        bata_label = QLabel("These do not have shortcut keys and are auto saved.(Ctrl + Scroll wheel)")
        self.old_anki(bata_label)
        bata_label.setTextInteractionFlags(Qt.TextInteractionFlag.TextBrowserInteraction)
        bata_label.setAlignment(Qt.AlignmentFlag.AlignCenter)
        stats_editor_layout.addWidget(bata_label)
        stats_editor_layout.addWidget(self.create_separator())
        stats_editor_layout.addLayout(self.editor_zoom_spinbox)
        stats_editor_layout.addLayout(self.stats_zoom_spinbox)
        stats_editor_layout.addWidget(self.create_separator())

        self.old_anki(self.editor_zoom_spinbox)
        self.old_anki(self.stats_zoom_spinbox)

        stats_editor_layout.addStretch()
        stats_editor_tab.setLayout(stats_editor_layout)

        # Others Tab
        others_tab = QWidget()
        others_layout = QVBoxLayout()
        others_layout.addWidget(self.manually_force_zoom_label)

        self.old_anki(self.manually_force_zoom_label)

        others_layout.addWidget(self.create_separator())
        others_layout.addLayout(self.zoom_in_shortcut_label)
        others_layout.addLayout(self.zoom_out_shortcut_label)
        others_layout.addLayout(self.reset_shortcut_label)
        others_layout.addWidget(self.create_separator())

        try:
            shortcuts_tb = QTextBrowser()
            from .shige_pop.popup_config import NEW_FEATURE
            from .shige_pop.change_log import OLD_CHANGE_LOG
            change_log_text = f"[ Change log ]<br>{NEW_FEATURE}<br>{OLD_CHANGE_LOG}"
            change_log_text = change_log_text.replace("\n", "<br>")
            shortcuts_tb.setHtml(change_log_text)
            others_layout.addWidget(shortcuts_tb)
        except Exception as e:
            print(f"[ZoomAnki] Error: {e}")

        others_layout.addStretch()
        others_tab.setLayout(others_layout)

        # Add tabs to tab widget
        tab_widget.addTab(reviewer_tab, "Reviewer")
        tab_widget.addTab(stats_editor_tab, "Home Overview Stats Editor")
        tab_widget.addTab(others_tab, "Others")
        add_credit_tab(self, tab_widget)
        add_shige_addons_tab(self, tab_widget)



        layout.addWidget(tab_widget)

        # Buttons (not in a tab)
        button_layout = QHBoxLayout()
        button_layout.addWidget(button)
        button_layout.addWidget(button2)

        button_layout.addStretch()

        if RATE_THIS:
            button_layout.addWidget(button3)
        button_layout.addWidget(button4)
        button_layout.addWidget(button5)
        button_layout.addWidget(button6)

        layout.addLayout(button_layout)

        self.setLayout(layout)


        self.adjust_self_size()


    def adjust_self_size(self):
        min_size = self.layout().minimumSize()
        # self.resize(min_size.width(), min_size.height())
        self.resize(min_size.width(), WIDGET_HEIGHT)


    def old_anki(self, item):
        if pointVersion() <= MIN_VERSION:
            if isinstance(item, QHBoxLayout) or isinstance(item, QVBoxLayout):
                for i in range(item.count()):
                    sub_item = item.itemAt(i)
                    if sub_item.widget():
                        sub_item.widget().setEnabled(False)
            else:
                item.setEnabled(False)


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
        self.pixmap = self.pixmap.scaledToWidth(BANNAR_LABEL_WIDTH, Qt.TransformationMode.SmoothTransformation)
        self.patreon_label.setPixmap(self.pixmap)

    def patreon_label_leaveEvent(self, event):
        addon_path = dirname(__file__)
        patreon_banner_hover_path = join(addon_path, r"banner.jpg")
        self.pixmap = QPixmap(patreon_banner_hover_path)
        self.pixmap = self.pixmap.scaledToWidth(BANNAR_LABEL_WIDTH, Qt.TransformationMode.SmoothTransformation)
        self.patreon_label.setPixmap(self.pixmap)
    # ------------ patreon label----------------------

    #-- open patreon link-----
    def open_patreon_Link(self,url):
        openLink("http://patreon.com/Shigeyuki")

    #-- open rate this link-----
    def open_rate_this_Link(self,url):
        openLink(RATE_THIS_URL)

    # --- cancel -------------
    def cancelSelect(self):

        emoticons = [":-/", ":-O", ":-|"]
        selected_emoticon = random.choice(emoticons)
        tooltip("Canceled " + selected_emoticon)

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
        # label.setFixedWidth(200)
        spinbox = QDoubleSpinBox(self)
        spinbox.setMinimum(min_value)
        spinbox.setMaximum(max_value)
        spinbox.setValue(initial_value)
        spinbox.setFixedWidth(width)
        spinbox.setDecimals(decimals)
        spinbox.setSingleStep(step)
        spinbox.valueChanged.connect(spinbox_handler)

        layout = QHBoxLayout()
        layout.addWidget(label)
        layout.addWidget(spinbox)
        layout.addStretch()

        return layout
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

        emoticons = [":-)", ":-D", ";-)"]
        selected_emoticon = random.choice(emoticons)
        tooltip("Changed setting " + selected_emoticon)
        self.close()



    def save_config_fontfamiles(self):
        config = mw.addonManager.getConfig(__name__)

        config["overview_zoom"] = self.overview_zoom # 1.0,
        config["review_zoom"] = self.review_zoom # 1.0,
        config["zoom_in_shortcut"] = self.zoom_in_shortcut # "Ctrl+Shift++",
        config["zoom_out_shortcut"] = self.zoom_out_shortcut #"Ctrl+Shift+-" ,
        config["reset_shortcut"] = self.reset_shortcut # "Ctrl+Shift+^"

        config["manually_force_zoom"] = self.manually_force_zoom

        config["editor_zoom"] = self.editor_zoom
        config["stats_zoom"] = self.stats_zoom

        config["question_zoom"] = self.question_zoom
        config["answer_zoom"] = self.answer_zoom
        config["different_zoom_question_and_answer"] = self.different_zoom_question_and_answer


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
    return
    # gui_hooks.main_window_did_init.append(change_log_popup)

# def change_log_popup(*args,**kwargs):
#     try:
#         config = mw.addonManager.getConfig(__name__)
#         if (config["is_rate_this"] == False
#             and config["is_change_log_2024_2_21"] == False
#             ):

#             dialog = CustomDialog()
#             if hasattr(dialog, 'exec'):result = dialog.exec() # Qt6
#             else:result = dialog.exec_() # Qt5

#             if result == QDialog.DialogCode.Accepted:
#                 open_rate_this_Link(RATE_THIS_URL)
#                 toggle_rate_this()
#             elif  result == QDialog.DialogCode.Rejected:
#                 toggle_changelog()

#     except Exception as e:
#         if DEBUG_MODE:raise e
#         else:pass


# class CustomDialog(QDialog):
#     def __init__(self, parent=None):
#         super().__init__(parent)

#         addon_path = dirname(__file__)
#         icon = QPixmap(join(addon_path,POPUP_PNG))
#         layout = QVBoxLayout()

#         self.setWindowTitle(THE_ADDON_NAME)

#         icon_label = QLabel()
#         icon_label.setPixmap(icon)

#         hbox = QHBoxLayout()

#         rate_this_label = QLabel(RATE_THIS_TEXT)
#         hbox.addWidget(icon_label)
#         hbox.addWidget(rate_this_label)

#         layout.addLayout(hbox)

#         button_layout = QHBoxLayout()

#         self.yes_button = QPushButton("Add to option(RateThis)")
#         self.yes_button.clicked.connect(self.accept)
#         self.yes_button.setFixedWidth(200)
#         button_layout.addWidget(self.yes_button)

#         self.no_button = QPushButton("No")
#         self.no_button.clicked.connect(self.reject)
#         self.no_button.setFixedWidth(100)
#         button_layout.addWidget(self.no_button)

#         layout.addLayout(button_layout)
#         self.setLayout(layout)

# def open_rate_this_Link(url):
#     openLink(url)

# def toggle_rate_this():
#     config = mw.addonManager.getConfig(__name__)
#     config["is_rate_this"] = True
#     config["is_change_log_2024_2_21"] = True
#     mw.addonManager.writeConfig(__name__, config)

# def toggle_changelog():
#     config = mw.addonManager.getConfig(__name__)
#     config["is_change_log_2024_2_21"] = True
#     mw.addonManager.writeConfig(__name__, config)

# # -----------------------------------
