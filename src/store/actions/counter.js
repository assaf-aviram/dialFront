import * as C from '../constants';

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
  
  export const incrementAsync = () => {
    return dispatch => {
      dispatch({
        type: C.INCREMENT_REQUESTED
      })
  
      return setTimeout(() => {
        dispatch({
          type: C.INCREMENT
        })
      }, 3000)
    }
  }
  
  export const decrement = () => {
    return dispatch => {
      dispatch({
        type: C.DECREMENT_REQUESTED
      })
  
      dispatch({
        type: C.DECREMENT
      })
    }
  }
  
  export const decrementAsync = () => {
    return dispatch => {
      dispatch({
        type: C.DECREMENT_REQUESTED
      })
  
      return setTimeout(() => {
        dispatch({
          type: C.DECREMENT
        })
      }, 3000)
    }
  }
  