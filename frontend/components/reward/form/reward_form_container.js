import { connect } from 'react-redux';

import RewardForm from './reward_form';
import { fetchProject } from '../../../actions/project_actions';
import {
  createReward, updateReward, deleteReward
} from '../../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => {
  let project = state.entities.projects[ownProps.match.params.projectId];
  let projectRewards = [];
  let reward;

  Object.keys(state.entities.rewards).forEach(rewardId => {
    reward = state.entities.rewards[rewardId];

    if (reward["project_id"] == ownProps.match.params.projectId) {
      projectRewards.push(reward);
    }
  });

  return {
    currentUser: state.session.currentUser,
    errors: state.errors.rewards,
    project: project,
    projectRewards: projectRewards
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const projectId = ownProps.match.params.projectId;

  return {
    createReward: (reward) => dispatch(createReward(reward)),
    deleteReward: (reward) => dispatch(deleteReward(reward)),
    fetchProject: () => dispatch(fetchProject(projectId)),
    updateReward: (reward) => dispatch(updateReward(reward))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardForm);
