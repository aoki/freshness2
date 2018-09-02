import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="titleBarContainer">
          <span><img src={logo} className="logo"/>Hello Electron</span>
        </div>
        <div className="mainContainer">
          <h1>Hello Electron</h1>
          <ul>
            <li>Node: <script>document.write(process.versions.node)</script></li>
            <li>Chrome: <script>document.write(process.versions.chrome)</script></li>
            <li>Electron: <script>document.write(process.versions.electron)</script></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
