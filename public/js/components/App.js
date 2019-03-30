import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './Navigation'
import Home from './Home';
import AddNew from './AddNew'
import EditDelete from './EditDelete'
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <ProtectedRoute exact path="/add-new" component={AddNew}/>
          <ProtectedRoute exact path="/edit-delete" component={EditDelete}/>
          <Route exact path="/login" component={Login}/>
          <Route path="*" component={() => "404 Not found"}/>
        </Switch>
      </div>
    )
  }
}

export default App