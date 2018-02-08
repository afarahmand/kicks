import React from 'react';
import { Link } from 'react-router-dom';

const SearchIndexItem = ({ project }) => {
  let linkHref = `/projects/${project.id}`;
  return (
    <div>
      <Link to={linkHref}>
        <div className="search-result">
          <img src={project.image_url}></img>
          <div className="project-detail">
            <span className="project-title">
              {project.title}
            </span>
            <span className="project-funding">
              ${project.funding_amount} goal
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SearchIndexItem;




// <Link to={linkHref}>
//   <img src={project.image_url}></img>
//   <span className="project-title">{project.title}</span>
//   <span className="project-creator">{project.creator}</span>
//   <div>progress bar</div>
//   <div>money pledged</div>
//   <div>percent funded</div>
//   <div>days to go</div>
//   <div>{project.category}</div>
// </Link>
