import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

// import GreetingContainer from './greeting/greeting_container';
import HomePageContainer from './home/home_page_container';
import NavbarContainer from './navbar/navbar_container';
import ProjectFormContainer from './project/project_form_container';
import ProjectIndexContainer from './project/project_index_container';
import ProjectShowPageContainer from './project/project_show_page_container';
// import SearchPage from './search/search_page';
import SessionFormContainer from './session/session_form_container';

const App = (store) => (
  <div>
    <header>
      <NavbarContainer/>
    </header>

    <Switch>
      <AuthRoute exact path="/signin" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <ProtectedRoute exact path="/projects/new" component={ProjectFormContainer} />

      <Route path="/projects/:projectId" component={ProjectShowPageContainer} />
      <Route path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;

// <Route
//   path="/search?:searchString"
//   component={SearchPage}
// />
