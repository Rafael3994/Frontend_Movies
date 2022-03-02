import axios from "axios";

const API_URL = 'http://localhost:2022/pedidos/';


class AlquilarService {

    async alquilarPelicula(email, password) {
        // try {
        //     const res = await axios.post(API_URL + 'login', {
        //         "email": email,
        //         "password": password
        //     }).then(response => {
        //         if (response.data.token) {
        //             localStorage.setItem("userToken", JSON.stringify(response.data));
        //         }
        //         return true;
        //     }).catch((error) => {
        //         return false
        //     });
        //     return res;
        // } catch (error) {
        // }
    }

    alquilarlist(email, password, name) {
        try {
            const res = axios.post(API_URL + "register", {
                "name": name,
                "email": email,
                "password": password
            }).then(() => {
                return this.login(email, password);
            }).catch(() => {
                return false;
            });
            return res;
        } catch (error) {
        }
    }
}

export default new AlquilarService();
