import React from 'react';
import { Redirect } from 'react-router-dom';

import SpotIndexItem from './spot_index_item';

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }


  render() {
    const { spots } = this.props;
    return (
      <article className="spot-index-main">
        <ul className="spot-index-column">
          {
            spots.map(spot =>
              <SpotIndexItem
                key={spot.id}
                spot={spot}
                />
            )
          }
        </ul>
      </article>
    )
  }
}

export default SpotIndex;
// if (this.props.loggedIn) {
//   )
// } else {
//   return <Redirect to="/login" />
// }
