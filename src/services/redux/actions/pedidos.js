import {
    FETCH_RENTALS_SUCCESS,
    FETCH_RENTALS_FAIL,
    NEW_RENTAL_SUCCESS,
    NEW_RENTAL_FAIL
} from "./types";

import AlquilarService from "./../../alquilar.service";
import { hideError, setError } from "./errors";

export const fetchRentals = () => {
    return (dispatch) => {
        try {
            console.log('pedidosUser');
            AlquilarService.alquilarlist()
                .then(res => {
                    const pedidos = res;
                    dispatch(fetchRentalsSuccess(pedidos))
                })
        } catch (err) {
            console.log(err);
            dispatch(setError(err));
        }
    }
};

export const fetchRentalsSuccess = (rentals) => {
    try {
        // console.log("pedidos ", pedidos);
        return {
            type: FETCH_RENTALS_SUCCESS,
            payload: rentals,
        };
    } catch (err) {
        console.log(err);
    }
};

export const fetchRentalsError = (error) => {
    try {
        // console.log("pedidos ", pedidos);
        return {
            type: FETCH_RENTALS_SUCCESS,
            payload: error,
        };
    } catch (err) {
        console.log(err);
    }
};
export const newRental = (rental) => {
    return async (dispatch) => {
        try {
            console.log("pedido ", rental); 
           const res = await AlquilarService.alquilarPelicula(rental);
           dispatch(newRentalSucces(res.data));
           dispatch(fetchRentals());
           dispatch(hideError());
           return Promise.resolve(res.data);  
        } catch (err) {
            console.log(err);
            dispatch(setError(err));
            return Promise.reject(err)
        }
    }
};

const newRentalSucces = (payload) => {
    return {
        type: NEW_RENTAL_SUCCESS,
        payload: payload,
    }
}