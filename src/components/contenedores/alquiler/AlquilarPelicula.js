import React from 'react';

import { Link, Navigate } from "react-router-dom";
import PeliculasService from "../../../services/peliculas.service";
import AlquilarService from "../../../services/alquilar.service";


class AlquilarPelicula extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peliculas: [],
            select: 'Spider-Man: No Way Home',
            isAlquilarCreate: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        try {
            PeliculasService.peliculaslist().then((res) => {
                this.setState({ peliculas: res.data })

            })
        } catch (error) {

        }
    }

    handleSubmit(e) {
        e.preventDefault();
        AlquilarService.alquilarPelicula(this.state.select).then((res) => {
            if (res) {
                alert('Pelicula alquilada.')
            } else {
                alert('No se pudo alquilar.')
            }
        })
    }

    handleChange(e) {
        // console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { peliculas } = this.state;
        // console.log("peliculas ", peliculas);
        return (
            <div className='mb-5'>
                <h2 className='mb-4'>Alquilar Pelicula</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label className='margin-right-5 width-15-em'>
                            <select name="select" onChange={this.handleChange} required className="form-control" placeholder="Select its type">
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
}
export default AlquilarPelicula;