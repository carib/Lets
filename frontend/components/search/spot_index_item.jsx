import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import times from 'lodash/times';

const SpotIndexItem = ({ spot }) => {
  const starRating = [];
  const calcStarRating = times(spot.averageRating, () => {
      starRating.push(<i className="fa fa-star" key={starRating.length} aria-hidden="true"></i>);
  });
  return (
    <div className="spot-index-inner-column">
      <li className="spot-item">
      </li>
      <div className="spot-item-info">
        <div className="item-info-row-1">
          {spot.spotType}
        </div>
        <div className="item-info-row-2">
          {spot.description}
        </div>
        <div className="item-info-row-3">

          From <span>${spot.averagePricePerNight}</span> per night
        </div>
        <div className="item-info-row-4">
          <div className="item-info-stars">
            {starRating}
          </div>
          <div className="item-info-review-count">
            175
          </div>
          <div className="item-info-superletter">
            Superletter!
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpotIndexItem;
// import React from 'react';
// import { Link, Redirect } from 'react-router-dom';
//
// const SpotIndexItem = ({ spot }) => {
//   return (
//     <div>
//       <li className="spot-item">
//         <ul className="nested-spot-list">
//           <li className="nested-spot-item">
//             Latitude: {spot.lat}</li>
//           <li className="nested-spot-item">
//             Longitude: {spot.lng}</li>
//         </ul>
//
//       </li>
//       <div className="spot-item-info">
//         <div className="item-info-row-1">
//
//           <span>ENTIRE HOUSE</span> * <span>2 BEDS</span>
//         </div>
//         <div className="item-info-row-2">
//           Romantic front lake Como attic
//         </div>
//         <div className="item-info-row-3">
//           From <span>$148</span> per night
//         </div>
//         <div className="item-info-row-4">
//           <div className="item-info-stars">
//             <i className="fa fa-star" aria-hidden="true"></i>
//             <i className="fa fa-star" aria-hidden="true"></i>
//             <i className="fa fa-star" aria-hidden="true"></i>
//             <i className="fa fa-star" aria-hidden="true"></i>
//             <i className="fa fa-star" aria-hidden="true"></i>
//           </div>
//           <div className="item-info-review-count">
//             175
//           </div>
//           <div className="item-info-superletter">
//             Superletter!
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
//
// export default SpotIndexItem;
