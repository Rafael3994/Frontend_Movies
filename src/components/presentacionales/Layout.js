import React from 'react';
import { Link, Navigate, Outlet } from "react-router-dom";


class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="App mx-5">
                <div className="d-flex col-8 flex-column mx-auto">
                    <Outlet />
                </div>
            </div>
        );
    }
}
export default Layout;