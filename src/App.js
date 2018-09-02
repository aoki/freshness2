import React, { Component } from 'react';
import './App.css';
import TitleBar from "./components/title-bar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar title="Hello Electron" />
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
