import React from 'react';
import RewardIndexItem from './reward_index_item';

const RewardIndex = ({ rewards }) => {
  return (
    rewards.map((reward, idx) => (
      <RewardIndexItem key={idx} reward={reward}/>
    ))
  );
};

export default RewardIndex;
