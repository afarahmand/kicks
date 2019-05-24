import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import ProjectIndexDisplay from '../project/project_index_display';

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
    if (!this.props.creator && !this.props.backedProjects) {
      return null;
    }

    return (
      <div className="content-narrow-project-show project-show-page">
        <h2>{this.props.creator.name}s backed projects</h2>
        <ProjectIndexDisplay projects={this.props.backedProjects}/>
      </div>
    );
  }
}

export default withRouter(UserShowPage);
