import axios from "axios";

const API_URL = 'http://localhost:2022/users/';


class UserService {

    async login(email, password) {
        try {
            const res = await axios.post(API_URL + 'login', {
                "email": email,
                "password": password
            }).then(response => {
                if (response.data.token) {
                    localStorage.setItem("userToken", JSON.stringify(response.data));
                }
                return true;
            }).catch((error) => {
                return false
            });
            return res;
        } catch (error) {
        }
    }

    register(email, password, name) {
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

    // TODO: Implementar
    logout() {
        // try {
        //   return axios.get(API_URL + 'logout', { headers: authHeader() })
        //     .then(() => { return true }).catch(() => { return false });
        // } catch (error) {
        // }
    }

}

export default new UserService();
