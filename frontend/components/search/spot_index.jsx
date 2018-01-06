import React from 'react';
import { Redirect } from 'react-router-dom';

import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  componentDidMount() {
    this.props.fetchSpots();
  }


  render() {
    const { spots, searchPage } = this.props;
    const page = (searchPage * 18);
    const currentSpots = spots.slice(0, 18);

    console.log('spotindex-render', spots, currentSpots);
    return (
      <div>
        <article className="spot-index-main">
          <ul className="spot-index-column">
            {
              currentSpots.map(spot =>
                <SpotIndexItem
                  key={spot.id}
                  spot={spot}
                />
              )
            }
          </ul>
        </article>
      </div>
    )
  }
}

export default SpotIndex;
// if (this.props.loggedIn) {
//   )
// } else {
//   return <Redirect to="/login" />
// }

// const { spots } = this.props;
// return (
//   <div>
//     {
//       spots.map(spot =>
//         <SpotIndexItem
//           key={spot.id}
//           spot={spot}
//         />
//       )
//     }
//   </div>
// )
