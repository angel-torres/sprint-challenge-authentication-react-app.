import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {
  state = {
    username: '',
    password: ''
  }
  
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = e => {
    e.preventDefault();
    axios
    .post('http://localhost:3300/api/login', this.state)
    .then(res => {
      this.props.history.push('/users')
      localStorage.setItem('token', res.data.token)
  })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div>
          <form onSubmit={this.login}>
            <input onChange={this.handleChanges} name='username' value={this.state.username}></input>
            <input onChange={this.handleChanges} name='password' value={this.state.password}></input>
            <button>Login</button>
          </form>
        </div>
      </div>
    )
  }
}
