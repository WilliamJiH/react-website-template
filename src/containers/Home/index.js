import React from "react";
import './style.css';
import Slides from "./Slides";
import CompanyIntro from "./CompanyIntro";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Services from "./Services";

// import Services from "./Services";


function Home() {
    return (
        <div className={"homepage"}>
            <Header/>
            <Slides/>
            <CompanyIntro/>
            <Services/>
            <Footer/>
        </div>
    );
}

export default Home;