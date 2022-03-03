import React from 'react';

import { Link, Navigate } from "react-router-dom";
import UserService from "./../../../services/user.service";


class ModificarUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nameUser: "",
            email: "",
            password: "",
            isToken: UserService.getCurrentUser() !== null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);        
    }

    componentDidMount() {
        
    }

    handleSubmit(e) {
        e.preventDefault();
        UserService.upadate(this.state.password, this.state.nameUser).then((res) => {
            console.log(res);
            if(res) {
                alert('Datos modificados');
            } else {
                alert('No se pudo modificadar');
            }
        })
    }

    handleChange(e) {
        // console.log(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value });
    }
    
    render() {
        // console.log(this.state);
        const { isToken, dataForm } = this.state;
        return (
            <div>
                {!isToken && (
                    <Navigate to="/" />
                )}
                <h2 className="mb-5">Modificar User</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        {/* <label className="margin-right-5">Email
                            <input
                                name="email" value={this.state.email} onChange={this.handleChange} required type="text" className="form-control" placeholder="Enter your Email">
                            </input>
                        </label> */}
                        <label>Password
                            <input
                                name="password" value={this.state.password} onChange={this.handleChange} required type="password" className="form-control" placeholder="Enter your Password">
                            </input>
                        </label>
                        <br></br><br></br>
                        <label>Name
                            <input
                                name="nameUser" value={this.state.nameUser} onChange={this.handleChange} required type="text" className="form-control" placeholder="Enter your Name">
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
}
export default ModificarUser;