import React from "react";
import './style.css';
import Slides from "./Slides";
import CompanyIntro from "./CompanyIntro";
// import Services from "./Services";


const Home = (props) => {
    return(
        <div className={"homepage"}>
            <Slides/>
            <CompanyIntro/>
            {/*<Services/>*/}
        </div>
    );
}

export default Home;