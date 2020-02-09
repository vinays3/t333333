import React, { Component } from 'react';

import { Redirect } from 'react-router-dom'
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { username, password } = this.state;
    //const { history } = this.props;

    this.setState({ error: false });

    if (!(username === 'vinay' && password === 'pwd')) {
      return this.setState({ error: true });
    }

    this.setState({
      loggedIn: true
    });
    this.props.history.push("/home");
  }

  changeUserName = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  changeUserPassword = (event) => {
    this.setState({
      password: event.target.value
    });
  }

  render() {
    //const { from } = { from: { pathname: '/home' } }
    const { from } = this.props.location.state || { from: { pathname: '/home' } }
    if (this.state.loggedIn === true) {
      return <Redirect to={from} />
    }
    return (
      <div className="container" >
        <h3 className="center">Login</h3>
        <div>
          Name: <input type="text" value={this.state.username} onChange={this.changeUserName} />
        </div>
        <div>
          Password: <input type="password" value={this.state.password} onChange={this.changeUserPassword} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <button className="waves-effect waves-light btn green remove" onClick={this.onSubmit}>Login</button>
        </div>
      </div>
    )
  }
}


export default Login