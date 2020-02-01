import {INCREMENT_COUNTER_ACTION, DECREMENT_COUNTER_ACTION} from "../constants";

export const incrementCounter = dispatch => () => dispatch({
  type: INCREMENT_COUNTER_ACTION 
});

export const decrementCounter = dispatch => () => dispatch({
  type: DECREMENT_COUNTER_ACTION 
});