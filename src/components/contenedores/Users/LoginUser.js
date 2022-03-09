import React, { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import UserService from "../../../services/user.service";

function LoginUser(props) {

    const [isLogged, setIsLogged] = useState(false);
    const [formData, setFormData] = useState({
        user: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        UserService.login(formData.user, formData.password)
            .then((res) => {
                if (res) {
                    setIsLogged(true);
                } else {
                    alert('Datos incorrectos o usuario invalido.')
                }
            })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    return (
        <div>
            {isLogged && (
                <Navigate to="/users" replace={true} />
            )}
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Correo Electronico
                        <input
                            name='user' value={formData.user} onChange={handleChange} required type="text" className="form-control" placeholder="Enter your User">
                        </input>
                    </label>
                    <br></br><br></br>
                    <label>Contraseña
                        <input
                            name='password' value={formData.password} onChange={handleChange} required type="password" className="form-control" placeholder="Enter your Password">
                        </input>
                    </label>
                </div>
                <br></br>
                <div className='d-flex flex-row'>

                    <button type="submit" className="btn btn-primary margin-right-7">Login</button>
                </div>
            </form>
        </div>
    );



}

export default LoginUser;