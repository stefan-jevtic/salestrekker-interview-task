import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './Navigation'
import Home from './Home';
import AddNew from './AddNew'
import EditDelete from './EditDelete'
import Login from './Login';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/add-new" component={AddNew}/>
          <Route exact path="/edit-delete" component={EditDelete}/>
          <Route exact path="/login" component={Login}/>
        </Switch>
      </div>
    )
  }
}

export default App