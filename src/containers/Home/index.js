import React from "react";
import './style.css';
import Slides from "./Slides";
import CompanyIntro from "./CompanyIntro";


const Home = (props) => {
    return(
        <div>
            <Slides/>
            <CompanyIntro/>
        </div>
    );
}

export default Home;