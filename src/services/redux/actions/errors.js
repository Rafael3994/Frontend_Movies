import { SET_ERROR, HIDE_ERROR } from "./types";

// errorActions.js
export const setError = (error) => {
  return {
    type: SET_ERROR,
    error: error,
  };
}

export const hideError = () => {
  return {
    type: HIDE_ERROR,
  };
}
