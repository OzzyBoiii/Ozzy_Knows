// VISUAL CHANGE 1: We changed "windows" to "console".
// This forces a black Windows Command Prompt terminal to pop up on your screen
// the exact moment you double-click or launch the .exe file.
#![windows_subsystem = "console"]

fn main() {
    // VISUAL CHANGE 2: This native Windows warning/dialog alert box will trigger
    // immediately when the .exe initializes, halting execution until you click "OK".
    let _ = std::process::Command::new("powershell")
        .args([
            "-Command",
            "Add-Type -AssemblyName PresentationFramework; [System.Windows.MessageBox]::Show('CRITICAL: main.rs is executing right now!', 'Tauri Executable Hook')"
        ])
        .status();

    // The normal app launch handoff proceeds after you close the alert box
    ozzy_knows_lib::run()
}
