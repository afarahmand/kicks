import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexDisplayItem from './project_index_display_item';

const ProjectIndexDisplay = ({ projects }) => {
  return (
    <section className="project-index-display">
      <ul>
      {
        Object.keys(projects).map((id, idx) => (
          <li key={id}>
            <ProjectIndexDisplayItem key={id} project={projects[id]} />
          </li>
        ))
      }
      </ul>
    </section>
  );
};

export default ProjectIndexDisplay;
