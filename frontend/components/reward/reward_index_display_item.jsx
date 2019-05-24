import React from 'react';
import { Link } from 'react-router-dom';

const RewardIndexDisplayItem = ({ reward, createBacking }) => {
  const backing = { rewardId: reward.id, projectId: reward.project_id };
  const href = `/projects/${reward.project_id}`;

  return (
    <Link
      to={href}
      onClick={() => createBacking(backing)}
      className="reward"
    >
        <span className="reward-body-content amount">
          Pledge ${reward.amount}
        </span>

        <span className="reward-body-content title">
          {reward.title}
        </span>

        <p className="reward-body-content description">
          {reward.description}
        </p>

        <div className="reward-hover-overlay">
          Select this reward
        </div>
    </Link>
  );
};

export default RewardIndexDisplayItem;
