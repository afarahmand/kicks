import { combineReducers } from 'redux';
import backingsReducer from './backings_reducer';
import categoriesReducer from './categories_reducer';
import projectsReducer from './projects_reducer';
import rewardsReducer from './rewards_reducer';
import usersReducer from './users_reducer';

const entitiesReducer = combineReducers({
  backings: backingsReducer,
  categories: categoriesReducer,
  projects: projectsReducer,
  rewards: rewardsReducer,
  users: usersReducer
});

export default entitiesReducer;
