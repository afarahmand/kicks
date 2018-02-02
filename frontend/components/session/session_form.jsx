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
      this.props.clearSessionErrors();
      this.setState({
        name: "",
        email: "",
        password: ""
      });
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

  renderButtonText() {
    if (this.props.formType === "Sign up") {
      return "Create account";
    } else {
      return "Log me in!";
    }
  }

  renderDemoSigninButton() {
    if (this.props.formType === 'Sign in') {
      return (
        <button id="demo" name="demo" onClick={this.demoSignin}>
          Sign In as Demo User
        </button>
      );
    }
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

  renderNameInput() {
    if (this.props.formType === 'Sign up') {
      return (
        <input
          placeholder="Name"
          type="text"
          value={this.state.name}
          onChange={this.update('name')}
          className="signin-input"
        />
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

  update(field) {
    return e => this.setState({
      // [field]: e.currentTarget.value === "" ? field : e.currentTarget.value
      [field]: e.currentTarget.value
    });
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
                <input
                  placeholder="Email"
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="signin-input"
                />
              </li>

              <li>
                <input
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="signin-input"
                />
              </li>

              <li>
                {this.renderNameInput()}
              </li>

              <li>
                <input type="submit" value={this.renderButtonText()}/>
              </li>

              {this.renderDemoSigninButton()}
            </ul>

          </form>
        </div>
    );
  }
}

export default withRouter(SessionForm);
