extern crate tauri_plugin_bluetooth;

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .setup(|app| {
            if cfg!(debug_assertions) {
                app.handle().plugin(
                    tauri_plugin_log::Builder::new()
                        .level(log::LevelFilter::Debug)
                        .target(tauri_plugin_log::Target::new(
                            tauri_plugin_log::TargetKind::Webview,
                        ))
                        .build(),
                )?;
            }
            Ok(())
        })
        .plugin(tauri_plugin_bluetooth::init())
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
