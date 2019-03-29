import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {
    constructor(props){
        super(props);
    }
    render(){
        const authToken = localStorage.getItem('AUTH_TOKEN');
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <Link to="/" className="navbar-brand">
                        Salestrekker
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/add-new" className="nav-link">
                                    Add new
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/edit-delete" className="nav-link">
                                    Edit/delete
                                </Link>
                            </li>
                            <li className="nav-item">
                                {!authToken ? (
                                    <Link to="/login" className="nav-link">
                                        Login
                                    </Link>
                                ) : (
                                    <a 
                                    className="nav-link"
                                    href="#" 
                                    onClick={(e) => {
                                        e.preventDefault();
                                        localStorage.removeItem('AUTH_TOKEN');
                                        window.location.href = '/';
                                    }}
                                    >
                                        Logout
                                    </a>
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Nav