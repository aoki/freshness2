import React, {Component} from 'react';
import './pull-request.css';

class PullRequest extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pr: props.pr
    }
  }

  render() {
    const pr = this.state.pr;
    console.log(pr)
    return (
      <li>
        <img className="avatarIcon authorIcon" src={pr.user.avatar_url}/>
        <a href={pr.html_url} target='_blank'>{pr.title}</a>
      </li>
    )
  }
}

export default PullRequest;
