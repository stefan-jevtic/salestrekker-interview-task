import React, { Component } from 'react';
export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username : '',
      password: ''
    };
  }

  handleInputChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  onSubmit = event => { 
    event.preventDefault();
    // will implement later
  }

  render() {
    return (
        <div className="login-form">
            <form onSubmit={this.onSubmit}>
                <h2 className="text-center">Log In</h2>   
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-user"></i></span>
                        <input type="text" name="username" className="form-control" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} required="required"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-group">
                        <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                        <input type="password" name="password" className="form-control" placeholder="Password"  value={this.state.password} onChange={this.handleInputChange} required="required"/>
                    </div>
                </div>        
                <div className="form-group">
                    <button type="submit" className="btn btn-primary btn-block">Log in</button>
                </div>      
            </form>
        </div>
    );
  }
}