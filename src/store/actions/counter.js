import * as C from '../constants';
import * as R from 'ramda';

const selectAsyncPeriod = R.compose(
  R.defaultTo(3000),
  R.view(R.lensPath(['counter', 'asyncPeriod'])),
  R.call,
);

export const increment = () => {
    return dispatch => {
      dispatch({
        type: C.INCREMENT_REQUESTED
      })
  
      dispatch({
        type: C.INCREMENT
      })
    }
  }
  
  export const incrementAsync = () => (dispatch, getState) => {
    dispatch({
      type: C.INCREMENT_REQUESTED
    })
  
    return setTimeout(() => {
      dispatch({
        type: C.INCREMENT
      })
    }, selectAsyncPeriod(getState))
  }
  
  export const decrement = () => dispatch => {
    dispatch({
      type: C.DECREMENT_REQUESTED
    })

    dispatch({
      type: C.DECREMENT
    })
  }
  
  export const decrementAsync = () => (dispatch, getState) => {
    dispatch({
      type: C.DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: C.DECREMENT
      })
    }, selectAsyncPeriod(getState))
  }

  export const setAsync = ({ target: { value } }) => ({
    type: C.SET_ASYNC_PERIOD,
    payload: value ? parseInt(value, 10) : '',
  })
  