import React from 'react';
import RewardIndexDisplayItem from './reward_index_display_item';

const RewardIndexDisplay = ({ rewards }) => {
  return (
    rewards.map((reward, idx) => (
      <RewardIndexDisplayItem key={idx} reward={reward}/>
    ))
  );
};

export default RewardIndexDisplay;
