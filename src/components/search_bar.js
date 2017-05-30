//creates & manages React Components, {} pulls off property stated as separate variable
import React, { Component } from 'react';

//functional vs class based Components ->>
//self aware Component & enhance it with React functionality
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {term: ''};
  }
  
  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  } 
  
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  
}

export default SearchBar;