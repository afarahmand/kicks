import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShowPage from './user_show_page';

const mapStateToProps = (state, ownProps) => {
  let user = state.entities.users[ownProps.match.params.userId];
  let backedProjects = [];
  let createdProjects = [];

  if (user === undefined) { return {}; }

  // find backed projects
  Object.keys(state.entities.backings).forEach(backingId => {
    // User's backing
    if (state.entities.backings[backingId].user_id === user.id) {
      let userRewardId = state.entities.backings[backingId].reward_id;

      if (state.entities.rewards[userRewardId]) {
        let userProjectId = state.entities.rewards[userRewardId].project_id;
        backedProjects.push(state.entities.projects[userProjectId]);
      }
    }
  });

  Object.keys(state.entities.projects).forEach(projectId => {
    if (state.entities.projects[projectId].user_id === user.id) {
      createdProjects.push(state.entities.projects[projectId]);
    }
  });

  return {
    creator: user,
    currentUser: state.session.currentUser,
    backedProjects: backedProjects,
    createdProjects: createdProjects
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchUser: id => dispatch(fetchUser(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShowPage);
