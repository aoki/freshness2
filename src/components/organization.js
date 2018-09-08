import React, {Component} from 'react';
import Repository from "./repository";
import './organization.css';

class Organization extends Component {

  constructor(props) {
    super(props);

    this.state = {
      repos: []
    }

  }

  render() {
    return <div>
      <h2 id={this.props.org} className="orgTitle">{this.props.org}</h2>
      <ul>
        {this.state.repos.map((repo, i) => {
          return <Repository key={`${repo.name}-${i}`} apiClient={this.props.apiClient} org={this.props.org} repo={repo}/>
        })}
      </ul>
    </div>
  }

  componentWillMount() {
    this.getRepositories(this.props.apiClient, this.props.org);
  }

  async getRepositories(apiClient, org) {
    const data = await apiClient.repos.getForOrg({
      org: org,
      type: 'public',
      per_page: 100
    });
    this.setState({repos: data.data});
  }
}

export default Organization;
