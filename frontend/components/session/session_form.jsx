import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

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

  navLink() {
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
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  renderButtonText() {
    if (this.props.formType === "Sign up") {
      return "Create account";
    } else {
      return "Log me in!";
    }
  }

  render() {
    return (
        <div className="signin-form-container">
          {this.navLink()}
          <form className="signin-form" onSubmit={this.handleSubmit}>
            <div className=""></div>
            <div className="error-display">
              {this.renderErrors()}
            </div>

            <label>Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="signin-input"
              />
            </label>

            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="signin-input"
              />
            </label>

            {this.renderConditionalFormElements()}

            <input type="submit" value={this.renderButtonText()}/>
          </form>
        </div>
    );
  }
}

export default withRouter(SessionForm);
