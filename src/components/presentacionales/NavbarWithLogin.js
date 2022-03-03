import React from 'react';
import {  Outlet, Link  } from "react-router-dom";

import UserService from './../../services/user.service';


class NavbarWithLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <div className='mx-5'>
                        <Link to='/users' className="navbar-brand mx-3">Alquiler</Link>
                        <Link to='/peliculas' className="navbar-brand mx-3">Peliculas</Link>
                        <Link to='/users/modificarUser' className="navbar-brand mx-3">Modificar Perfil</Link>
                        <Link to='/' onClick={UserService.logout} className="navbar-brand mx-3">Logout</Link>
                    </div>
                </nav>
                <Outlet/>
            </div>
        );
    }
}
export default NavbarWithLogin;