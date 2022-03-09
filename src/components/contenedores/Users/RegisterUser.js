import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import UserService from "../../../services/user.service";

function RegisterUser() {

    const [isLogged, setIsLogged] = useState(false);
    const [formData, setFormData] = useState({
        nameUser: "",
        password: "",
        email: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            UserService.register(
                formData.email, formData.password,
                formData.nameUser)
                .then((res) => {
                    if (res) {
                        setIsLogged(true);
                    }
                })
        } catch (error) {

        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div>
            {isLogged && (
                <Navigate to="/users" replace={true} />
            )}
            <h2 className="mb-5">Registrarse</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="margin-right-5">Email
                        <input
                            name="email" value={formData.email} onChange={handleChange} required type="text" className="form-control" placeholder="Enter your Email">
                        </input>
                    </label>
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
                    <button type="submit" className="btn btn-primary margin-right-5">Register</button>
                </div>
            </form>
        </div>
    );
}

export default RegisterUser;