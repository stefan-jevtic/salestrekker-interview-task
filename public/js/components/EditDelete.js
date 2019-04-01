import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';
import DataTable from "./DataTable";

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
            typeOfLead: ''
        }
    }

    handleOptionChange = event => {
        this.setState({
            typeOfLead: event.target.value,
        })
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
                {this.state.typeOfLead ? (
                    <Query query={this.state.typeOfLead === 'Person' ? GET_PERSONS : GET_COMPANIES}>
                        {({ loading, error, data }) => {
                            if (loading) return "Loading...."
                            if (error) return `Error! ${error.message}`;
                            return (
                                <DataTable type={this.state.typeOfLead} data={data}/>
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