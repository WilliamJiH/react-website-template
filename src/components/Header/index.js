import React from 'react';
import "./style.css";

const Header = (props) => {
    return (
        <div className={"main-navigation"}>
            <div className={"inner-navigation"}>
                <div className={"logo"}>
                    <img src={require("../images/logo128.png")} alt={" "}/>
                </div>
                <div className={"navMenu"}>
                    <ul>
                        <li><a href={"#home"}>首页</a></li>
                        <li><a href={"#lectures"}>国际课程</a></li>
                        <li><a href={"#language"}>语言培训</a></li>
                        <li><a href={"#contest"}>竞赛项目</a></li>
                        <li><a href={"#background"}>背景提升</a></li>
                        <li><a href={"#about-us"}>关于我们</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Header;