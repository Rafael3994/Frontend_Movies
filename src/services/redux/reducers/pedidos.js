import {
    SHOW_PEDIDOS_USER,
    NEW_PEDIDO_USER,
    FETCH_RENTALS_SUCCESS,
    FETCH_RENTALS_FAIL,
    NEW_RENTAL_SUCCESS,
    NEW_RENTAL_FAIL
} from "./../actions/types";
import alquilarService from './../../alquilar.service'




// const initialState = [
//     {idPelicula: "Spider-Man: No Way Home", rentalDate: "05-03-2022", returnDate: "06-03-2022"
// }]
function rentalsReducer(rentals = [], action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_RENTALS_SUCCESS:
            return payload;
        case FETCH_RENTALS_FAIL:
                return payload;
        case NEW_RENTAL_SUCCESS:
            console.log("payload ", rentals);
            return rentals;
        case NEW_RENTAL_FAIL:
            console.log("payload ", rentals);
            return rentals;
        default:
            return rentals;
    }
};

export default rentalsReducer;