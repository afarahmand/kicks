import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIndexDisplayItem = ({ project }) => {
  let linkHref = `/projects/${project.id}`;
  return (
    <li>
      <Link to={linkHref}>
        <img src={project.image_url}></img>
        <span className="project-title">{project.title}</span>
        <span className="project-creator">{project.creator}</span>
        <div>progress bar</div>
        <div>money pledged</div>
        <div>percent funded</div>
        <div>days to go</div>
        <div>{project.category}</div>
      </Link>
    </li>
  );
};

export default ProjectIndexDisplayItem;
