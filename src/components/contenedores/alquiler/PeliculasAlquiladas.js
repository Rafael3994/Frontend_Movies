import { React, useState, useEffect } from 'react';
import { Link, Navigate } from "react-router-dom";

import AlquilarService from "../../../services/alquilar.service";

function PeliculasAlquiladas(props) {
    const [items, setItems] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            AlquilarService.alquilarlist().then(response => {
                if (response === false) {
                    alert('No se puede mostrar los pedidos');
                } else {
                    console.log(response);
                    setItems(response);
                    setIsLoaded(true)
                }
            }).catch(error => {
                setIsLoaded(false);
            })
        } catch (error) {
        }
    }, []);


    return (
        <div>
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
                    {
                        isLoaded && (
                            items.map((item, i) => {
                                console.log(item.idPelicula);
                                return <tr key={i}>
                                    <th scope="col"></th>
                                    <th scope="col">{item.idPelicula}</th>
                                    <th scope="col">{item.rentalDate}</th>
                                    <th scope="col">{item.returnDate}</th>
                                </tr>
                            })
                        )
                    }

                </tbody>
            </table>
        </div>
    );
}

export default PeliculasAlquiladas;