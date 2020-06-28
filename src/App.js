import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./containers/Home";
import About from "./containers/AboutUs";
import Background from "./containers/Background";
import Language from "./containers/Language";
import FourOFour from "./containers/404";
import AP from "./containers/International/AP";
import A_Level from "./containers/International/Alevel";
import Contest from "./containers/Contest";


function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path={"/"} exact={true} component={Home}/>
                    <Route path={"/about"} exact={true} component={About}/>
                    <Route path={"/background"} exact={true} component={Background}/>
                    <Route path={"/language"} exact={true} component={Language}/>
                    <Route path={"/404"} exact={true} component={FourOFour}/>
                    <Route path={"/ap"} exact={true} component={AP}/>
                    <Route path={"/alevel"} exact={true} component={A_Level}/>
                    <Route path={"/contest"} exact={true} component={Contest}/>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
