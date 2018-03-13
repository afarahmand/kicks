import { combineReducers } from 'redux';
import categoriesReducer from './categories_reducer';
import projectsReducer from './projects_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  categories: categoriesReducer,
  projects: projectsReducer,
  users: usersReducer
});

export default entitiesReducer;
