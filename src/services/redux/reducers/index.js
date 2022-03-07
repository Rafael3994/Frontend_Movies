import { combineReducers } from "redux";
import { errorReducer } from "./errors";
import rentalsReducer from "./pedidos";

export default combineReducers({
    rentals: rentalsReducer,
    error: errorReducer
});
