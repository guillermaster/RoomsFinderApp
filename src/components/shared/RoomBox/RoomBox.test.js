import React from 'react';
import ReactDOM from 'react-dom';
import RoomBox from './RoomBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoomBox />, div);
});
