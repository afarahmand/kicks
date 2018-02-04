import * as ProjectApiUtil from '../utils/project_api_util';

export const RECEIVE_ALL_PROJECTS = "RECEIVE_ALL_PROJECTS";
export const RECEIVE_PROJECT = "RECEIVE_PROJECT";
export const REMOVE_PROJECT = "REMOVE_PROJECT";
export const RECEIVE_PROJECT_ERRORS = "RECEIVE_PROJECT_ERRORS";

const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

const removeProject = projectId => ({
  type: REMOVE_PROJECT,
  projectId
});

const receiveProjectErrors = errors => ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
});

export const fetchProjects = () => dispatch => (
  ProjectApiUtil.fetchProjects().then(
    projects => dispatch(receiveAllProjects(projects)),
    err => dispatch(receiveProjectErrors(err.responseJSON))
  )
);

export const fetchProject = projectId => dispatch => (
  ProjectApiUtil.fetchProject(projectId).then(
    project => dispatch(receiveProject(project)),
    err => dispatch(receiveProjectErrors(err))
  )
);

export const createProject = project => dispatch => (
  ProjectApiUtil.createProject(project).then(
    dbProject => dispatch(receiveProject(dbProject)),
    err => dispatch(receiveProjectErrors(err))
  )
);

export const updateProject = project => dispatch => (
  ProjectApiUtil.updateProject(project).then(
    dbProject => dispatch(receiveProject(dbProject)),
    err => dispatch(receiveProjectErrors(err))
  )
);

export const deleteProject = projectId => dispatch => (
  ProjectApiUtil.deleteProject(projectId).then(
    dbProject => dispatch(removeProject(dbProject.id)),
    err => dispatch(receiveProjectErrors(err))
  )
);
