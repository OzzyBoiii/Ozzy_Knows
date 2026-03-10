# Search Shortcuts Configuration

## Settings

### num_shortcuts

**Type:** Number  
**Default:** 5  
**Valid Range:** 1-10

Controls how many search shortcut buttons are displayed below the browser search bar.

### button_labels

**Type:** Object (dictionary)  
**Default:** `{}`

Customize the text displayed on each button. By default, buttons show "♡ 1", "♡ 2", etc.

You can set custom labels for any button:

```json
{
    "num_shortcuts": 5,
    "button_labels": {
        "1": "Tags",
        "2": "Today",
        "3": "⭐ Fav",
        "4": "deck:MyDeck",
        "5": "♡ 5"
    }
}
```

**Notes:**
- Only include buttons you want to customize
- Empty buttons will use the default "♡ N" format
- You can use emojis in button labels
- Keep labels short (3-8 characters recommended) for best display

## How to Change Settings

### Method 1: GUI Config Dialog (Recommended)

1. Open Anki
2. Go to **Tools → Add-ons**
3. Select **Search Shortcuts**
4. Click the **Config** button
5. Adjust the number of shortcuts with the spinner
6. Enter custom labels for any buttons you want to customize
7. Click **Save**
8. **Restart Anki** or reopen the browser to see changes

### Method 2: Manual JSON Editing

1. Open Anki
2. Go to **Tools → Add-ons**
3. Select **Search Shortcuts**
4. Click the **Config** button
5. Edit the JSON directly
6. Click **OK**
7. **Restart Anki** for changes to take effect

## Examples

**Minimal setup (default):**
```json
{
    "num_shortcuts": 5,
    "button_labels": {}
}
```

**Custom labels for workflow:**
```json
{
    "num_shortcuts": 3,
    "button_labels": {
        "1": "📚 Study",
        "2": "⭐ Review",
        "3": "🔖 Tagged"
    }
}
```

**Power user setup:**
```json
{
    "num_shortcuts": 10,
    "button_labels": {
        "1": "New",
        "2": "Due",
        "3": "Tags",
        "4": "Deck1",
        "5": "Deck2"
    }
}
```

## Notes

- If you set a value outside the 1-10 range, the addon will automatically clamp it to the nearest valid value
- Changing these settings will not delete your saved searches - they are preserved
- If you decrease the number of buttons, higher-numbered slots are hidden but not deleted
- If you later increase the number again, your previously saved searches will still be there
- Button labels are purely visual - they don't affect the saved search functionality