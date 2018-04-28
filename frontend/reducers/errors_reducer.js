import { combineReducers } from 'redux';
import projectsErrorsReducer from './projects_errors_reducer';
import rewardsErrorsReducer from './rewards_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
  projects: projectsErrorsReducer,
  rewards: rewardsErrorsReducer,
  session: sessionErrorsReducer
});

export default errorsReducer;
