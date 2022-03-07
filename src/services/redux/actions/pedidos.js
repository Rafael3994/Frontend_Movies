import {
    SHOW_PEDIDOS_USER,
    NEW_PEDIDO_USER
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

export const newPedido = (pedido) => async (dispatch) => {
    try {
        // console.log("pedido ", pedido); 
        const res = await AlquilarService.alquilarPelicula(pedido).then((res) => {
            if(res){
                dispatch(pedidosUser());
                return new Promise.resolve();
            } else {
                return new Promise.reject()
            }
        }).catch((error) => new Promise.reject())
        
    } catch (err) {
        console.log(err);
    }
};