import React, {Component} from 'react';
import './app.css';
import TitleBar from "./components/title-bar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar title="Hello Electron" />
        <div className="mainContainer">
          <button onClick={e => onClickSave(e, this.props.config)}>Save config</button>
          <button onClick={e => onClickEdit(e)}>Open config with Editor</button>
        </div>
      </div>
    );
  }
}

const {ipcRenderer} = window.require('electron');

const onClickSave = (e, config) => {
  console.log('Save');
  ipcRenderer.sendSync('save-config', config);
};

const onClickEdit = (e) => {
  ipcRenderer.send('edit-config');
};


export default App;
