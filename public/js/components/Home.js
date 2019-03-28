import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_ALL_LEADS = gql`
    query {
        leads {
            name,
            address,
            phone,
            email
        }
    }
`
class Home extends Component {
    render(){
        return (
            <div>
                <Query query={GET_ALL_LEADS}>
                    {(loading, error, data) => {
                        console.log(data, loading, error);
                        if (loading) return "Loading...."
                        if (error) return `Error! ${error.message}`;

                        return(
                            <div>
                                <table className="table">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">Name</th>
                                            <th scope="col">Address</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.leads.map(row => {
                                            <div>
                                                <td>{row.name}</td>
                                                <td>{row.address}</td>
                                                <td>{row.phone}</td>
                                                <td>{row.email}</td>
                                            </div>
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