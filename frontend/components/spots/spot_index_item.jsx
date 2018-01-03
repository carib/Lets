import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const SpotIndexItem = ({ spot }) => {
  return (
    <li>Spot: {spot.description}</li>
  )
}

export default SpotIndexItem;
