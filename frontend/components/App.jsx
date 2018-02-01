import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session/session_form_container';
import { Route } from 'react-router';

// <GreetingContainer/>

const App = () => (
  <div>
    <header>
      <h1>Quickstarter: React is rendering App</h1>
    </header>

    <Route path="/signin" component={SessionFormContainer} />
    <Route path="/signup" component={SessionFormContainer} />
  </div>
);

export default App;
