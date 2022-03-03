import axios from "axios";

import authHeader from './auth-header';


const API_URL = 'http://localhost:2022/pedidos/';

class AlquilarService {

    async alquilarPelicula(pelicula) {
        try {
            const res = await axios.post(API_URL + 'alquilar', {
                "idPelicula": pelicula
            }, { headers: authHeader() }).then(response => {
                if (response.data.message === 'Pedido relized.') {
                    return true;
                } else {
                    return false;
                }
            }).catch((error) => {
                return false
            });
            return res;
        } catch (error) {
        }
    }

    alquilarlist() {
        try {
            const res = axios.get(API_URL + "user", { headers: authHeader() })
                .then((response) => {
                    return response.data;
                }).catch(() => {
                    return false;
                });
            return res;
        } catch (error) {
        }
    }
}

export default new AlquilarService();
