import React, { useState } from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";


import UserService from "../../../services/user.service";

import PeliculasAlquiladas from "./PeliculasAlquiladas";
import AlquilarPelicula from "./AlquilarPelicula";

function Alquiler() {
    const [isToken, setIsToken] = useState(UserService.getCurrentUser() !== null);

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

export default Alquiler;