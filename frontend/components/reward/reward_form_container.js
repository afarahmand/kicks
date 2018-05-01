import { connect } from 'react-redux';

import RewardForm from './reward_form';
import {
  fetchAllProjectRewards,
  createReward,
  updateReward,
  deleteReward
} from '../../actions/reward_actions';

const mapStateToProps = (state, ownProps) => {
  let reward = {
    title: "",
    description: "",
    amount: 0
  };

  let formType = 'new';

  if (ownProps.match.path == "/projects/:projectId/rewards/:rewardId/edit") {
    reward = state.entities.rewards[ownProps.match.params.rewardId];
    formType = 'update';
  }

  return {
    currentUser: state.session.currentUser,
    errors: state.errors.rewards,
    formType: ownProps.location.pathname.includes('/rewards/new')
      ? 'new' : 'update',
    reward
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const projectId = ownProps.match.params.projectId;

  if (ownProps.location.pathname.includes('/rewards/new')) {
    return {
      fetchRewards: () => dispatch(fetchAllProjectRewards(projectId)),
      processForm: reward => dispatch(createReward(reward))
    };
  } else {
    return {
      fetchRewards: () => dispatch(fetchAllProjectRewards(projectId)),
      processForm: reward => dispatch(updateReward(reward))
    };
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(RewardForm);
