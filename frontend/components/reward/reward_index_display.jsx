import React from 'react';
import RewardIndexDisplayItem from './reward_index_display_item';

const RewardIndexDisplay = ({ rewards }) => {
  let sortedByAmount = rewards.slice().sort(function(x, y) {
    return x.amount > y.amount;
  });

  return (
    sortedByAmount.map((reward, idx) => (
      <RewardIndexDisplayItem key={idx} reward={reward}/>
    ))
  );
};

export default RewardIndexDisplay;
