import React from 'react';
import { withRouter } from 'react-router-dom';

class ProjectShowPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.projectId !== nextProps.match.params.projectId) {
      this.props.fetchProject(nextProps.match.params.projectId);
    }
  }

  render() {
    if (!this.props.project) {
      console.log("!!!");
      console.log(this.props.project);
      return null;
    }

    return (
      <div>
        <span>THE PROJECT SHOW PAGE</span>
        {this.props.project.title}
        {this.props.project.image_url}
        {this.props.project.description}
        {this.props.project.short_blurb}
        {this.props.project.funding_amount}
        {this.props.project.funding_end_date}
        {this.props.project.category}
      </div>
    );
  }
}

export default withRouter(ProjectShowPage);
// <div>{this.props.project.title}</div>
