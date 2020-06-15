import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault(); // Stops form HTML refreshing

    console.log(this.state.term); // this.state = this.state.bind(this) in the constructor OR arrow function prevents a bad return on 'this'
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
    <div className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input 
          type="text" 
          onChange={ e => this.setState({ term: e.target.value })} // data is not to be stored in HTML, instead all information should be centralised in the React application that drives and stores all data
          value={this.state.term} // controlled element
          />
        </div>
        
      </form>
      </div>);
  }
}

export default SearchBar;