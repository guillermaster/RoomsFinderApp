import React, { Component } from 'react';
//import logo from './logo.svg';
import SearchBox from './../../shared/SearchBox/SearchBox';
import RoomsGrid from './../../containers/RoomsGrid/RoomsGrid';
import './Home.css';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      rooms: [],
      filter: ''
    };
  }

  getRooms(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "properties.json", true);
    xhr.onload = (e) => {
      if(xhr.readyState === 4 && xhr.status === 200){
        let response = JSON.parse(xhr.responseText);
        this.setState({rooms: response});
      } else{
        console.error(xhr.statusText);
      }
    };
    xhr.onerror = (e) => {
      console.error(xhr.statusText);
    }
    xhr.send(null);
  }

  onSearchInputChanged(inputValue){
    this.setState({filter: inputValue});
  }

  componentDidMount(){
    this.getRooms();
  }

  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <SearchBox onChange={this.onSearchInputChanged.bind(this)} />
        </div>
        <div className="Home-body">
          <RoomsGrid rooms={this.state.rooms} filter={this.state.filter} />
        </div>
      </div>
    );
  }
}

export default Home;
