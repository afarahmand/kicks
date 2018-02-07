import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

const ProjectIndexDisplay = ({ projects }) => {
  return (
    <section className="project-index-display">
      <ul>
      {
        Object.keys(projects).map(id => (
          <ProjectIndexItem key={id} project={projects[id]} />
        ))
      }
      </ul>
    </section>
  );
};

export default ProjectIndexDisplay;
