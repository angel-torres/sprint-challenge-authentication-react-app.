import React, { Component } from 'react';
import axios from 'axios';

export default class Users extends Component {
    state = {
        dadJokes: []
    }

    getUsers = e => {
        const token = localStorage.getItem('token');
        const request = {
            headers: {
                authorization: token
            }
        }
        axios
        .get('http://localhost:3300/api/jokes', request)
        .then(res => this.setState({dadJokes:res.data}))
        .catch(err => console.log(err))
    }
    logout = e => {
        localStorage.removeItem('token');
        this.props.history.push('/login')
    }
  render() {
    return (
      <div>
        <h1>Jokes</h1>
        <button onClick={this.getUsers}>Get Jokes</button>
        <button onClick={this.logout}>Logout</button>
        {this.state.dadJokes.map( joke => <h2 key={joke.id}>{joke.joke}</h2>)}
      </div>
    )
  }
}
