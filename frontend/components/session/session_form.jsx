import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   name: "Name",
    //   email: "Email",
    //   password: "Password"
    // };

    this.state = {
      name: "",
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoSignin = this.demoSignin.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.formType !== this.props.formType) {
      // this.props.clearSessionErrors();
    }
    // if (nextProps.loggedIn) {
    //   this.props.history.push('/');
    // }
  }

  demoSignin(e) {
    e.preventDefault();
    const demoUser = {
      name: "Demo_User",
      email: "demo@quickstarter.com",
      password: "password"
    };
    this.props.processForm(demoUser);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderConditionalFormElements() {
    if (this.props.formType === 'Sign up') {
      return (
        <label>Name:
          <input
            type="text"
            value={this.state.name}
            onChange={this.update('name')}
            className="signin-input"
          />
        </label>
      );
    } else {
      return (
        <button id="demo" name="demo" onClick={this.demoSignin}>
          Sign In as Demo User
        </button>
      );
    }
  }

  renderNavLink() {
    if (this.props.formType === 'Sign in') {
      return (
        <div id="div-above-signin-form" className="signin-form">
           New to Quickstarter? <Link to="/signup">Sign up!</Link>
       </div>
      );
    } else {
      return (
        <div id="div-above-signin-form" className="signin-form">
          Have an account? <Link to="/signin">Sign in</Link>
        </div>
      );
    }
  }

  update(field) {
    return e => this.setState({
      // [field]: e.currentTarget.value === "" ? field : e.currentTarget.value
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <div className="error-display">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderButtonText() {
    if (this.props.formType === "Sign up") {
      return "Create account";
    } else {
      return "Log me in!";
    }
  }

  renderTopText() {
    let text = "Sign in";
    if (this.props.formType === "Sign up") {
      text = "Sign up";
    }
    return(
      <div className="signin-form-top-text">
        <h2>{text}</h2>
      </div>
    );
  }

  render() {
    return (
        <div className="signin-form-container">
          {this.renderNavLink()}
          <form className="signin-form" onSubmit={this.handleSubmit}>
            {this.renderTopText()}
            {this.renderErrors()}

            <ul>
              <li>
                <label>Email:
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="signin-input"
                  />
                </label>
              </li>

              <li>
                <label>Password:
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="signin-input"
                  />
                </label>
              </li>

              <li>
                {this.renderConditionalFormElements()}
              </li>
            </ul>

            <input type="submit" value={this.renderButtonText()}/>
          </form>
        </div>
    );
  }
}

export default withRouter(SessionForm);
