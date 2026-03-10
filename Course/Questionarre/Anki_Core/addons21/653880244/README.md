# Search Shortcuts

An Anki addon that adds up to 10 configurable shortcut buttons below the search bar for quick access to your favorite searches.

## Features

- **Configurable Number of Buttons**: Choose between 1-10 shortcut buttons (default: 5)
- **Quick Access Buttons**: Buttons labeled ♡ 1 through ♡ N appear below the search bar
- **Easy to Save**: Right-click any button to save the current search query
- **Quick Execution**: Left-click to instantly run the saved search
- **Visual Tooltips**: Hover over buttons to see what search is saved in each slot
- **Persistent Storage**: Searches are saved per profile and persist across sessions

## Configuration

You can customize the number of shortcut buttons displayed:

1. Go to Tools → Add-ons
2. Select "Search Shortcuts"
3. Click "Config"
4. Change `num_shortcuts` to any value between 1 and 10
5. Restart Anki for changes to take effect

Default configuration:
```json
{
    "num_shortcuts": 5
}
```

## Usage

### Saving a Search
1. Type a search query in the browser search bar
2. Right-click on any shortcut button (♡ 1-5)
3. Select "Save current search"

### Running a Saved Search
1. Left-click on any shortcut button that has a saved search
2. The search will run immediately

### Clearing a Search
1. Right-click on a button with a saved search
2. Select "Clear saved search"

### Viewing Saved Searches
- Hover your mouse over any button to see its saved search in a tooltip

## Use Cases

I personally use the saved searches for workflow, but they're annoying to set up, and to access by scrolling all the way to the top. This works in the same way but better.

## Technical Details

- Searches are stored in Anki's collection configuration
- Each profile has its own set of saved searches
- Buttons use flat styling to match Anki's interface
- Layout automatically adjusts to browser width

## Changelog

### Version 1.0.0
- Initial release
- Configurable number of search shortcut buttons (1-10, default 5)
- Right-click to save/clear searches
- Left-click to execute searches
- Persistent storage per profile