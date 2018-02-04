import { combineReducers } from 'redux';
import projectsErrorsReducer from './projects_errors_reducer';
import sessionErrorsReducer from './session_errors_reducer';

const errorsReducer = combineReducers({
  projects: projectsErrorsReducer,
  session: sessionErrorsReducer
});

export default errorsReducer;
