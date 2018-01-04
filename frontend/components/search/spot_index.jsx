import React from 'react';
import { Redirect } from 'react-router-dom';

import SpotIndexItem from './spot_index_item';
import Modal from '../session/modal';

class SpotIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSpots();
  }

  redirect() {

  }

  render() {
    const { spots } = this.props;
    return (
      <article className="spot-index-main">
        {this.redirect()}
        <ul>
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
