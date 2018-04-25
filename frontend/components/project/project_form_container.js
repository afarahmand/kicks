import { connect } from 'react-redux';
import { formatAsYYYYMMDD } from '../../utils/date_util';

import ProjectForm from './project_form';
import {
  fetchProject,
  createProject,
  updateProject
} from '../../actions/project_actions';

const mapStateToProps = (state, ownProps) => {
  let project = {
    title: "",
    image_url: "https://i.imgur.com/wB6sCUA.jpg",
    short_blurb: "",
    description: "",
    category: "Art",
    funding_amount: 0,
    funding_end_date: formatAsYYYYMMDD(Date())
  };
  let formType = 'new';

  if (ownProps.match.path == "/projects/:projectId/edit") {
    project = state.entities.projects[ownProps.match.params.projectId];
    formType = 'update';
  }

  return {
    categories: state.entities.categories,
    currentUser: state.session.currentUser,
    errors: state.errors.projects,
    formType: ownProps.location.pathname === '/projects/new' ? 'new' : 'update',
    project
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.location.pathname === '/projects/new') {
    return {
      processForm: project => dispatch(createProject(project))
    };
  } else {
    return {
      fetchProject: id => dispatch(fetchProject(id)),
      processForm: project => dispatch(updateProject(project))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);
