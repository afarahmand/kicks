import React from 'react';
import StatBar from './stat_bar';
import ProjectIndexContainer from '../project/project_index_container';

const HomePage = props => {
  return (
    <div>
      <StatBar/>
      <ProjectIndexContainer/>
      <hr></hr>
    </div>
  );
};

export default HomePage;
