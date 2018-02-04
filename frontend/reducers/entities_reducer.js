import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';

const entitiesReducer = combineReducers({
  projects: projectsReducer
});

export default entitiesReducer;
