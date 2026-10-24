# Copyright (C) Shigeyuki <http://patreon.com/Shigeyuki>
# License: GNU AGPL version 3 or later <http://www.gnu.org/licenses/agpl.html>

try:
    from anki.utils import pointVersion
    version_check = True
except:
    version_check = False

if version_check:
    if pointVersion() <= 44: # 35
        try:
            from PyQt5 import QtCore
            from .old_main import *
        except Exception as e:
            pass
    else: # 45, 47, 49+
        from .main import *