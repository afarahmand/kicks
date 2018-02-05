import { connect } from 'react-redux';

import projectForm from './project_form';
import {
  fetchProject,
  createProject,
  updateProject
} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    categories: state.entities.categories,
    errors: state.errors.projects,
    formType: ownProps.location.pathname === '/projects/new' ? 'new' : 'update',
    signedIn: state.session.currentUser !== null
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/projects/new') {
    return {
      processForm: project => dispatch(createProject(project))
    };
  } else {
    console.log("map dispatch");
    console.log(ownProps.match.params);
    console.log(ownProps.match.params.keys);
    return {
      fetchProject: id => dispatch(fetchProject(id)),
      processForm: project => dispatch(updateProject(project))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(projectForm);
