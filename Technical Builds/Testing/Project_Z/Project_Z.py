import os

def parse_content_with_windows(self, content):
    """Parse content and split into windows using @ symbols as borders"""
    windows = []
    current_window = []
    window_count = 1

    lines = content.split('\n')

    for line in lines:
        # Check if line is a window separator (contains only @ symbols)
        if line.strip().replace('@', '') == '' and len(line.strip()) >= 3:
            if current_window:  # Only create window if we have content
                windows.append({
                    'content': '\n'.join(current_window),
                    'title': f"Part {window_count}",
                    'filename_suffix': f"_window_{window_count}"
                })
                current_window = []
                window_count += 1
        else:
            current_window.append(line)

    # Add the last window if there's content
    if current_window:
        windows.append({
            'content': '\n'.join(current_window),
            'title': f"Part {window_count}",
            'filename_suffix': f"_window_{window_count}"
        })

    # If no windows were created (no @ separators), create one window with all content
    if not windows:
        windows.append({
            'content': content,
            'title': "Main Content",
            'filename_suffix': ""
        })

    return windows

def load_content_file_flexible(filename="content.txt"):
    """Flexible content file loader that tries multiple paths"""
    possible_paths = [
        filename,  # Direct path
        os.path.join("Project_Z", filename),  # Project_Z subfolder
        os.path.join("content", filename),  # content subfolder
        os.path.join("..", filename),  # Parent directory
        os.path.join(os.path.dirname(__file__), filename),  # Same directory as script
    ]

    for path in possible_paths:
        try:
            if os.path.exists(path):
                with open(path, 'r', encoding='utf-8') as file:
                    content = file.read()
                    print(f"Successfully loaded content from: {path}")
                    return content
        except Exception as e:
            print(f"Failed to load from {path}: {e}")
            continue

    raise FileNotFoundError(f"Could not find {filename} in any of the searched locations")

# Example usage:
# content = load_content_file_flexible("content.txt")
# windows = parse_content_with_windows(content)
