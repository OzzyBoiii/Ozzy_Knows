# Zoom for Anki 24+
# Based in part on code by Damien Elmes <anki@ichi2.net>
# Copyright (C) 2012–2013 Roland Sieker <ospalh@gmail.com>
# Copyright (C) 2024 Shigeyuki <http://patreon.com/Shigeyuki>

# This program is free software: you can redistribute it and/or modify
# it under the terms of the GNU Affero General Public License as published by
# the Free Software Foundation, either version 3 of the License, or
# (at your option) any later version.

# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
# GNU Affero General Public License for more details.

# You should have received a copy of the GNU Affero General Public License
# along with this program.  If not, see <http://www.gnu.org/licenses/>.


from types import MethodType
from aqt import QKeySequence,QAction,QMenu
from aqt import mw
from aqt.webview import AnkiWebView, QWebEngineView

from .shige_pop.popup_config import set_gui_hook_change_log
set_gui_hook_change_log()

__version__ = "1.2.0"

DEBUG_MODE = True

# different_zoom_question_and_answer
IS_DEFAULT_ZOOM = True

# Standard zoom factors for the main views of the central area
# Before you change the review_standard_zoom size, maybe you should
# use larger fonts in your decks.


# How much to increase or decrease the zoom factor with each step. The
# a little odd looking number is the fourth root of two. That means
# with four clicks you double or half the size, as precisely as
# possible.
zoom_step = 2.0**0.25

# config = mw.addonManager.getConfig(__name__)

def zoom_in(step=None):
    """Increase the text size."""
    if not step:
        step = zoom_step

    change_zoom(mw.web.zoomFactor() * step)


def zoom_out(step=None):
    """Decrease the text size."""
    if not step:
        step = zoom_step
    change_zoom(mw.web.zoomFactor() / step)


def get_reviewer_zoom_value():
    config = mw.addonManager.getConfig(__name__)
    if config.get('different_zoom_question_and_answer', IS_DEFAULT_ZOOM):
        if mw.reviewer.state == "question":
            return config.get('question_zoom', 1.0)
        elif mw.reviewer.state == "answer":
            return config.get('answer_zoom', 1.0)
    return config.get('review_zoom', 1.0)

def save_reviewer_zoom_value(config:"dict", now_zoom)-> dict:
    if config.get('different_zoom_question_and_answer', IS_DEFAULT_ZOOM):
        if mw.reviewer.state == "question":
            config['question_zoom'] = now_zoom
            return config
        elif mw.reviewer.state == "answer":
            config['answer_zoom'] = now_zoom
            return config
    config[ 'review_zoom' ] = now_zoom
    return config




def set_zoom(state=None, *args): # configで使う
    """Set the zoom on state change"""
    config = mw.addonManager.getConfig(__name__)
    state = mw.state

    if state in ['deckBrowser', 'overview']:
        mw.web.setZoomFactor( config[ 'overview_zoom' ] )
    elif state == 'review':
        reviewer_zoom_value = get_reviewer_zoom_value()
        mw.web.setZoomFactor(reviewer_zoom_value)


def change_zoom(new_zoom_level):
    """When zoom is changed, save the values"""
    config = mw.addonManager.getConfig(__name__)
    state = mw.state

    if state in ['deckBrowser', 'overview']:
        config[ 'overview_zoom' ] = new_zoom_level
    elif state == 'review':
        config = save_reviewer_zoom_value(config, new_zoom_level)


    mw.addonManager.writeConfig(__name__, config)
    mw.web.setZoomFactor( new_zoom_level )

def reset_zoom(state=None, *args):
    """Reset the text size."""
    config = mw.addonManager.getConfig(__name__)
    if not state:
        state = mw.state

    if state in ['deckBrowser', 'overview']:
        change_zoom( config[ 'overview_zoom_default' ] )
    elif state == 'review':
        change_zoom( config[ 'review_zoom_default' ] )



def add_action(submenu, label, callback, shortcut=None):
    """Add action to menu"""
    action = QAction(label, mw)
    action.triggered.connect(callback)
    if shortcut:
        action.setShortcut(QKeySequence(shortcut))
    submenu.addAction(action)

def setup_menu():
    """Set up the zoom menu."""
    try:
        mw.addon_view_menu
    except AttributeError as e :
        print(e)
        try:
            mw.addon_view_menu = mw.form.menuqt_accel_view # ﾃﾞﾌｫﾙﾄの&View
        except AttributeError as e :
            print(e)
            try:
                mw.addon_view_menu = QMenu('&View', mw)
                mw.form.menubar.insertMenu(
                    mw.form.menuTools.menuAction(),
                    mw.addon_view_menu
                )
            except Exception as e:
                if DEBUG_MODE:raise e
                else:return

    mw.zoom_submenu = QMenu('&Zoom for Anki24 (Fixed by Shige)', mw)
    mw.addon_view_menu.addMenu(mw.zoom_submenu)

    config = mw.addonManager.getConfig(__name__)
    zoom_in_shortcut = config["zoom_in_shortcut"]
    zoom_out_shortcut = config["zoom_out_shortcut"]
    reset_shortcut = config["reset_shortcut"]

    add_action(mw.zoom_submenu, 'Zoom &In', zoom_in, zoom_in_shortcut)
    add_action(mw.zoom_submenu, 'Zoom &Out', zoom_out, zoom_out_shortcut)
    mw.zoom_submenu.addSeparator()

    add_action(mw.zoom_submenu, '&Reset', reset_zoom, reset_shortcut)

    add_config_button(mw.zoom_submenu)

def real_zoom_factor(self):
    """Use the default zoomFactor.
    Overwrites Anki's effort to support hiDPI screens.
    """
    return QWebEngineView.zoomFactor(self)

