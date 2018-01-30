import React from 'react';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: {},
      spotDetails: {},
    };
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.spotId);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      spot: newProps.spot,
      spotDetails: newProps.spotDetails,
    });
  }

  render() {
    const { spot } = this.state;
    return (
      <main className="spot-show-main">
        <section className="spot-hero-container">
          <img src={spot.imageUrl} className="spot-hero"></img>
        </section>
        <ul>
          <li>Here's something!</li>
        </ul>
      </main>
    )
  }
}

export default SpotShow;
