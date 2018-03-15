import React from 'react';
import DiscoverIndex from '../discover/discover_index';
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

  componentDidMount() {
    fetchDiscoveryResults(this.state.chosenCategory, this.state.sort, 9).then(
      projects => this.setState({
        searchResults: projects
      })
    );
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    }, () => {
      fetchDiscoveryResults(this.state.chosenCategory, this.state.sort, 9).then(
        projects => this.setState({
          searchResults: projects
        })
      );
    });
  }

  render() {
    return (
      <section className="discover">
        <section className="discover-form content-narrow">
          <form>
            Show me
            <select
              onChange={this.update('chosenCategory')}
              className="discover-input"
              defaultValue="All"
            >
            <option value="All">All</option>
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
            projects sorted by

            <select
              onChange={this.update('sort')}
              className="discover-input"
              defaultValue="Random"
            >
              <option value="Random">Random</option>
              <option value="Funding Goal">Funding Goal</option>
              <option value="End Date">End Date</option>
              <option value="Newest">Newest</option>
            </select>
          </form>
        </section>
        <hr></hr>
        <section className="discover-results content-narrow">
          <DiscoverIndex projects={this.state.searchResults} />
        </section>
      </section>
    );
  }
}

export default DiscoverPage;
