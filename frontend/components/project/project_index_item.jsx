import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexItem = ({ project }) => {
  let linkHref = `/projects/${project.id}`;
  return (
    <div>
      <Link to={linkHref}>
        <img src={project.image_url}></img>
      </Link>
      <div className="project-detail">
        <Link to={linkHref}>
          {project.title}
        </Link>
        <span className="project-funding">
          ${project.funding_amount} goal
        </span>
      </div>
    </div>
  );
};

export default ProjectIndexItem;
