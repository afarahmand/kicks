import React from 'react';
import { Link } from 'react-router-dom';

const DiscoverIndexItem = ({ project }) => {
  let linkHref = `/projects/${project.id}`;
  return (
    <div className="discover-item">
      <Link to={linkHref}>
        <img src={project.image_url}></img>
      </Link>
      <div className="discover-item-detail">
        <Link to={linkHref}>
          <span className="project-title">{project.title}</span>
        </Link>
        <div className="category-link">
          <Link to="/discover">
            {project.category}
          </Link>
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
