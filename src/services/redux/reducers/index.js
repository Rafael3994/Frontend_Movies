import { combineReducers } from "redux";
import pedidosReducer from "./pedidos";

export default combineReducers({
    pedidos: pedidosReducer,
});