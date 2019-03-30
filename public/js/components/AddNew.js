import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

// const ADD_LEAD = gql``;

class AddNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            category: '',
            name: '',
            address: '',
            phone: '',
            email: '',
            last_name: '',
            gender: '',
            website: '',
            contact_person: ''
        }
    }

    handleOptionChange = event => {
        this.setState({
            category: event.target.value,
            name: '',
            address: '',
            phone: '',
            email: '',
            last_name: '',
            gender: '',
            website: '',
            contact_person: ''
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    render(){
        return (
            <div>
                <form className="form">    
                    <h2>Add new lead</h2>
                    <div className="inputGroup">
                        <input id="person" className="rbLead" name="rbLead" value="person" type="radio" onChange={this.handleOptionChange}/>
                        <label htmlFor="person" className="leadLabel">Person</label>
                    </div>
                    <div className="inputGroup">
                        <input id="company" className="rbLead" name="rbLead" value="company" type="radio" onChange={this.handleOptionChange}/>
                        <label htmlFor="company" className="leadLabel">Company</label>
                    </div>
                </form>
                {this.state.category &&(
                    <div className="login-form">
                        <form onSubmit={this.onSubmit}>
                            <h2 className="text-center">Insert new {this.state.category}</h2>   
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" name="name" className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} required="required"/>
                                </div>
                            </div>
                            {this.state.category === 'person' ? (
                                <React.Fragment>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                            <input type="text" name="last_name" className="form-control" placeholder="Last name"  value={this.state.last_name} onChange={this.handleInputChange} required="required"/>
                                        </div>
                                    </div>  
                                    <div className="form-group">
                                        <div className="radio-group">
                                            <input type="radio" id="rbMale" className="rbGender" value="m" name="gender"/>
                                            <label htmlFor="rbMale" className="rbGenderLabel">Male</label>
                                            <input type="radio" id="rbFemale" className="rbGender" value="m" name="gender"/>
                                            <label htmlFor="rbFemale" className="rbGenderLabel">Female</label>
                                        </div>
                                    </div> 
                                </React.Fragment>  
                            ):(
                                <React.Fragment>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                            <input type="text" name="website" className="form-control" placeholder="Website"  value={this.state.website} onChange={this.handleInputChange} required="required"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                            <input type="text" name="contact_person" className="form-control" placeholder="Contact Person"  value={this.state.contact_person} onChange={this.handleInputChange} required="required"/>
                                        </div>
                                    </div>  
                                </React.Fragment> 
                            )}
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="text" name="address" className="form-control" placeholder="Address"  value={this.state.address} onChange={this.handleInputChange} required="required"/>
                                </div>
                            </div>   
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="text" name="phone" className="form-control" placeholder="Phone"  value={this.state.phone} onChange={this.handleInputChange} required="required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="email" name="email" className="form-control" placeholder="E-mail"  value={this.state.email} onChange={this.handleInputChange} required="required"/>
                                </div>
                            </div>  
                            <Mutation mutation={ADD_LEAD} variables={{ ...this.state }}>
                                {addLeadMutation => {
                                    console.log({...this.state});
                                    <div className="form-group">
                                        <button type="button" onClick={addLeadMutation} className="btn btn-primary btn-block">Submit</button>
                                    </div>  
                                }}
                            </Mutation> 
                        </form>
                    </div>
                )}
            </div>
        )
    }
}

export default AddNew;