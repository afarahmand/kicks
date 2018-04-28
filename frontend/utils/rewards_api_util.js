export const createReward = reward => (
  $.ajax({
    url: `api/projects/${reward.projectId}/rewards`,
    method: 'POST',
    data: { reward }
  })
);

export const updateReward = reward => (
  $.ajax({
    url: `api/projects/${reward.projectId}/rewards/${reward.id}`,
    method: 'PATCH',
    data: { reward }
  })
);

export const deleteReward = reward => (
  $.ajax({
    url: `api/projects/${reward.projectId}/rewards/${reward.id}`,
    method: 'DELETE'
  })
);
