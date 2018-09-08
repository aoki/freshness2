'use strict';
const Store = require('electron-store');
const packageJson = require('./package');

module.exports = new Store({
  defaults: {
    version: packageJson.version,
    darkMode: false,
    vibrancy: false,
    lastWindowState: {
      width: 800,
      height: 600
    },
    githubBaseUrl: '',
    githubApiToken: '',
    organizations: []
  }
});
