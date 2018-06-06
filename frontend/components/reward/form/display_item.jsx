import React from 'react';
import { Link } from 'react-router-dom';

const DisplayItem = ({ reward }) => {
  return (
    <Link to='' className="reward">
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

export default DisplayItem;
