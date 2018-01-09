import { connect } from 'react-redux';

import { fetchSpots } from '../../actions/spot_actions';
import { changeFilter } from '../../actions/filter_actions';
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
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
