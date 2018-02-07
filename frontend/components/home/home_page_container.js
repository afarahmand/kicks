import { connect } from 'react-redux';
import HomePage from './home_page';
import { fetchProjects } from '../../actions/project_actions';

const mapStateToProps = state => ({
  categories: state.entities.categories,
  projects: state.entities.projects
});

const mapDispatchToProps = dispatch => ({
  fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
