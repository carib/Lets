import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const SpotIndexItem = ({ spot }) => {
  return (
    <div>
      <li className="spot-item">
        <ul className="nested-spot-list">

          <li className="nested-spot-item">
            Latitude: {spot.lat}</li>
          <li className="nested-spot-item">
            Longitude: {spot.lng}</li>

        </ul>

      </li>
      <div className="spot-item-info">
        <div className="item-info-row-1">
          <span>ENTIRE HOUSE</span> * <span>2 BEDS</span>
        </div>
        <div className="item-info-row-2">
          I SETTE CONI - TRULLO EDERA
        </div>
        <div className="item-info-row-3">
          From <span>$74</span> per night
        </div>
        <div className="item-info-row-4">
          <div className="item-info-stars">
            *****
          </div>
          <div className="item-info-review-count">
            106
          </div>
          <div className="item-info-superhost">
            Superhost
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpotIndexItem;
