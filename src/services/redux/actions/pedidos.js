import {
    SHOW_PEDIDOS_USER,
    NEW_PEDIDOS_USER
} from "./types";

import AlquilarService from "./../../alquilar.service";


export const pedidosUser = () => (dispatch) => {
    try {
        AlquilarService.alquilarlist()
            .then(res => {
                const pedidos = res;
                dispatch(pedidosSucces(pedidos))
            })
    } catch (err) {
        console.log(err);
    }
};

export const pedidosSucces = (pedidos) => {
    try {
        // console.log("pedidos ", pedidos);
        return {
            type: SHOW_PEDIDOS_USER,
            payload: pedidos,
        };
    } catch (err) {
        console.log(err);
    }
};

export const newPedido = (pedido) => {
    try {
        // console.log("pedidos ", pedidos);
        return {
            type: NEW_PEDIDOS_USER,
            payload: pedido,
        };
    } catch (err) {
        console.log(err);
    }
};