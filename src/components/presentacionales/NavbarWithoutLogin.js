import React from 'react';
import {  Outlet, Link  } from "react-router-dom";


class NavbarWithoutLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <div className='mx-5'>
                    <Link to='/' className="navbar-brand mx-3">Home</Link>
                    <Link to='/loginUser' className="navbar-brand mx-3">Login</Link>
                    <Link to='/registerUser' className="navbar-brand mx-3">Register</Link>
                    </div>
                </nav>
                <Outlet/>
            </div>
        );
    }
}
export default NavbarWithoutLogin;