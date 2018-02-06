import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({component: Component, path, signedIn, exact}) => (
  <Route path={path} exact={exact} render={(props) => (
    !signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )}/>
);

const Protected = ({ component: Component, path, signedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
     signedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/signin" />
    )
  )} />
);

const mapStateToProps = state => {
  return {signedIn: Boolean(state.session.currentUser)};
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));
