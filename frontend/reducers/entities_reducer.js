import { combineReducers } from 'redux';
import categoriesReducer from './categories_reducer';
import projectsReducer from './projects_reducer';

const entitiesReducer = combineReducers({
  categories: categoriesReducer,
  projects: projectsReducer
});

export default entitiesReducer;
