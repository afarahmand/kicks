import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      image_url: "https://i.imgur.com/wB6sCUA.jpg",
      short_blurb: "",
      description: "",
      category: "Art",
      funding_amount: 0,
      funding_end_date: Date.now()
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // This function needs changing?
  handleSubmit(e) {
    e.preventDefault();
    let project = Object.assign({}, this.state);
    this.props.processForm(project);
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

  update(field) {
    return e => this.setState({
      // [field]: e.currentTarget.value === "" ? field : e.currentTarget.value
      [field]: e.currentTarget.value
    });
  }

  // <option value="volvo">Volvo</option>
  // <option value="saab">Saab</option>
  // <option value="fiat">Fiat</option>
  // <option value="audi">Audi</option>
  // <img width="50px" height="50px" src={this.state.image_url}></img>
  // <img src={this.state.image_url}></img>

  render() {
    return (
      <div className="project-form-container">

        <form className="project-form" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <ul>
            <li>
              <div className="project-form-label-section">
                <span className="project-field-label">
                  Project title
                </span>
              </div>
              <div className="project-form-input-section">
                <input
                  type="text"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="project-input"
                />
              </div>
            </li>

            <li>
              <div className="project-form-label-section">
                <span className="project-field-label">
                  Short blurb
                </span>
              </div>
              <div className="project-form-input-section">
                <textarea
                  maxLength="135"
                  onChange={this.update('short_blurb')}
                  className="project-input"
                  value={this.state.short_blurb}
                >
                </textarea>
              </div>
            </li>

            <li>
              <div className="project-form-label-section">
                <span className="project-field-label">
                  Description
                </span>
              </div>
              <div className="project-form-input-section">
                <textarea
                  onChange={this.update('description')}
                  className="project-input"
                  value={this.state.description}
                >
                </textarea>
              </div>
            </li>

            <li>
              <div className="project-form-label-section">
                <span className="project-field-label">
                  Category
                </span>
              </div>
              <div className="project-form-input-section">
                <select
                  onChange={this.update('category')}
                  className="project-input"
                >
                  {
                    Object.keys(this.props.categories).map(
                      (id) => {
                        if (this.state.category === this.props.categories[id]) {
                          return (
                            <option
                              key={id}
                              value={this.props.categories[id]}
                              selected
                            >
                              {this.props.categories[id]}
                            </option>
                          );
                        } else {
                          return (
                            <option
                              key={id}
                              value={this.props.categories[id]}
                            >
                              {this.props.categories[id]}
                            </option>
                          );
                        }
                      }
                    )
                  }
                </select>
              </div>
            </li>

            <li>
              <div className="project-form-label-section">
                <span className="project-field-label">
                  Funding end date
                </span>
              </div>
              <div className="project-form-input-section">
                <input
                  type="date"
                  value={this.state.funding_end_date}
                  onChange={this.update('funding_end_date')}
                  className="project-input"
                />
              </div>
            </li>

            <li>
              <div className="project-form-label-section">
                <span className="project-field-label">
                  Funding goal
                </span>
              </div>
              <div className="project-form-input-section">
                <input
                  type="text"
                  value={this.state.funding_amount}
                  onChange={this.update('funding_amount')}
                  className="project-input"
                />
              </div>
            </li>

            <li>
              <input
                type="submit"
                value={
                  this.props.formType === 'new'
                  ? 'Create project'
                  : 'Update project'
                }
              />
            </li>
          </ul>

        </form>
      </div>
    );
  }
}

export default withRouter(ProjectForm);
