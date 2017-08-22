import React, { Component } from 'react';
import RoomBox from './../../shared/RoomBox/RoomBox';
import WarningMessage from './../../shared/WarningMessage/WarningMessage';

class RoomsGrid extends Component {
  constructor(props){
    super(props);
    this.state = {
      rooms: []
    };
  }

  roomsGrid(){

    if(this.state.rooms.length > 0){
      const roomsHtml = this.state.rooms.map((room, idx) =>
        <RoomBox key={idx}
          name={room.name}
          description={room.description}
          amenities={room.amenities}
          upgradedFacilities={room.upgradedFacilities}
          bathrooms={room.bathrooms}
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
    else{
      return (
        <WarningMessage message='There is no room matching the specified criteria' />
      )
    }
  }

  filterRooms(rooms, filter){
    let filteredRooms = rooms.filter((room) => {
      return room.name.toLowerCase().includes(filter.toLowerCase()) ||
             room.description.toLowerCase().includes(filter.toLowerCase())
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
