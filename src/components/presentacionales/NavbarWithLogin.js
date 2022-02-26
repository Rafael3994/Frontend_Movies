import React from 'react';
import {  Outlet, Link  } from "react-router-dom";


class NavbarWithLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <div className='mx-5'>
                    <Link to='/alquiler' className="navbar-brand mx-3">Alquiler</Link>
                    <Link to='/peliculas' className="navbar-brand mx-3">Peliculas</Link>
                    <Link to='/modificarUser' className="navbar-brand mx-3">Modificar Perfil</Link>
                    <Link to='/registerUser' className="navbar-brand mx-3">Logout</Link>
                    </div>
                </nav>
                <Outlet/>
            </div>
        );
    }
}
export default NavbarWithLogin;