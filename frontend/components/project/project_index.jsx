import React from 'react';
import ProjectIndexItem from './project_index_item';

class ProjectIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenCategory: this.props.categories[1],
      displayedProjects: []
    };
  }

  componentDidMount() {
    this.props.fetchProjects();
  }

  // if(Object.keys(this.props.projects).length == 0)
  // if (!this.props.projects)

  render() {
    if(Object.keys(this.props.projects).length === 0) {
      console.log("!!!");
      return null;
    }

    console.log("Should have data pulled now");
    console.log(this.props.projects);

    // Determine which 5 projects will become displayedProjects
    // based on selected tabs

    for (let i=0; i<5; i++) {
      this.state.displayedProjects.push(this.props.projects[i]);
    }

    console.log(this.state.displayedProjects);

    return (
      <section>
        <div className="tab-bar">
          <ul>
            {
              Object.keys(this.props.categories).map(id => (
                <li key={id}>
                  {this.props.categories[id]}
                </li>
              ))
            }
          </ul>
        </div>
        <div className="title-bar">
        </div>
        <div className="content">
          <main className="featured-content left-content">
            <span className="content-header-text">Featured</span>
            <ProjectIndexItem project={this.state.displayedProjects[0]} />
          </main>
          <aside className="right-content">
            <div className="content-header-text">
            </div>
            <div className="project-list">
              <ul>
                {
                  Object.keys(this.state.displayedProjects).slice(1).map(
                    id => (
                    <li key={id}>
                      <ProjectIndexItem
                        project={this.state.displayedProjects[id]}
                      />
                    </li>
                  ))
                }
              </ul>
            </div>
            <button>View All</button>
          </aside>
        </div>
      </section>
    );
  }
}

export default ProjectIndex;
