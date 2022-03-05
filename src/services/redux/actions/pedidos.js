import {
    PEDIDOS_USER
} from "./types";

import AlquilarService from "./../../alquilar.service.js";


export const pedidosUser = () => async (dispatch) => {
    try {
        const res = await AlquilarService.alquilarlist;

        dispatch({
            type: PEDIDOS_USER,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};