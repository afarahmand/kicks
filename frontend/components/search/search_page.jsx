import React from 'react';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: props.store.entities.projects,
      searchText: "",
      searchResults: []
    };

    // if (props.match.params.searchString) {
    //   this.state.searchText = props.match.params.searchString;
    //   this.updateSearchResults();
    // }
  }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const user = Object.assign({}, this.state);
  //   this.props.processForm(user);
  // }

  update(field) {
    // Find subset of store based on searchText
    let subset = {};

    Object.keys(this.props.projects);

    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  updateSearchResults() {
    this.state.searchResults = [];

    Object.keys(this.props.projects).forEach(id => (
      {
        if (
          (this.props.projects[id].title.includes(this.state.searchText)) ||
        (this.props.projects[id].short_blurb.includes(this.state.searchText))
        ) {
          console.log("!!!");
        }
      }
    ))
  }

  render() {
    return (
      <section>
        <div className="search-form">
          <h2>Search</h2>
          <input
            type="text"
            value={this.state.searchText}
            onChange={this.update('searchText')}
          />
        </div>
        <div className="results">
        </div>
      </section>
    );
  }
}

export default SearchPage;
