import React, { Component } from 'react';
import './App.css';
import AllStuff from '../components/AllStuff/AllStuff';
import Login from '../components/Login/Login';
import MyStuff from '../components/MyStuff/MyStuff';
import Register from '../components/Register/Register';

class App extends Component {
  render () {
    return (
      <div className="App">
        <AllStuff/>
        <Login/>
        <MyStuff/>
        <Register/>
      </div>
    );
  }
}

export default App;
