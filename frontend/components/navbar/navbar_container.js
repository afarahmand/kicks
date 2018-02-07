import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
