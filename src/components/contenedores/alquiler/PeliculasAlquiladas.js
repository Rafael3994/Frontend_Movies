import { React, useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";

// import AuthService from "../services/auth.service";

function PeliculasAlquiladas(props) {
    // const [items, setItems] = useState([]);
    // const [isLoaded, setIsLoaded] = useState(false);
    // const [error, setError] = useState(null);
    // const [isToken, setIsToken] = useState(AuthService.getCurrentUser() !== null);

    const logout = () => {
        // AuthService.logout().then((res) => {
        //     if (res) {
        //         localStorage.removeItem("userToken");
        //         setIsToken(false)
        //     }
        // });
    }

    useEffect(() => {
        // try {
        //     AuthService.getMascotas().then(response => {
        //         setItems(response);
        //         setIsLoaded(true)
        //     }).catch(error => {
        //         setIsLoaded(false);
        //     })
        // } catch (error) {
        // }
    }, []);


        return (
            <div>
                {/* {!isToken && (
                    <Navigate to="/" />
                )} */}
                <h2 className='mb-4 mt-4'>Peliculas Alquiladas</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Pelicula</th>
                            <th scope="col">Fecha inicial</th>
                            <th scope="col">Fecha de entrega</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={1}>
                            <th scope="col"></th>
                            <th scope="col">XXX</th>
                            <th scope="col">XXX</th>
                            <th scope="col">XXX</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
}

export default PeliculasAlquiladas;