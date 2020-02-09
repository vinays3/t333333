import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route path="/" component={Login} />

            <Route path="/cart" component={Cart} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
