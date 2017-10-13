import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6 text-center">
              <div className="row input-currency">
                  <div className="col-xs-4"></div>
                  <div className="col-xs-4">
                      <input className="form-control" type="text"/>
                  </div>
                  <div className="col-xs-4"></div>
              </div>
          </div>

          <div className="separator"></div>

          <div className="col-xs-6 text-center">
              <div className="row">
                  <div className="col-xs-4"></div>
                  <div className="col-xs-4">
                      <input className="form-control" type="text"/>
                  </div>
                  <div className="col-xs-4"></div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


