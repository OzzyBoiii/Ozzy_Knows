"""Configuration management for Universal Beautify Anki."""

from typing import Dict, Any
from pathlib import Path

try:
    from aqt import mw
except Exception:
    mw = None

from .constants import DEFAULTS, ADDON_NAME

ADDON_ID = __name__.split('.')[0]  # directory name of this add-on
ADDON_DIR = Path(__file__).parent

_config_cache: Dict[str, Any] | None = None


def load_config() -> Dict[str, Any]:
    """Load config using Anki's addon manager with safe fallbacks.

    Returns:
        A dictionary containing config values merged with defaults.
    """
    global _config_cache
    if _config_cache is not None:
        return _config_cache

    data: Dict[str, Any] = {}
    if mw and hasattr(mw, "addonManager"):
        try:
            loaded = mw.addonManager.getConfig(ADDON_ID)  # type: ignore
            if isinstance(loaded, dict):
                data = loaded
        except Exception:
            pass

    # Fallback to manual read if necessary.
    if not data:
        cfg_path = ADDON_DIR / "config.json"
        if cfg_path.exists():
            try:
                import json
                with cfg_path.open("r", encoding="utf-8") as f:
                    raw = json.load(f)
                if isinstance(raw, dict):
                    data = raw
            except Exception:
                pass

    # Merge with defaults
    merged = {**DEFAULTS, **{k: v for k, v in data.items() if v is not None}}

    _config_cache = merged
    return merged


def reload_config() -> Dict[str, Any]:
    """Force reload of config (clears cache)."""
    global _config_cache
    _config_cache = None
    return load_config()


def get_config() -> Dict[str, Any]:
    """Alias for load_config for consistency."""
    return load_config()
