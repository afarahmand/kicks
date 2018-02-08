export const fetchDiscoveryResults = (category, sort) => (
  $.ajax({
    url: '/api/project_discovery',
    method: 'GET',
    data: {
      discovery: {
        category: category,
        sort: sort
      }
    }
  })
);

export const fetchSearchResults = searchQuery => (
  $.ajax({
    url: '/api/project_searches',
    method: 'GET',
    data: {
      search: {
        query: searchQuery
      }
    }
  })
);

export const fetchProjects = () => (
  $.ajax({
    url: '/api/projects',
    method: 'GET'
  })
);

export const fetchProject = id => (
  $.ajax({
    url: `api/projects/${id}`,
    method: 'GET'
  })
);

export const createProject = project => (
  $.ajax({
    url: 'api/projects',
    method: 'POST',
    data: { project }
  })
);

export const updateProject = project => (
  $.ajax({
    url: `api/projects/${project.id}`,
    method: 'PATCH',
    data: { project }
  })
);

export const deleteProject = id => (
  $.ajax({
    url: `api/projects/${id}`,
    method: 'DELETE'
  })
);
