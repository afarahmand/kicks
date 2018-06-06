import React from 'react';
import { Link } from 'react-router-dom';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  render() {
    if(Object.keys(this.props.projects).length === 0) {
      return null;
    }

    return (
      <section className="project-index">
        <ul>
          {
            Object.keys(this.props.projects).map(
              id => (
              <li key={id}>
                <ProjectIndexItem
                  project={this.props.projects[id]}
                />
              </li>
            ))
          }
        </ul>
      </section>
    );
  }
}

export default ProjectIndex;
