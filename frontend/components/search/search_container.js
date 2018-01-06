import { connect } from 'react-redux';

import { fetchSpots } from '../../actions/spot_actions';
import Search from './search';

const mapStateToProps = state => {
  return {
    searchPage: state.searchPage,
    loggedIn: Boolean(state.session.currentUser),
    spots: Object.values(state.entities.spots),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSpots: () => dispatch(fetchSpots()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
