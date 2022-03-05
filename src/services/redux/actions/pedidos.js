import {
    SHOW_PEDIDOS_USER
} from "./types";

import AlquilarService from "./../../alquilar.service.js";


export const pedidosUser = async () => {
    try {
        const res = await AlquilarService.alquilarlist;
        return {
            type: SHOW_PEDIDOS_USER,
            payload: res.data,
        };
    } catch (err) {
        console.log(err);
    }
};