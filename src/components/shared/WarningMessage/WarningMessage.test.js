import React from 'react';
import ReactDOM from 'react-dom';
import WarningMessage from './WarningMessage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WarningMessage message="test warning message" />, div);
});
