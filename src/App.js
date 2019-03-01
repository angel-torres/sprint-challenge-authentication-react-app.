import React, { Component } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Users from './components/Users';
import { Route, NavLink } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
        <NavLink to='/users'>Users</NavLink>
        <hr/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/users' component={Users}/>
      </div>
    );
  }
}

export default App;
