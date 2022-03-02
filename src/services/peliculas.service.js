import axios from "axios";
import authHeader from './auth-header';



const API_URL = 'http://localhost:2022/peliculas';


class PeliculasService {

    async peliculaslist() {
        try {
            const res = await axios.get(API_URL, { headers: authHeader()}
            ).then((response) => {
                return response;
            }).catch(() => {
                return false;
            });
            return res;
        } catch (error) {
        }
    }

}

export default new PeliculasService();
