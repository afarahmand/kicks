import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import DiscoverIndex from '../discover/discover_index';

class UserShowPage extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !==
      nextProps.match.params.userId)
    {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  render() {
    if (!this.props.creator || !this.props.backedProjects) {
      return null;
    }

    return (
      <section id="user-show" className="content-narrow discover-results">
        <section>
          <h2>{this.props.creator.name}s created projects</h2>
          <DiscoverIndex projects={this.props.createdProjects}/>
        </section>

        <section>
          <h2>{this.props.creator.name}s backed projects</h2>
          <DiscoverIndex projects={this.props.backedProjects}/>
        </section>
      </section>
    );
  }
}

export default withRouter(UserShowPage);
