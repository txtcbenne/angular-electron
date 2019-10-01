import { BrowserWindow } from 'electron';
export class AppWindow extends BrowserWindow {
  constructor() {
    super({
      webPreferences: {
          nodeIntegration: true,
          partition: 'persist:view'
      },
      minWidth: 400,
      minHeight: 450,
      width: 900,
      height: 700,
      show: true,
      titleBarStyle: 'hiddenInset',
      title: 'Bell Offline'
    });
  }
}
