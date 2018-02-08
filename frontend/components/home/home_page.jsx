import React from 'react';
import { Link } from 'react-router-dom';
import StatBar from './stat_bar';
import HomePageItem from './home_page_item';
import { fetchDiscoveryResults } from '../../utils/project_api_util';

class HomePage extends React.Component {
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

  selectCategory(category) {
    return e => this.setState({
      chosenCategory: category
    });
  }

  render() {
    if(Object.keys(this.props.projects).length === 0) {
      return null;
    }

    // Determine which 5 projects will become displayedProjects
    // based on selected tabs
    let keys = Object.keys(this.props.projects);
    let count = 0;
    let i = 0;
    while (count < 5 && i < keys.length) {
      if (this.props.projects[keys[i]].category === this.state.chosenCategory) {
        this.state.displayedProjects[count] = this.props.projects[keys[i]];
        count++;
      }
      i++;
    }

    return (
      <div>
        <StatBar />
        <section className="home-main content-narrow">

          <div className="tab-bar">
            <ul>
              {
                Object.keys(this.props.categories).map(id => (
                  <li key={id}>
                    <button
                      onClick={this.selectCategory(this.props.categories[id])}
                    >
                      {this.props.categories[id]}
                    </button>
                  </li>
                ))
              }
            </ul>
          </div>

          <section className="title-bar">
            <span className="category-title">{this.state.chosenCategory}</span>
            <Link to='/discover/'>
              <span>DISCOVER MORE</span>
              <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </section>

          <section className="main-aside-title">
            <div className="content-header-text">FEATURED PROJECT</div>
            <div className="content-header-text"></div>
          </section>

          <div className="content">

            <main className="featured-content left-content">
              <HomePageItem project={this.state.displayedProjects[0]} />
            </main>

            <aside className="right-content">
              <div className="project-list">
                <ul>
                  {
                    Object.keys(this.state.displayedProjects).slice(1).map(
                      id => (
                      <li key={id}>
                        <HomePageItem
                          project={this.state.displayedProjects[id]}
                        />
                      </li>
                    ))
                  }
                </ul>
              </div>
            </aside>

          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;
