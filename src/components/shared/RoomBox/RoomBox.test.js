import React from 'react';
import ReactDOM from 'react-dom';
import RoomBox from './RoomBox';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RoomBox key={idx}
    name="Deep Tracks 2"
    description="Located just 200 m from the Hirafu Gondola, this 1 bedroom apartment is ideal for those seeking fresh tracks."
    amenities={"aircon":false,"appletv":false,"btspeakers":false,"cardkey":true,"chromecast":false,"fireplace":false,"hdtv":false,"jacuzzi":false,"nespresso":false}
    upgradedFacilities={false}
    bathrooms={1}
    />, div);
});
