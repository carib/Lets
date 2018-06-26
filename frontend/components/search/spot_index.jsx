import React from 'react';

import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
  render() {
    const { spots } = this.props;
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
