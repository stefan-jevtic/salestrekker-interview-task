import React, { Component } from 'react'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleInputChange = event => {
        const { value, name } = event.target
        this.setState({
            [name]: value,
        })
    }

    onSubmit = event => {
        event.preventDefault()
        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(data => this._check(data))
            .catch(err => console.log(err))
    }

    _check = data => {
        if (data.status === 'success') this._confirm(data)
        else {
            this.setState({
                email: '',
                password: '',
            })
        }
    }

    _confirm = ({ token, manager }) => {
        localStorage.setItem('AUTH_TOKEN', token)
        localStorage.setItem('HAS_PRIVILEGE', manager)
        window.location.href = '/'
    }

    render() {
        return (
            <div className="login-form">
                <form onSubmit={this.onSubmit}>
                    <h2 className="text-center">Log In</h2>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-user" />
                            </span>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                placeholder="E-mail"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                                required="required"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="fa fa-lock" />
                            </span>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                placeholder="Password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                                required="required"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block">
                            Log in
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}