def save_state_zoom(new_state,old_state, *args,**kwargs):
    # Ctrl+ﾏｳｽﾎｲｰﾙで値を保存する方法が不明
    # 移動したらｽﾞｰﾑの値を保存
    try:
        config = mw.addonManager.getConfig(__name__)
        if not config["manually_force_zoom"]:
            if old_state in ['overview','deckBrowser','review']:

                now_zoom = mw.web.zoomFactor()
                if old_state in ['overview','deckBrowser']:
                    config[ 'overview_zoom' ] = now_zoom
                elif old_state == 'review':
                    config = save_reviewer_zoom_value(config, now_zoom)
                mw.addonManager.writeConfig(__name__, config)
    except Exception as e:
        if DEBUG_MODE:raise e
        else:pass

def seve_zoom_anki_close(*args,**kwargs):
    # Anki閉じるときｽﾞｰﾑ値を保存
    try:
        config = mw.addonManager.getConfig(__name__)
        if not config["manually_force_zoom"]:
            state = mw.state
            if state in ['overview','deckBrowser','review']:
                now_zoom = mw.web.zoomFactor()
                if state in ['overview','deckBrowser']:
                    config[ 'overview_zoom' ] = now_zoom
                elif state == 'review':
                    config = save_reviewer_zoom_value(config, now_zoom)
                mw.addonManager.writeConfig(__name__, config)
    except Exception as e:
        if DEBUG_MODE:raise e
        else:pass

    
def set_zoom_state_did_change(new_state, old_state, *args,**kwargs):
    # stateを変更したらｽﾞｰﾑ値を設定
    try:
        config = mw.addonManager.getConfig(__name__)
        if not config["manually_force_zoom"]:
            if new_state in ['deckBrowser', 'overview']:
                mw.web.setZoomFactor( config[ 'overview_zoom' ] )
            elif new_state == 'review':
                reviewer_zoom_value = get_reviewer_zoom_value()
                mw.web.setZoomFactor(reviewer_zoom_value)

    except Exception as e:
        if DEBUG_MODE:raise e
        else:pass

def set_zoom_operation_did_execute(*args,**kwargs):
    # mw.refreshを変更したらｽﾞｰﾑ値を設定
    try:
        config = mw.addonManager.getConfig(__name__)
        new_state = mw.state
        if not config["manually_force_zoom"]:
            if new_state in ['deckBrowser', 'overview']:
                mw.web.setZoomFactor( config[ 'overview_zoom' ] )
            elif new_state == 'review':
                reviewer_zoom_value = get_reviewer_zoom_value()
                mw.web.setZoomFactor(reviewer_zoom_value)

    except Exception as e:
        if DEBUG_MODE:raise e
        else:pass



def seve_zoom_question(*args,**kwargs):
    # ｽﾞｰﾑ値を保存
    try:
        config = mw.addonManager.getConfig(__name__)
        if not config["manually_force_zoom"]:
            if mw.state == 'review':
                if config.get('different_zoom_question_and_answer', IS_DEFAULT_ZOOM):
                    now_zoom = mw.web.zoomFactor()
                    config['question_zoom'] = now_zoom
                    mw.addonManager.writeConfig(__name__, config)
    except Exception as e:
        if DEBUG_MODE:raise e
        else:pass

from aqt import gui_hooks

try:
    gui_hooks.reviewer_did_show_question.append(set_zoom_operation_did_execute)
    gui_hooks.reviewer_did_show_answer.append(set_zoom_operation_did_execute)

    # # answerを表示する前にquestionを保存
    # def handle_card_will_show(text, card, state, *args, **kwargs):
    #     if state == "reviewAnswer":
    #         seve_zoom_question()
    #     return text
    # gui_hooks.card_will_show.append(handle_card_will_show)

    # questionを表示する前にanswerを保存
    # gui_hooks.reviewer_did_answer_card.append(seve_zoom_anki_close)


except Exception as e:
    if DEBUG_MODE:raise e
    else:pass

try:
    gui_hooks.state_will_change.append(save_state_zoom)
    gui_hooks.state_did_change.append(set_zoom_state_did_change)
    gui_hooks.state_did_reset.append(set_zoom_operation_did_execute)
    gui_hooks.deck_browser_did_render.append(set_zoom_operation_did_execute)
    gui_hooks.overview_did_refresh.append(set_zoom_operation_did_execute)
    gui_hooks.profile_will_close.append(seve_zoom_anki_close)
    gui_hooks.reviewer_did_answer_card.append(seve_zoom_anki_close)
except Exception as e:
    if DEBUG_MODE:raise e
    else:pass






# ----------------設定ｳｨﾝﾄﾞｳを追加--------------------
from .zoom_Config import SetAnkiRestartConfig,set_gui_hook_rate_this
from aqt.utils import qconnect
# ----- add-onのconfigをｸﾘｯｸしたら設定ｳｨﾝﾄﾞｳを開く -----
def add_config_button(menu:QMenu):
    mw.addonManager.setConfigAction(__name__, SetAnkiRestartConfig)
    # ----- ﾒﾆｭｰﾊﾞｰに追加 -----
    addon_Action = QAction("🔍️Zoom for Anki24 (Fixed by Shige)", mw)
    qconnect(addon_Action.triggered, SetAnkiRestartConfig)
    menu.addAction(addon_Action)
    mw.form.menuTools.addAction(addon_Action)

try:set_gui_hook_rate_this()
except Exception as e:
    if DEBUG_MODE:raise e
    else:pass

try:
    # addHook('afterStateChange', set_zoom)
    mw.web.zoomFactor = MethodType(real_zoom_factor, mw.web)
    AnkiWebView.zoomFactor = real_zoom_factor
    setup_menu()
except Exception as e:
    if DEBUG_MODE:raise e
    else:pass

from .zoom_editor import *