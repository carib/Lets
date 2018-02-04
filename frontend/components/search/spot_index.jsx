import React from 'react';
import { Redirect } from 'react-router-dom';

import _ from 'lodash'

import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {

  render() {
    const { spots, searchPage, fetchSpot } = this.props;
    const page = (searchPage * 18);
    const currentSpots = spots.slice(0, 18);
    return (
      <div>
        <article className="spot-index-main">
          <div className="search-filters-bar-index">
          </div>
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
