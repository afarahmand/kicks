import React from 'react';
import ProjectIndexDisplay from '../project/project_index_display';
import { fetchSearchResults } from '../../utils/project_api_util';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchQuery: "",
      searchResults: []
    };
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentDidMount() {
    const searchInputTextBox = document.getElementById('search-input');
    searchInputTextBox.addEventListener('keyup', () => {
      fetchSearchResults(this.state.searchQuery).then(
        projects => this.setState({
          searchResults: projects
        })
      );
    });
  }

  renderNoResults() {
    if (this.state.searchResults.length === 0) {
      return (
        <div className="noresults">
          <span className="top-noresults-text">
            Oops! We couldn't find any results.
          </span>
          <span className="bottom-noresults-text">
            Why not change some things around or broaden your search?
          </span>
        </div>
      );
    }
  }

  render() {
    console.log("this.state.searchResults");
    console.log(this.state.searchResults);
    return (
      <section className="search-page">
        <div className="search-form">
          <input
            id="search-input"
            type="text"
            value={this.state.searchQuery}
            onChange={this.update('searchQuery')}
            placeholder="Search"
          />
        </div>
        <div className="results content-narrow">
          {this.renderNoResults()}
          <ProjectIndexDisplay projects={this.state.searchResults}/>
        </div>
      </section>
    );
  }
}

export default SearchPage;
