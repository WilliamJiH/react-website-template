import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css';

function FourOFour() {
    return (
        <div>
            <Header/>
            <div className={"row-0 justify-content-center"}>
                <div className={"col col-sm-12"}>
                    <img src={require("./images/404.png")} alt={"404"}/>
                    <h1>抱歉，该页面不存在或正在建设中！</h1>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default FourOFour;