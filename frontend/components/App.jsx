import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route, Switch, Redirect } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

// <GreetingContainer/>

const App = () => (
  <div>
    <header>
      <h1>Quickstarter: React is rendering App</h1>
    </header>

    <Switch>
      <AuthRoute exact path="/signin" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      // this.props.history.push('/');
      <Route path="/"/>
    </Switch>
  </div>
);

export default App;
