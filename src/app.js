import React, {Component} from 'react';
import './app.css';
import TitleBar from "./components/title-bar";
import Organization from "./components/organization"

class App extends Component {
  render() {
    const orgs = this.props.config.organizations;
    return (
      <div className="App">
        <TitleBar version={this.props.config.version} title="freshness"/>
        <div className="mainContainer">
          <button onClick={e => onClickSave(e, this.props.config)}>Save config</button>
          <button onClick={e => onClickEdit(e)}>Open config with Editor</button>
          <ul>
          {orgs.map((org, i) => {
            return <li key={i}><a href={`#${org}`}>{org}</a></li>
          })}
          </ul>
          {orgs.map((org, i) => {
            return <Organization key={org+i} apiClient={this.props.apiClient} org={org}/>
          })}
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
