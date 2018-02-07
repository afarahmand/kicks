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

  render() {
    console.log("this.state.searchResults");
    console.log(this.state.searchResults);
    return (
      <section>
        <div className="search-form">
          <h2>Search</h2>
          <input
            id="search-input"
            type="text"
            value={this.state.searchQuery}
            onChange={this.update('searchQuery')}
          />
        </div>
        <hr></hr>
        <div className="results">
          <ProjectIndexDisplay projects={{}}/>
        </div>
      </section>
    );
  }
}

export default SearchPage;
