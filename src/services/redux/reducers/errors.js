import { HIDE_ERROR, SET_ERROR } from "../actions/types";

const initState = {
  error: null,
  isOpen: false,
};

export function errorReducer(state = initState, action) {
  const { type, error } = action;

  switch(type) {
    case SET_ERROR:
      return {
        error: error,
        isOpen: true,
      };
    case HIDE_ERROR:
      return {
        error: null,
        isOpen: false,
      };
    
    default:
      return state;
  }
}
