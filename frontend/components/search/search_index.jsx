import React from 'react';
import { Link } from 'react-router-dom';
import SearchIndexItem from './search_index_item';

const SearchIndex = ({ projects }) => {
  return (
    <section className="project-index-display search-index">
      <ul>
      {
        Object.keys(projects).map(id => (
          <li key={id}>
            <SearchIndexItem key={id} project={projects[id]} />
          </li>
        ))
      }
      </ul>
    </section>
  );
};

export default SearchIndex;
