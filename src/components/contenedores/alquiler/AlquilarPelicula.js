import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from "react-router-dom";

import PeliculasService from "../../../services/peliculas.service";
import AlquilarService from "../../../services/alquilar.service";
import { newPedido, pedidosUser } from "./../../../services/redux/actions/pedidos"

function AlquilarPelicula(props) {

    const dispatch = useDispatch;
    const [peliculas, setPeliculas] = useState([]);
    const [select, setSelect] = useState('Spider-Man: No Way Home');
    const [isAlquilarCreate, setIsAlquilarCreate] = useState(false);

    useEffect(() => {
        try {
            PeliculasService.peliculaslist().then((res) => {
                setPeliculas(res.data);
            });

        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            // console.log(select);
            // DISPATCH
            AlquilarService.alquilarPelicula(select).then((res) => {
                if (res) {
                    dispatch(pedidosUser)(dispatch)
                    alert('Pelicula alquilada.')
                } else {
                    alert('No se pudo alquilar.')
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value);
        setSelect(e.target.value);
    }

    return (
        <div className='mb-5'>
            <h2 className='mb-4'>Alquilar Pelicula</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className='margin-right-5 width-15-em'>
                        <select name="select" onChange={handleChange} required className="form-control" placeholder="Select its type">
                            {
                                peliculas && (
                                    peliculas.map((peli, i) => {
                                        return <option key={i} value={peli.title}>
                                            {peli.title}
                                        </option>
                                    })
                                )
                            }
                        </select>
                    </label>
                    <button type="submit" className="btn btn-primary">Alquilar</button>
                </div>
            </form>
        </div>

    );
}

export default AlquilarPelicula;