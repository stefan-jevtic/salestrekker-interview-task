import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_PERSONS = gql`
    query {
        persons {
            id
            name,
            Person {
                last_name,
                gender
            },
            address,
            phone,
            email,
            category
        }
    }
`;

const GET_COMPANIES = gql`
    query {
        companies {
            id
            name,
            Company {
                contact_person,
                website
            },
            address,
            phone,
            email,
            category
        }
    }
`;

class EditDelete extends Component {
    constructor(props){
        super(props);
        this.state = {
            typeOfLead: '',
            edit: false
        }
    }

    handleOptionChange = event => {
        this.setState({
            typeOfLead: event.target.value,
        })
    }

    changeMode = () => {
        this.state = {
            edit: !this.state.edit
        }
    }

    render(){
        return (
            <div className="container">
                <form className="form">    
                    <h2>Edit/Delete leads</h2>
                    <div className="inputGroup">
                        <input id="person" className="rbLead" name="rbLead" value="Person" type="radio" onChange={this.handleOptionChange}/>
                        <label htmlFor="person" className="leadLabel">Person</label>
                    </div>
                    <div className="inputGroup">
                        <input id="company" className="rbLead" name="rbLead" value="Company" type="radio" onChange={this.handleOptionChange}/>
                        <label htmlFor="company" className="leadLabel">Company</label>
                    </div>
                </form>
                {this.state.typeOfLead === 'Person' ? (
                    <Query query={GET_PERSONS}>
                        {({ loading, error, data }) => {
                            if (loading) return "Loading...."
                            if (error) return `Error! ${error.message}`;
                            return (
                                <React.Fragment>
                                    <h3>List of Persons:</h3>
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">First name</th>
                                                <th scope="col">Last name</th>
                                                <th scope="col">Gender</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Edit</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.persons.map(row => {
                                                return (
                                                    <tr key={row.id}>
                                                        <td>{!this.state.edit ? row.name : <input type="text" value="kurac"/>}</td>
                                                        <td>{row.Person.last_name}</td>
                                                        <td>{row.Person.gender}</td>
                                                        <td>{row.address}</td>
                                                        <td>{row.phone}</td>
                                                        <td>{row.email}</td>
                                                        <td>{row.category}</td>
                                                        <td>{!this.state.edit ? <button className="btn btn-warning" onClick={this.changeMode}>Edit</button> : <button className="btn btn-info">Confirm</button>}</td>
                                                        <td>{!this.state.edit ? <button className="btn btn-danger">Delete</button> : <button className="btn btn-danger" onClick={this.changeMode}>Cancel</button>}</td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </React.Fragment>
                            )
                        }}
                    </Query>
                ) : this.state.typeOfLead === "Company" ? (
                    <Query query={GET_COMPANIES}>
                        {({loading, error, data}) => {
                             if (loading) return "Loading...."
                             if (error) return `Error! ${error.message}`;
                             return (
                                <React.Fragment>
                                    <h3>List of Companies:</h3>
                                    <table className="table">
                                        <thead className="thead-dark">
                                            <tr>
                                                <th scope="col">Name</th>
                                                <th scope="col">Website</th>
                                                <th scope="col">Contact person</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Email</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Edit</th>
                                                <th scope="col">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.companies.map(row => {
                                                return (
                                                    <tr key={row.id}>
                                                        <td>{row.name}</td>
                                                        <td>{row.Company.website}</td>
                                                        <td>{row.Company.contact_person}</td>
                                                        <td>{row.address}</td>
                                                        <td>{row.phone}</td>
                                                        <td>{row.email}</td>
                                                        <td>{row.category}</td>
                                                        <td><button className="btn btn-warning">Edit</button></td>
                                                        <td><button className="btn btn-danger">Delete</button></td>
                                                    </tr>
                                                )
                                            })}
                                        </tbody>
                                    </table>
                                </React.Fragment>
                             )
                        }}
                    </Query>
                ) : (
                    <div></div>
                )}
            </div>
        )
    }
}

export default EditDelete;