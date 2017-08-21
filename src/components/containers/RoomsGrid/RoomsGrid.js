import React, { Component } from 'react';
import RoomBox from './../../shared/RoomBox/RoomBox';

class RoomsGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      rooms: []
    };
  }

  roomsGrid(){
    const roomsHtml = this.state.rooms.map((room, idx) =>
      <RoomBox key={idx}
        name={room.name}
        description={room.description}
        />
    );

    return (
      <div className='container-fluid'>
        <div className='row'>
          {roomsHtml}
        </div>
      </div>
    );
  }

  filterRooms(rooms, filter){
    let filteredRooms = rooms.filter((room) => {
      return room.name.includes(filter) || room.description.includes(filter)
    });

    return filteredRooms;
  }

  componentWillReceiveProps(nextProps){
    let filteredRooms = this.filterRooms(nextProps.rooms, nextProps.filter);
    this.setState({ rooms: filteredRooms });
  }

  render() {
    return (
      <div>
        {this.roomsGrid()}
      </div>
    );
  }
}

export default RoomsGrid;
