import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.loggedIn) {
  //     this.props.history.push('/');
  //   }
  // }

  handleSubmit(e) {
    console.log("handleSubmit works!");
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  nameInput() {
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
    }
  }

  navLink() {
    if (this.props.formType === 'Sign in') {
      return (
        <span>
           New to Quickstarter? <Link to="/signup">Sign up!</Link>
        </span>
      );
    } else {
      return (
        <span>
          Have an account? <Link to="/signin">Sign in</Link>
        </span>
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

  render() {
    return (
      <div className="signin-form-container">
        {this.navLink()}
        <form className="signin-form" onSubmit={this.handleSubmit}>
          <div className="error-display">
            {this.renderErrors()}
          </div>
          {this.nameInput()}

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

          <input type="submit" value={this.props.formType}/>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
