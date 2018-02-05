import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

import GreetingContainer from './greeting/greeting_container';
import ProjectFormContainer from './project/project_form_container';
import SessionFormContainer from './session/session_form_container';

const App = (store) => (
  <div>
    <header>
      <h1>Quikstarter: React is rendering App</h1>
      <GreetingContainer/>
    </header>

    <Switch>
      <AuthRoute exact path="/signin" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/projects/new" component={ProjectFormContainer} />
      // this.props.history.push('/');
      <Route path="/"/>
    </Switch>
  </div>
);

export default App;
