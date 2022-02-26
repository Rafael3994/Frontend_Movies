import React from 'react';

import { Link, Navigate } from "react-router-dom";
// import MascotasService from "../services/mascotas.service";
// import AuthService from "../services/auth.service";


class AlquilarPelicula extends React.Component {
    constructor(props) {
        super(props);
        // this.state = { 
        //     namePet: '',
        //     tipo: 'Gato',
        //     isMascotaCreate: false,
        //     isToken:  AuthService.getCurrentUser() !== null
        //  };
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);        
    }

    handleSubmit(e) {
        // e.preventDefault();
        // MascotasService.register(this.state.namePet, this.state.tipo).then((res) => {
        //     if(res) {
        //         this.setState({ isMascotaCreate: true });
        //     }
        // })
    }

    handleChange(e) {
        // console.log(e.target.name, e.target.value);
        // this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className='mb-5'>
                <h2 className='mb-4'>Alquilar Pelicula</h2>
                <form /*onSubmit={this.handleSubmit}*/>
                    <div className="form-group">
                        <label className='margin-right-5 width-15-em'>
                            <select name="tipo" onChange={this.handleChange} required className="form-control" placeholder="Select its type">
                            <option>Gato</option>
                            <option>Perro</option>
                            <option>Pajaro</option>
                            </select>
                        </label>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>

        );
    }
}
export default AlquilarPelicula;