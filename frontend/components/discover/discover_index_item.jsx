import React from 'react';
import { Link } from 'react-router-dom';
import { daysRemainingUntilEnd } from '../../utils/date_util';

const DiscoverIndexItem = ({ project }) => {
  let linkHref = `/projects/${project.id}`;
  return (
    <div className="discover-item">
      <div className="discover-item-top">
        <Link to={linkHref}>
          <img src={project.image_url}></img>
        </Link>
      </div>
      <div className="discover-item-detail discover-item-middle">
        <Link to={linkHref}>
          <span className="project-title">{project.title}</span>
        </Link>
      </div>
      <div className="separating-bar"></div>
      <div className="discover-item-bottom">
        <span className="goal">
          ${project.funding_amount} funding goal
        </span>
        <div>
          <span className="days-to-go">
            {daysRemainingUntilEnd(project.funding_end_date)}
          </span>
            days to go
        </div>
      </div>
    </div>
  );
};

export default DiscoverIndexItem;

// <div>{project.funding_end_date}days to go</div>
// <span className="project-creator">{project.creator}</span>
// <div>progress bar</div>
// <div>money pledged</div>
// <div>percent funded</div>
