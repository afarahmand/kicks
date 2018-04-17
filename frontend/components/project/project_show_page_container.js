import { connect } from 'react-redux';
import { fetchProject, deleteProject } from '../../actions/project_actions';
import ProjectShowPage from './project_show_page';

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.match.params.projectId];

  if (project === undefined) { return {}; }

  return {
    creator: state.entities.users[project.user_id],
    currentUser: state.session.currentUser,
    project: project
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProject: id => dispatch(fetchProject(id)),
  deleteProject: () => dispatch(deleteProject(ownProps.match.params.projectId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShowPage);
