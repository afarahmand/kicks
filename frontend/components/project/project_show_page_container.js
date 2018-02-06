import { connect } from 'react-redux';
import { fetchProject } from '../../actions/project_actions';
import ProjectShowPage from './project_show_page';

const mapStateToProps = (state, ownProps) => {
  return {
    project: state.entities.projects[ownProps.match.params.projectId]
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchProject: id => dispatch(fetchProject(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShowPage);
