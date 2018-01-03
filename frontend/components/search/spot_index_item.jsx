import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const SpotIndexItem = ({ spot }) => {
  return (
    <li>
      <ul className="nested-spot-list">
        <li>Spot: {spot.description}</li>
        <li>Latitude: {spot.lat}</li>
        <li>Longitude: {spot.lng}</li>
      </ul>
    </li>
  )
}

export default SpotIndexItem;
