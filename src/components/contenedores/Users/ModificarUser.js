import React, { useState } from 'react';

import { Link, Navigate } from "react-router-dom";
import UserService from "./../../../services/user.service";


function ModificarUser() {
    const [isToken, setIsToken] = useState(UserService.getCurrentUser() !== null);
    const [formData, setFormData] = useState({
        nameUser: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        UserService.upadate(formData.password, formData.nameUser).then((res) => {
            console.log(res);
            if (res) {
                alert('Datos modificados');
            } else {
                alert('No se pudo modificadar');
            }
        })
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            {!isToken && (
                <Navigate to="/" />
            )}
            <h2 className="mb-5">Modificar User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Password
                        <input
                            name="password" value={formData.password} onChange={handleChange} required type="password" className="form-control" placeholder="Enter your Password">
                        </input>
                    </label>
                    <br></br><br></br>
                    <label>Name
                        <input
                            name="nameUser" value={formData.nameUser} onChange={handleChange} required type="text" className="form-control" placeholder="Enter your Name">
                        </input>
                    </label>
                </div>
                <br></br>
                <div className='d-flex flex-row'>
                    <button type="submit" className="btn btn-primary margin-right-5">Modificar</button>
                </div>
            </form>
        </div>
    );

}

export default ModificarUser;