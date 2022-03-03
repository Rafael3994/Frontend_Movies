import React from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";


import UserService from "../../../services/user.service";

import PeliculasAlquiladas from "./PeliculasAlquiladas";
import AlquilarPelicula from "./AlquilarPelicula";

class Alquiler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToken: UserService.getCurrentUser() !== null
        }
    }

    render() {
        const { isToken } =  this.state;
        return (
            <div>
                {!isToken && (
                    <Navigate to="/" />
                )}
                <AlquilarPelicula />
                <PeliculasAlquiladas />
            </div>
        );
    }
}
export default Alquiler;