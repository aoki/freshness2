import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';

const {ipcRenderer} = window.require('electron');
const config = ipcRenderer.sendSync('load-config');

const octokit = require('@octokit/rest')({
  timeout: 10,
  headers: {
    accept: 'application/vnd.github.v3+json',
  },
  baseUrl: config.githubBaseUrl
});
octokit.authenticate({
  type: 'token',
  token: config.githubApiToken
});

ReactDOM.render(<App apiClient={octokit} config={config}/>, document.getElementById('root'));
registerServiceWorker();
