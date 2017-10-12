import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6 text-center">
              <input className="" type="text"/>
          </div>

          <div className="separator"></div>

          <div className="col-xs-6 text-center">
              <input className="" type="text"/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

