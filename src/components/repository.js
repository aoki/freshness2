import React, {Component} from 'react';
import PullRequest from "./pull-request";
import './repository.css';

class Repository extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repo: props.repo,
      prs: []
    }
  }

  render() {
    return (
      <div>
        <li>{this.state.repo.name}</li>
        <ul>
        {this.state.prs.map((pr, i) => {
          return <PullRequest key={`${pr.name}-${i}`} pr={pr}/>
        })}
        </ul>
      </div>
    )
  }

  componentWillMount() {
    this.getPullRequest(this.props.apiClient, this.props.org, this.props.repo);
  }

  async getPullRequest(apiClient, owner, repo) {
    const data = await apiClient.pullRequests.getAll({
      owner: owner,
      repo: repo.name,
      state: 'open',
      sort: 'created',
      per_page: 100
    });
    this.setState({prs: data.data});
  }

}

export default Repository;
