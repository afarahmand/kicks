export const createBacking = backing => (
  $.ajax({
    url: `api/projects/${backing.projectId}/rewards/${backing.rewardId}/backings`,
    method: 'POST',
    data: {}
  })
);
