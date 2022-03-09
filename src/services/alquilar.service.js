import axios from "axios";

import authHeader from './auth-header';


const API_URL = 'http://localhost:2021/pedidos/';

class AlquilarService {

    alquilarPelicula(pelicula) {
        return axios.post(API_URL + 'alquilar', {
                "idPelicula": pelicula
            }, { headers: authHeader() });
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
