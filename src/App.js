import React from 'react';
import './App.css';
import Home from "./containers/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Headerfix from "./components/Headerfix";


function App() {
    return (
        <div className="App">
            <Headerfix/>
            <Header/>
            <Home/>
        </div>
    );
}

export default App;
