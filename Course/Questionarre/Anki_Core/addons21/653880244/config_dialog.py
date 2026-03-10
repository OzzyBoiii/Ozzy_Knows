# -*- coding: utf-8 -*-
"""
Search Shortcuts Config Dialog
"""
from aqt.qt import *
from aqt import mw
from aqt.utils import tooltip

class SearchShortcutsConfigDialog(QDialog):
    def __init__(self, parent=None):
        super().__init__(parent)
        
        config = mw.addonManager.getConfig(__name__)
        
        self.num_shortcuts = config.get("num_shortcuts", 5)
        self.button_labels = config.get("button_labels", {})
        
        self.setWindowTitle("Search Shortcuts Configuration")
        self.setMinimumWidth(500)
        
        layout = QVBoxLayout()
        
        # Number of shortcuts spinbox
        num_layout = QHBoxLayout()
        num_label = QLabel("Number of shortcuts (1-10):")
        num_label.setFixedWidth(200)
        self.num_spinbox = QSpinBox()
        self.num_spinbox.setMinimum(1)
        self.num_spinbox.setMaximum(10)
        self.num_spinbox.setValue(self.num_shortcuts)
        self.num_spinbox.valueChanged.connect(self.on_num_changed)
        num_layout.addWidget(num_label)
        num_layout.addWidget(self.num_spinbox)
        num_layout.addStretch()
        layout.addLayout(num_layout)
        
        # Separator
        separator = QFrame()
        separator.setFrameShape(QFrame.Shape.HLine)
        separator.setFrameShadow(QFrame.Shadow.Sunken)
        layout.addWidget(separator)
        
        # Button labels section
        labels_label = QLabel("<b>Button Labels (leave empty for default ♡ N):</b>")
        layout.addWidget(labels_label)
        
        # Scroll area for button label inputs
        scroll = QScrollArea()
        scroll.setWidgetResizable(True)
        scroll_widget = QWidget()
        self.labels_layout = QVBoxLayout()
        scroll_widget.setLayout(self.labels_layout)
        scroll.setWidget(scroll_widget)
        
        self.label_inputs = {}
        self.create_label_inputs()
        
        layout.addWidget(scroll)
        
        # Buttons
        button_layout = QHBoxLayout()
        save_button = QPushButton("Save")
        save_button.clicked.connect(self.save_config)
        cancel_button = QPushButton("Cancel")
        cancel_button.clicked.connect(self.reject)
        
        button_layout.addWidget(save_button)
        button_layout.addWidget(cancel_button)
        button_layout.addStretch()
        
        layout.addLayout(button_layout)
        
        self.setLayout(layout)
    
    def create_label_inputs(self):
        """Create line edits for each button label"""
        # Clear existing widgets
        while self.labels_layout.count():
            item = self.labels_layout.takeAt(0)
            if item.widget():
                item.widget().deleteLater()
        
        self.label_inputs.clear()
        
        # Create inputs for current number of shortcuts
        for i in range(1, self.num_shortcuts + 1):
            row_layout = QHBoxLayout()
            
            label = QLabel(f"Button {i}:")
            label.setFixedWidth(80)
            
            line_edit = QLineEdit()
            line_edit.setPlaceholderText(f"♡ {i}")
            line_edit.setText(self.button_labels.get(str(i), ""))
            line_edit.setMaximumWidth(300)
            
            self.label_inputs[i] = line_edit
            
            row_layout.addWidget(label)
            row_layout.addWidget(line_edit)
            row_layout.addStretch()
            
            self.labels_layout.addLayout(row_layout)
        
        self.labels_layout.addStretch()
    
    def on_num_changed(self, value):
        """Handle change in number of shortcuts"""
        self.num_shortcuts = value
        self.create_label_inputs()
    
    def save_config(self):
        """Save configuration"""
        config = mw.addonManager.getConfig(__name__)
        
        config["num_shortcuts"] = self.num_shortcuts
        
        # Save button labels
        button_labels = {}
        for i, line_edit in self.label_inputs.items():
            text = line_edit.text().strip()
            if text:  # Only save non-empty labels
                button_labels[str(i)] = text
        
        config["button_labels"] = button_labels
        
        mw.addonManager.writeConfig(__name__, config)
        
        tooltip("Configuration saved! Restart Anki or reopen the browser to see changes.")
        self.accept()

def show_config_dialog():
    """Show the configuration dialog"""
    dialog = SearchShortcutsConfigDialog(mw)
    dialog.exec()