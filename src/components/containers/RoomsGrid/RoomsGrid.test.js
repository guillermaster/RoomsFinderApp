import React from 'react';
import ReactDOM from 'react-dom';
import RoomsGrid from './RoomsGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoomsGrid />, div);
});
