import React from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";

import PeliculasAlquiladas from "./PeliculasAlquiladas";
import AlquilarPelicula from "./AlquilarPelicula";

class Alquiler extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AlquilarPelicula />
                <PeliculasAlquiladas />
            </div>
        );
    }
}
export default Alquiler;