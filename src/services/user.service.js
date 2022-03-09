import axios from "axios";
import authHeader from './auth-header';

const API_URL = 'http://localhost:2021/users/';

class UserService {

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('userToken'));;
    }

    async upadate(password, nameUser) {
        try {
            const res = await axios.put(API_URL + 'update', {
                "password": password,
                "nameUser": nameUser
            }, { headers: authHeader() }).then(response => {
                if (response) {
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

    login(email, password) {
        try {
            const res = axios.post(API_URL + 'login', {
                "email": email,
                "password": password
            }).then(response => {
                if (response.data.token) {
                    localStorage.setItem("userToken", JSON.stringify(response.data.token));
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
            console.log(API_URL)
            return axios.post(API_URL + "register", {
                "name": name,
                "email": email,
                "password": password
            }).then(() => {
                return this.login(email, password);
            }).catch((err) => {
                console.log(err)
                return false;
            });
            //return res;
        } catch (error) {
        }
    }

    logout() {
        try {
            return axios.get(API_URL + 'logout', { headers: authHeader() })
                .then(() => {
                    console.log('BORRO');
                    localStorage.removeItem('userToken');
                    return true;
                }).catch(() => { return false });
        } catch (error) {
        }
    }

}

export default new UserService();
