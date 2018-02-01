import { connect } from 'react-redux';
import sessionForm from './session_form';
import { signin, signout, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  signedIn: state.session.currentUser !== null,
  errors: state.errors.session,
  formType: ownProps.location.pathname === '/signup' ? 'Sign up' : 'Sign in'
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.location.pathname === 'signup' ? signin : signup;

  return {
    signout: () => dispatch(signout()),
    processForm: () => dispatch(action)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);
