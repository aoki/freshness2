import React, {Component} from 'react';
import './title-bar.css';
import logo from '../logo.svg';

class TitleBar extends Component {
  render() {
    return (
      <div className="titleBarContainer">
        <span><img src={logo} alt="logo" className="logo"/>{this.props.title}</span>
        <span className="version"> {this.props.version}</span>
      </div>
    );
  }
}

export default TitleBar;
