export const createReward = reward => (
  $.ajax({
    url: `api/projects/${reward.project_id}/rewards`,
    method: 'POST',
    data: { reward }
  })
);

export const updateReward = reward => (
  $.ajax({
    url: `api/projects/${reward.project_id}/rewards/${reward.id}`,
    method: 'PATCH',
    data: { reward }
  })
);

export const deleteReward = reward => (
  $.ajax({
    url: `api/projects/${reward.project_id}/rewards/${reward.id}`,
    method: 'DELETE'
  })
);
