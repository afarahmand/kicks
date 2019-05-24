import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShowPage from './user_show_page';

const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.match.params.userId];
  let backedProjects = [];

  if (user === undefined) { return {}; }

  // find backed projects
  Object.keys(state.entities.backings).forEach(backingId => {
    // User's backing
    if (state.entities.backings[backingId].user_id === user.id) {
      let userRewardId = state.entities.backings[backingId].reward_id;
      let userProjectId = state.entities.rewards[userRewardId].project_id;

      backedProjects.push(state.entities.projects[userProjectId]);
    }
  });

  return {
    creator: user,
    currentUser: state.session.currentUser,
    backedProjects: backedProjects
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShowPage);
