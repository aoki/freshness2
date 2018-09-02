import React, { Component } from 'react';
import './app.css';
import TitleBar from "./components/title-bar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar title="Hello Electron" />
        <div className="mainContainer">
          <h1>Hello Electron</h1>
        </div>
      </div>
    );
  }
}

export default App;
