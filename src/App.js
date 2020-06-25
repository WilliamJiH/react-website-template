import React from 'react';
import './App.css';
import Home from "./containers/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
// import Headerfix from "./components/Headerfix";
import Footer from "./components/Footer";


function App() {
    return (
        <div className="App">
            {/*<Headerfix/>*/}
            <Header/>
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
