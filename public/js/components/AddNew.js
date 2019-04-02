import React, { Component } from 'react';
import { Mutation } from 'react-apollo'
import { ADD_LEAD } from "../queries";

class AddNew extends Component {
    constructor(props){
        super(props);
        this.state = {
            typeOfLead: '',
            Lead: {
                name: '',
                address: '',
                phone: '',
                email: '',
                category: 'new'
            },
            Person: {
                last_name: '',
                gender: ''
            },
            Company: {
                website: '',
                contact_person: ''
            }
        }
    }

    handleOptionChange = event => {
        this.setState({
            typeOfLead: event.target.value,
        })
        this.restartState();
    }

    restartState(){
        this.setState({
            Lead: {
                name: '',
                address: '',
                phone: '',
                email: '',
                category: 'new'
            },
            Person: {
                ...this.state.Person,
                last_name: ''
            },
            Company: {
                website: '',
                contact_person: ''
            }
        })
    }

    handleGenderChange = event => {
        this.setState({
            Person: {
                ...this.state.Person,
                gender: event.target.value
            }
        })
    }

    handleInputChange = event => {
        const { name, value, className } = event.target
        const type = className.split(' ')[0];
        this.setState({
            [type]: {
                ...this.state[type],
                [name]: value
            }
        });
    }

    render(){
        return (
            <div>
                <form className="form">    
                    <h2>Add new lead</h2>
                    <div className="inputGroup">
                        <input id="person" className="rbLead" name="rbLead" value="Person" type="radio" onChange={this.handleOptionChange}/>
                        <label htmlFor="person" className="leadLabel">Person</label>
                    </div>
                    <div className="inputGroup">
                        <input id="company" className="rbLead" name="rbLead" value="Company" type="radio" onChange={this.handleOptionChange}/>
                        <label htmlFor="company" className="leadLabel">Company</label>
                    </div>
                </form>
                {this.state.typeOfLead &&(
                    <div className="login-form">
                        <form onSubmit={this.onSubmit}>
                            <h2 className="text-center">Insert new {this.state.typeOfLead}</h2>   
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                    <input type="text" name="name" className="Lead form-control" placeholder="Name" value={this.state.Lead.name} onChange={this.handleInputChange} required="required"/>
                                </div>
                            </div>
                            {this.state.typeOfLead === 'Person' ? (
                                <React.Fragment>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                            <input type="text" name="last_name" className="Person form-control" placeholder="Last name"  value={this.state.Person.last_name} onChange={this.handleInputChange} required="required"/>
                                        </div>
                                    </div>  
                                    <div className="form-group">
                                        <div className="radio-group">
                                            <input type="radio" id="rbMale" className="Person rbGender" onChange={this.handleGenderChange} value="m" name="gender"/>
                                            <label htmlFor="rbMale" className="rbGenderLabel">Male</label>
                                            <input type="radio" id="rbFemale" className="Person rbGender" onChange={this.handleGenderChange} value="f" name="gender"/>
                                            <label htmlFor="rbFemale" className="rbGenderLabel">Female</label>
                                        </div>
                                    </div> 
                                </React.Fragment>  
                            ):(
                                <React.Fragment>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                            <input type="text" name="website" className="Company form-control" placeholder="Website"  value={this.state.Company.website} onChange={this.handleInputChange} required="required"/>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                            <input type="text" name="contact_person" className="Company form-control" placeholder="Contact Person"  value={this.state.Company.contact_person} onChange={this.handleInputChange} required="required"/>
                                        </div>
                                    </div>  
                                </React.Fragment> 
                            )}
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="text" name="address" className="Lead form-control" placeholder="Address"  value={this.state.Lead.address} onChange={this.handleInputChange} required="required"/>
                                </div>
                            </div>   
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="text" name="phone" className="Lead form-control" placeholder="Phone"  value={this.state.Lead.phone} onChange={this.handleInputChange} required="required"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                    <input type="email" name="email" className="Lead form-control" placeholder="E-mail"  value={this.state.Lead.email} onChange={this.handleInputChange} required="required"/>
                                </div>
                            </div>  
                            <Mutation mutation={ADD_LEAD} variables={{ input: {...this.state.Lead, [this.state.typeOfLead]: {...this.state[this.state.typeOfLead]}}}}>
                                {addLeadMutation => {
                                    return (
                                        <div className="form-group">
                                            <button 
                                                type="button" 
                                                onClick={() => { addLeadMutation(), this.restartState() }} 
                                                className="btn btn-primary btn-block"
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    )  
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