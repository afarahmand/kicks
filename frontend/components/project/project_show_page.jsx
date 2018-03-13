import React from 'react';
import { withRouter } from 'react-router-dom';
import { daysRemainingUntilEnd } from '../../utils/date_util';

class ProjectShowPage extends React.Component {
  componentDidMount() {
    this.props.fetchProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.projectId !==
      nextProps.match.params.projectId)
    {
      this.props.fetchProject(nextProps.match.params.projectId);
    }
  }

  renderButtons () {
    if (
      this.props.currentUser &&
      (this.props.project.user_id === this.props.currentUser.id)
    ) {
      return (
        <div className="buttons">
          <button
            className="edit-button"
            onClick={() => this.props.history.push(
              `/projects/${this.props.project.id}/edit`
            )}>
            EDIT
          </button>
          <button
            className="delete-button"
            onClick={() => this.props.deleteProject(
              this.props.project.id
            ).then(
              project1 => this.props.history.push(`/`)
          )}>
            DELETE
          </button>
        </div>
      );
    }
  }

  render() {
    if (!this.props.project && !this.props.creator) {
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
            <span className="one goal">
              ${this.props.project.funding_amount}
            </span>
            <span className="two">funding goal</span>
            <span className="one">
              {daysRemainingUntilEnd(this.props.project.funding_end_date)}
            </span>
            <span className="two">days to go</span>

            <div className="all-nothing-container">
              <span className="all-nothing">All or nothing.</span>
              <span>
                This project will only be funded if it reaches its goal
                by {this.props.project.funding_end_date.slice(0, 10)}.
              </span>
            </div>

            {this.renderButtons()}
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
