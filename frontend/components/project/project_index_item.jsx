import React from 'react';

const ProjectIndexItem = ({ project }) => {
  return (
    <div>
      <img src={project.image_url}></img>
      <span>{project.title}</span>
      <span>{project.funding_amount}</span>
    </div>
  );
};

export default ProjectIndexItem;
