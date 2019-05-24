import { connect } from 'react-redux';
import { createBacking } from '../../actions/backing_actions';
import { fetchProject, deleteProject } from '../../actions/project_actions';
import ProjectShowPage from './project_show_page';

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.match.params.projectId];
  let projectRewards = [];
  let projectRewardIds = {};
  let alreadyBacked = false;

  if (project === undefined) { return {}; }

  Object.keys(state.entities.rewards).forEach(rewardId => {
    if (state.entities.rewards[rewardId].project_id === project.id) {
      projectRewards.push(state.entities.rewards[rewardId]);
      projectRewardIds[rewardId] = true;
    }
  });

  if (state.session.currentUser) {
    projectRewardIds = Object.keys(projectRewardIds);
    Object.keys(state.entities.backings).forEach(backingId => {
      if ((projectRewardIds.includes(state.entities.backings[backingId].reward_id.toString())) &&
        (state.entities.backings[backingId].user_id === state.session.currentUser.id)) {
        alreadyBacked = true;
      }
    });
  }

  if (alreadyBacked) {
    projectRewards = [];
  }

  return {
    alreadyBacked: alreadyBacked,
    creator: state.entities.users[project.user_id],
    currentUser: state.session.currentUser,
    project: project,
    projectRewards: projectRewards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createBacking: backing => dispatch(createBacking(backing)),
  fetchProject: id => dispatch(fetchProject(id)),
  deleteProject: () => dispatch(deleteProject(ownProps.match.params.projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShowPage);
