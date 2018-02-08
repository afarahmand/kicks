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
      return null;
    }

    return (
      <div className="project-show-page">

        <section className="title content-narrow">
          <div className="creator">
          </div>
          <div className="titles">
            <h2>{this.props.project.title}</h2>
            <span className="subtitle">{this.props.project.short_blurb}</span>
          </div>
        </section>

        <section className="show-status content-narrow">
          <img src={this.props.project.image_url}>
          </img>

          <div className="status">
            <span className="one goal">${this.props.project.funding_amount}</span>
            <span className="two">funding goal</span>
            <span className="one">{this.props.project.funding_end_date}</span>
            <span className="two">days to go</span>

            <div className="all-nothing-container">
              <span className="all-nothing">All or nothing.</span>
              <span>
                This project will only be funded if it reaches its goal
                by {this.props.project.funding_end_date}.
              </span>
            </div>
          </div>
        </section>

        <section className="description-rewards content-narrow">
          <main className="description">
            <h3>About</h3>
            {this.props.project.description}
          </main>

          <aside className="rewards">
          </aside>
        </section>

      </div>
    );
  }
}

export default withRouter(ProjectShowPage);


// <span>THE PROJECT SHOW PAGE</span>
// {this.props.project.title}
// {this.props.project.image_url}
// {this.props.project.description}
// {this.props.project.short_blurb}
// {this.props.project.funding_amount}
// {this.props.project.funding_end_date}
// {this.props.project.category}
