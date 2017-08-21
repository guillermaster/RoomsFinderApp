import React, { Component } from 'react';

class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(event){
    let inputValue = event.target.value;
    this.setState({value: inputValue});
    this.props.onChange(inputValue);
  }

  render() {
    return (
      <div>
        <input type="text"
          className="form-control"
          placeholder="Type here to search"
          value={this.state.value}
          onChange={ this.handleTextChange } />
      </div>
    );
  }
}

export default SearchBox;
