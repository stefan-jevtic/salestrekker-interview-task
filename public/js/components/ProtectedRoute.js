import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const authToken = localStorage.getItem('AUTH_TOKEN')
    const hasPrivilege = JSON.parse(localStorage.getItem('HAS_PRIVILEGE'))
    return (
        <Route
            {...rest}
            render={props => {
                if (hasPrivilege && authToken) return <Component {...props} />
                else {
                    return (
                        <Redirect
                            to={{
                                pathname: '/',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    )
                }
            }}
        />
    )
}

export default ProtectedRoute
