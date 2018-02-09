import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { formatAsYYYYMMDD } from '../../utils/date_util';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.props.project;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.match.params.projectId) {
      this.props.fetchProject(this.props.match.params.projectId);
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.project);
  }

  handleSubmit(e) {
    e.preventDefault();
    let project = Object.assign({}, this.state);
    this.props.processForm(project).then(
      project1 => this.props.history.push(`/projects/${project1.project.id}`)
    );
  }

  renderEndDateInput() {
    if(this.props.formType === 'update') {
      return (
        <div className="project-form-input-section">
          <input
            type="date"
            value={this.state.funding_end_date.slice(0, 10)}
            className="project-input"
            disabled
          />
          <p>
            Projects with shorter durations have higher success
            rates. You won’t be able to adjust your duration
            after you launch.
          </p>
        </div>
      );
    } else {
      return (
        <div className="project-form-input-section">
          <input
            type="date"
            value={this.state.funding_end_date}
            onChange={this.update('funding_end_date')}
            className="project-input"
          />
          <p>
            Projects with shorter durations have higher success
            rates. You won’t be able to adjust your duration
            after you launch.
          </p>
        </div>
      );
    }
  }

  renderErrors() {
    return (
      <div className="error-display">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}> {error} </li>
          ))}
        </ul>
      </div>
    );
  }

  renderLabelSection(text) {
    return (
      <div className="project-form-label-section">
        <h4 className="project-field-label">
          {text}
        </h4>
      </div>
    );
  }

  renderPageTitle() {
    if(this.props.formType === 'new') {
      return "Let's get started";
    } else {
      return "Edit project";
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    if (this.props.project === undefined) {
      return null;
    }

    if (this.props.formType === 'update') {
      if (
        this.props.project.user_id !==
        this.props.currentUser.id
      ) {
        this.props.history.push("/");
      }
    }

    return (
      <div className="project-form-page">
        <h2>{this.renderPageTitle()}</h2>
        <div className="page-subtitle">
          Make a great first impression with your project’s title and
          image, and set your funding goal, campaign duration, and
          project category.
        </div>
        <div className="project-form-container">
          <form
            className="project-form"
            onSubmit={this.handleSubmit}
          >
            {this.renderErrors()}
            <ul>
              <li>
                <div className="project-form-label-section">
                  <h4 className="project-field-label">
                    Project image
                  </h4>
                </div>
                <div className="project-form-input-section">
                  <img src={this.state.image_url}></img>
                  <p>
                    This is the first thing that people will see when
                    they come across your project. Choose an image
                    that’s crisp and text-free.
                  </p>
                  <input
                    type="text"
                    value={this.state.image_url}
                    onChange={this.update('image_url')}
                    className="project-input"
                  />
                </div>
              </li>

              <li>
                {this.renderLabelSection("Project title")}
                <div className="project-form-input-section">
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    className="project-input"
                  />
                  <p>
                    Our search looks through words from your project title
                    and blurb, so make them clear and descriptive of what
                    you’re making.
                  </p>

                  <p>
                    These words will help people find your project, so
                    choose them wisely! Your name will be searchable too.
                  </p>
                </div>
              </li>

              <li>
                {this.renderLabelSection("Short blurb")}
                <div className="project-form-input-section">
                  <textarea
                    maxLength="135"
                    onChange={this.update('short_blurb')}
                    className="project-input shortblurb"
                    value={this.state.short_blurb}
                  >
                  </textarea>
                  <p>
                    Give people a sense of what you’re doing. Skip
                    “Help me” and focus on what you’re making.
                  </p>
                </div>
              </li>

              <li>
                {this.renderLabelSection("Description")}
                <div className="project-form-input-section">
                  <textarea
                    onChange={this.update('description')}
                    className="project-input description"
                    value={this.state.description}
                  >
                  </textarea>
                </div>
              </li>

              <li>
                {this.renderLabelSection("Category")}
                <div className="project-form-input-section">
                  <select
                    onChange={this.update('category')}
                    className="project-input"
                    value={this.state.category}
                  >
                    {
                      Object.keys(this.props.categories).map(
                        (id) => {
                          return (
                            <option
                              key={id}
                              value={this.props.categories[id]}
                            >
                              {this.props.categories[id]}
                            </option>
                          );
                        }
                      )
                    }
                  </select>
                </div>
              </li>

              <li>
                {this.renderLabelSection("Funding end date")}
                {this.renderEndDateInput()}
              </li>

              <li>
                {this.renderLabelSection("Funding goal ($)")}
                <div className="project-form-input-section">
                  <input
                    type="text"
                    value={this.state.funding_amount}
                    onChange={this.update('funding_amount')}
                    className="project-input"
                  />
                <p>
                  Funding on Kickstarter is all-or-nothing. It’s okay
                  to raise more than your goal, but if your goal isn’t
                  met, no money will be collected. Your goal should
                  reflect the minimum amount of funds you need to
                  complete your project and send out rewards, and
                  include a buffer for payments processing fees.
                </p>
                <p>
                  If your project is successfully funded, the following
                  fees will be collected from your funding total:
                  Quikstarter’s 5% fee, and payment processing fees
                  (between 3% and 5%). If funding isn’t successful,
                  there are no fees.
                </p>
                </div>
              </li>

              <li>
                <div className="project-form-label-section">
                </div>
                <div className="project-form-input-section">
                  <input
                    type="submit"
                    value={
                      this.props.formType === 'new'
                      ? 'Create project'
                      : 'Update project'
                    }
                  />
                </div>
              </li>
            </ul>

          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
