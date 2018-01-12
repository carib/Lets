import { connect } from 'react-redux';

import { fetchSpot } from '../../actions/spot_actions';

import SpotDetail from './spot_detail';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: id => dispatch(fetchSpot(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotDetail);
