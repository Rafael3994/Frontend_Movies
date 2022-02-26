import React from "react";
import { Link, Navigate } from "react-router-dom";
// import AuthService from "../services/auth.service";

class RegisterUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = { 
            email: "",
            password: "", 
            nameUser: "", 
            isLogged: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        // e.preventDefault();
        // AuthService.register(
        //     this.state.email, this.state.password, 
        //     this.state.nameUser, this.state.subname)
        //         .then((res) => {
        //             if(res) {
        //                 this.setState({isLogged: true});
        //             }
        //         })
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { isLogged } = this.state;
        return (
            <div>
                {isLogged && (
                    // TODO: CHANGE
                    <Navigate to="/mostrarMascotas" replace={true} />
                )}
                <h2 className="mb-5">Registrarse</h2>
                <form /*onSubmit={this.handleSubmit}*/>
                    <div className="form-group">
                        <label className="margin-right-5">Email
                            <input
                                name="email" value={this.state.email} onChange={this.handleChange} required type="text" className="form-control" placeholder="Enter your Email">
                            </input>
                        </label>
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
                        <button type="submit" className="btn btn-primary margin-right-5">Register</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default RegisterUser;