import React from 'react';
import RewardIndexDisplayItem from './reward_index_display_item';

const RewardIndexDisplay = ({ rewards, createBacking }) => {
  let sortedByAmount = rewards.slice().sort(function(reward1, reward2) {
    const one = reward1.amount;
    const two = reward2.amount;
    if (one < two) {
      return -1;
    } else if (one > two) {
      return 1;
    } else {
      return 0;
    }
  });

  return (
    sortedByAmount.map((reward, idx) => (
      <RewardIndexDisplayItem
        key={idx}
        reward={reward}
        createBacking={createBacking}
      />
    ))
  );
};

export default RewardIndexDisplay;
