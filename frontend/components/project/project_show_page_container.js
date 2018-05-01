import { connect } from 'react-redux';
import { fetchProject, deleteProject } from '../../actions/project_actions';
import ProjectShowPage from './project_show_page';

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.match.params.projectId];
  let projectRewards = [];

  if (project === undefined) { return {}; }

  Object.keys(state.entities.rewards).forEach(rewardId => {
    if (state.entities.rewards[rewardId].project_id === project.id) {
      projectRewards.push(state.entities.rewards[rewardId]);
    }
  });

  return {
    creator: state.entities.users[project.user_id],
    currentUser: state.session.currentUser,
    project: project,
    projectRewards: projectRewards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  // createBacking: () => dispatch(createBacking()),
  fetchProject: id => dispatch(fetchProject(id)),
  deleteProject: () => dispatch(deleteProject(ownProps.match.params.projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShowPage);
