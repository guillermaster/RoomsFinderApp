import React from 'react';
import ReactDOM from 'react-dom';
import RoomsGrid from './RoomsGrid';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const rooms = '[{"id":7,"propertyTypeId":231,"propertyType":false,"name":"Deep Tracks 2","description":"Located just 200 m from the Hirafu Gondola, this 1 bedroom apartment is ideal for those seeking fresh tracks.","code":"DT02","baseRoom":"","gradeId":2,"gradeSort":1,"locationId":16,"accomTypeId":1,"viewId":9,"kitchenId":1,"liftDistanceId":179,"villageCentreDistanceId":182,"bathrooms":1,"standardPax":2,"maximumPax":3,"soldSeparately":true,"upgradedFacilities":false,"amenities":{"aircon":false,"appletv":false,"btspeakers":false,"cardkey":true,"chromecast":false,"fireplace":false,"hdtv":false,"jacuzzi":false,"nespresso":false},"bedConfigurations":[8,9,92],"status":"healthy","floorArea":44,"online":true,"images":[]}]';
  ReactDOM.render(<RoomsGrid rooms={rooms} filter='' />, div);
});
