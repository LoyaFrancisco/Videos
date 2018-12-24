import React from 'react';

class SearchBar extends React.Component{
  state = {term: ''};

  onInputChange = (event) => {
    this.setState({term: event.target.value})
  };

  onFormSubmit = event => {
    event.preventDefault(); //So browser will not intend to automatically submit the form
                            // i.e. When form is submitted, the page should (now) not refresh

    // TODO: Make sure we call
    // callback from parent component
  };

  render(){
    return (
    <div className="search-bar ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input 
          type="text" 
          value = {this.state.term}
          onChange={this.onInputChange}
          />
        </div>
      </form>
    </div>)
  }
}

export default SearchBar;