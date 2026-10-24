

from aqt import  gui_hooks, mw, dialogs
from aqt.editor import Editor
from aqt.editcurrent import EditCurrent
from aqt.stats import NewDeckStats
from aqt.addcards import AddCards
from aqt.browser import Browser


DEBUG_MODE = True

def editor_set_zoom(editor: Editor, *args,**kwargs):
    try:
        # Editorを開いたらｽﾞｰﾑ値を設定
        config = mw.addonManager.getConfig(__name__)
        editor.web.setZoomFactor(config.get("editor_zoom", 1.0) )
    except:
        pass

def editor_save_zoom():
    try:
        config = mw.addonManager.getConfig(__name__)
        if not config["manually_force_zoom"]:
            return

        (creator, instance) = dialogs._dialogs["EditCurrent"]
        if instance:
            instance: EditCurrent
            if instance.editor.web.isActiveWindow():
                config = mw.addonManager.getConfig(__name__)
                config["editor_zoom"] = instance.editor.web.zoomFactor()
                mw.addonManager.writeConfig(__name__, config)
                print(f"save EditCurrent editor_zoom :{config['editor_zoom']}")

        (creator, instance) = dialogs._dialogs["AddCards"]
        if instance:
            instance: AddCards
            if instance.editor.web.isActiveWindow():
                config = mw.addonManager.getConfig(__name__)
                config["editor_zoom"] = instance.editor.web.zoomFactor()
                mw.addonManager.writeConfig(__name__, config)
                print(f"save AddCards editor_zoom :{config['editor_zoom']}")

        (creator, instance) = dialogs._dialogs["Browser"]
        if instance:
            instance: Browser
            if isinstance(instance.editor, Editor):
                if instance.editor.web.isActiveWindow():
                    config = mw.addonManager.getConfig(__name__)
                    config["editor_zoom"] = instance.editor.web.zoomFactor()
                    mw.addonManager.writeConfig(__name__, config)
                    print(f"save Browser editor_zoom :{config['editor_zoom']}")


    except Exception as e:
        if DEBUG_MODE:raise e
        else:return

def states_set_zoom(dialog: NewDeckStats, *args,**kwargs):
    try:
        # Statsを開いたらｽﾞｰﾑ値を設定
        config = mw.addonManager.getConfig(__name__)
        dialog.form.web.setZoomFactor(config.get("stats_zoom", 1.0) )
    except:
        pass


def states_save_zoom():
    try:
        config = mw.addonManager.getConfig(__name__)
        if not config["manually_force_zoom"]:
            return

        (creator, instance) = dialogs._dialogs["NewDeckStats"]
        if instance:
            instance: NewDeckStats
            config = mw.addonManager.getConfig(__name__)
            config["stats_zoom"] = instance.form.web.zoomFactor()
            mw.addonManager.writeConfig(__name__, config)
            print(f"save stats_zoom :{config['stats_zoom']}")
    except Exception as e:
        if DEBUG_MODE:raise e
        else:return




try:
    gui_hooks.editor_did_init.append(editor_set_zoom)
    gui_hooks.stats_dialog_will_show.append(states_set_zoom)
except:
    pass

