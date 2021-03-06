import React from 'react';
import dominicanFlag from '../assets/images/dominican.jpg';
import usaFlag from '../assets/images/usa.jpg';
import rates from '../rates';

class Translator extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dop: '',
            usd: ''
        };
    }

    translateCurrency = (evt) => {
        evt.preventDefault();

        if(!this.state.dop) return;

        this.setState({
            usd: parseFloat(this.state.dop / rates.dollar.dop).toFixed(2)
        });
    };

    onInputChange = (evt) => {
        const field = evt.target.name;
        const value = evt.target.value;

        this.setState({
            [field]: value
        });
    };

    render() {
        return (
            <form onSubmit={this.translateCurrency} className="row">
                <div className="col-xs-5 text-center">
                    <div className="vertical-center">
                        <div className="row ">
                            <div className="col-xs-4 col-xs-offset-5">
                                <img className="img img-thumbnail" src={dominicanFlag} width="200" height="95"/>
                                <div className="input-group">
                                    <span className="input-group-addon">$</span>
                                    <input value={this.state.dop} onChange={this.onInputChange} name="dop" type="number" step="any" className="form-control"
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
                            <div className="col-xs-4 col-xs-offset-3">
                                <img className="img img-thumbnail" src={usaFlag} width="200" height="95"/>
                                <div className="input-group">
                                    <span className="input-group-addon">$</span>
                                    <input value={this.state.usd} readOnly type="text" className="form-control"
                                           placeholder="USD"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        )
    }
}

export default Translator;