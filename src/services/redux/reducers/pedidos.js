import {
    PEDIDOS_USER
} from "./../actions/types";
import alquilarService from './../../alquilar.service'




const initialState = [
    {idPelicula: "Spider-Man: No Way Home", rentalDate: "05-03-2022", returnDate: "06-03-2022"
}]

function pedidosReducer(pedidos = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case PEDIDOS_USER:
            return pedidos;

        default:
            return pedidos;
    }
};

export default pedidosReducer;