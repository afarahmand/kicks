import React from 'react';
import { Link } from 'react-router-dom';
import DiscoverIndexItem from './discover_index_item';

const DiscoverIndex = ({ projects }) => {
  return (
    <section className="project-index-display">
      <ul>
      {
        Object.keys(projects).map(id => (
          <li key={id}>
            <DiscoverIndexItem key={id} project={projects[id]} />
          </li>
        ))
      }
      </ul>
    </section>
  );
};

export default DiscoverIndex;
