import * as C from '../constants';
import * as R from 'ramda';

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  asyncPeriod: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case C.INCREMENT_REQUESTED:
      return R.set(R.lensProp('isIncrementing'), true, state);
    case C.DECREMENT_REQUESTED:
      return R.set(R.lensProp('isDecrementing'), true, state);

    case C.INCREMENT:
      return R.evolve({
        count: R.inc,
        isIncrementing: R.F,
      }, state);

    case C.DECREMENT:
      return R.evolve({
        count: R.dec,
        isDecrementing: R.F,
      }, state);
    
    case C.SET_ASYNC_PERIOD:
      return R.set(R.lensProp('asyncPeriod'), action.payload, state);
    default:
      return state
  }
}

