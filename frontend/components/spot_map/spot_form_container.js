import { connect } from 'react-redux';

import {
  fetchSpot,
  createSpot,
} from '../../actions/spot_actions';
import SpotForm from './spot_form';

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSpot: (id) => dispatch(fetchSpot(id)),
    createSpot: (spot) => dispatch(createSpot(spot))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SpotForm);
