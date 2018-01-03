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

  redirect() {

  }

  render() {
    const { spots } = this.props;
    if (this.props.loggedIn) {
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
    } else {
      return <Redirect to="/login" />
    }
  }
}

export default SpotIndex;
