import React from 'react';
import ProjectIndexDisplay from '../project/project_index_display';
import { fetchDiscoveryResults } from '../../utils/project_api_util';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosenCategory: "All",
      sort: "Random",
      searchResults: []
    };
  }

  // fetchDiscoveryResults(this.state.chosenCategory, this.state.sort).then(
  //   projects => this.setState({
  //     searchResults: projects
  //   })
  // );

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    }, () => {
      fetchDiscoveryResults(this.state.chosenCategory, this.state.sort).then(
        projects => this.setState({
          searchResults: projects
        })
      );
    }
  );
  }

  render() {
    console.log("this.state.searchResults");
    console.log(this.state.searchResults);
    return (
      <section className="discover">
        <section className="discover-form">
          <form>
            <select
              onChange={this.update('chosenCategory')}
              className="discover-input"
            >
            <option value="All" selected>All</option>
              {
                Object.keys(this.props.categories).map(
                  (id) => {
                    return (
                      <option
                        key={id}
                        value={this.props.categories[id]}
                      >
                        {this.props.categories[id]}
                      </option>
                    );
                  }
                )
              }
            </select>

            <select
              onChange={this.update('sort')}
              className="discover-input"
            >
              <option value="Random" selected>Random</option>
              <option value="Funding Goal">Funding Goal</option>
              <option value="End Date">End Date</option>
              <option value="Newest">Newest</option>
            </select>
          </form>
        </section>
        <section className="discover-results">
        </section>
        <hr></hr>
      </section>
    );
  }
}

// <div className="search-form">
//   <h2>Search</h2>
//   <input
//     id="search-input"
//     type="text"
//     value={this.state.chosenCategory}
//     onChange={this.update('chosenCategory')}
//   />
// </div>
// <hr></hr>
// <div className="results">
//   <ProjectIndexDisplay projects={{}}/>
// </div>


export default DiscoverPage;
