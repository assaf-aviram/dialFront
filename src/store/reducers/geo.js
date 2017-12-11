import * as C from '../constants';
import * as R from 'ramda';

const initialState = {
  results: [],
//   selected: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case C.SEARCH_ADDRESS_SUCCESS:
        return R.set(R.lensProp('results'), action.payload, state);
    case C.SELECT_RESULT:
        return R.set(R.lensProp('selected'), action.payload, state);
    default:
        return state
  }
}

