
import React from 'react';
import { Link, Navigate, Outlet  } from "react-router-dom";


class NavbarWithoutLogin extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
                    <div className='mx-5'>
                    <a class="navbar-brand" href="#">Home</a>
                    <a class="navbar-brand mx-3" href="#">Login</a>
                    <a class="navbar-brand mx-3" href="#">Register</a>
                    </div>
                </nav>
                <Outlet/>
            </div>
        );
    }
}
export default NavbarWithoutLogin;