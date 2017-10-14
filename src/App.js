import React, {Component} from 'react';
import logo from './logo.svg';
import dominicanFlag from './assets/images/dominican.jpg';
import usaFlag from './assets/images/usa.jpg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="header">
                    <h2 className="text-center">CURRENCY TRANSLATOR</h2>
                </div>
                <div className="row">

                    <div className="col-xs-5 text-center">
                        <div className="vertical-center">
                            <div className="row ">
                                <div className="col-xs-5"></div>
                                <div className="col-xs-4 ">
                                    <img className="img img-thumbnail" src={dominicanFlag} width="200" height="95"/>
                                    <div className="input-group">
                                        <span className="input-group-addon">$</span>
                                        <input type="number" step="any" className="form-control"
                                               placeholder="DOP"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-2 text-center ">
                        <div className="top-separator"></div>
                        <div className="btn-vertical-center">
                            <button className="btn btn-primary">Translate</button>
                        </div>
                        <div className="bottom-separator"></div>
                    </div>

                    <div className="col-xs-5  text-center">
                        <div className="vertical-center">
                            <div className="row ">
                                <div className="col-xs-3"></div>
                                <div className="col-xs-4 ">
                                    <img className="img img-thumbnail" src={usaFlag} width="200" height="95"/>
                                    <div className="input-group">
                                        <span className="input-group-addon">$</span>
                                        <input readOnly type="text" className="form-control"
                                               placeholder="USD"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;


