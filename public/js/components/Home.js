import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_ALL_LEADS = gql`
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
        },
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
`
class Home extends Component {
    render(){
        return (
            <div className="container">
                <Query query={GET_ALL_LEADS}>
                    {({loading, error, data}) => {
                        if (loading) return "Loading...."
                        if (error) return `Error! ${error.message}`;

                        return(
                            <div>
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.persons.map(row => {
                                            return (
                                                <tr key={row.id}>
                                                    <td>{row.name}</td>
                                                    <td>{row.Person.last_name}</td>
                                                    <td>{row.Person.gender}</td>
                                                    <td>{row.address}</td>
                                                    <td>{row.phone}</td>
                                                    <td>{row.email}</td>
                                                    <td>{row.category}</td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
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
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        )
                    }}
                </Query>
            </div>
        )
    }
}

export default Home;