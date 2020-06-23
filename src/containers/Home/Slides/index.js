import React from 'react';

const Slides = () => {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"/>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"/>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"/>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"/>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"/>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className={"d-block w-100"} src={require("../images/haima.jpg")} alt={"haima"}/>
                </div>
                <div className="carousel-item">
                    <img className={"d-block w-100"} src={require("../images/amc.jpg")} alt={"amc"}/>
                </div>
                <div className="carousel-item">
                    <img className={"d-block w-100"} src={require("../images/ap.jpg")} alt={"ap"}/>
                </div>
                <div className="carousel-item">
                    <img className={"d-block w-100"} src={require("../images/duolingo.jpg")} alt={"duolingo"}/>
                </div>
                <div className="carousel-item">
                    <img className={"d-block w-100"} src={require("../images/python.jpg")} alt={"python"}/>
                </div>
            </div>
        </div>
    );
};

export default Slides;