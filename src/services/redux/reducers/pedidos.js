import {
    SHOW_PEDIDOS_USER,
    NEW_PEDIDOS_USER
} from "./../actions/types";
import alquilarService from './../../alquilar.service'




// const initialState = [
//     {idPelicula: "Spider-Man: No Way Home", rentalDate: "05-03-2022", returnDate: "06-03-2022"
// }]

function pedidosReducer(pedidos = [], action) {
    const { type, payload } = action;

    switch (type) {
        case SHOW_PEDIDOS_USER:
            return payload;
        case NEW_PEDIDOS_USER:
            console.log("payload ", pedidos);
            return {
                ...pedidos,
                payload
            }
        default:
            return pedidos;
    }
};

export default pedidosReducer;