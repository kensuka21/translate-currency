import React, {Component} from 'react';
import './App.css';
import Translator from "./components/Translator";
import Header from "./components/Header";

class App extends Component {

    render() {
        return (
            <div className="container-fluid">
                <Header title="CURRENCY TRANSLATOR"/>

                <Translator/>
            </div>
        );
    }
}

export default App;


