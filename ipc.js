const config = require('./config');
const ipcMain = require('electron').ipcMain;

ipcMain.on('load-config', event => {
  console.log(event);
  event.returnValue = config.store;
});

ipcMain.on('save-config', (event, newConfig) => {
  config.set(newConfig);
  event.returnValue = config.store;
});

ipcMain.on('edit-config', (event) => {
  config.openInEditor();
});
