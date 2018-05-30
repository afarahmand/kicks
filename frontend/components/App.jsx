import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../utils/route_util';

// import GreetingContainer from './greeting/greeting_container';
import DiscoverContainer from './discover/discover_container';
import HomePageContainer from './home/home_page_container';
import NavbarContainer from './navbar/navbar_container';

import ProjectFormContainer from './project/project_form_container';
import ProjectShowPageContainer from './project/project_show_page_container';
import RewardFormContainer from './reward/form/reward_form_container';
import SearchPage from './search/search_page';
import SessionFormContainer from './session/session_form_container';

const App = () => (
  <div>
    <header>
      <NavbarContainer/>
    </header>

    <Switch>
      <AuthRoute exact path="/signin" component={SessionFormContainer} />
      <AuthRoute exact path="/signup" component={SessionFormContainer} />
      <Route path="/discover" component={DiscoverContainer} />
      <Route path="/search" component={SearchPage} />
      <ProtectedRoute
        path="/projects/new"
        component={ProjectFormContainer}
      />
      <ProtectedRoute
        path="/projects/:projectId/edit"
        component={ProjectFormContainer}
      />
      <ProtectedRoute
        path="/projects/:projectId/rewards/edit"
        component={RewardFormContainer}
      />
      <Route
        exact
        path="/projects/:projectId"
        component={ProjectShowPageContainer}
      />
      <Route path="/" component={HomePageContainer} />
    </Switch>
  </div>
);

export default App;
