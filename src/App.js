import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard';
import Details from './components/recipes/Detail';
import Login from './components/auth/Login';
import SignUp from './components/auth/Signup';
import Create from './components/recipes/Create';
import Edit from './components/recipes/Edit'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route path='/recipe/:id' component={Details} />
          <Route path='/login' component={Login} />
          <Route path='/signup' component={SignUp} />
          <Route path='/create' component={Create} />
          <Route path='/edit/:id' component={Edit} />
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
