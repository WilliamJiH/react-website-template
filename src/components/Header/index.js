import React from 'react';
import "./style.css";


const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            <a className="navbar-brand" href="/">
                <img src={require("../images/logo128.png")} alt={"Logo"}/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarToggler"
                    aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className={"nav-item"}><a className="nav-link" href="/">首页</a></li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            国际课程
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/">AP 课程</a>
                            <a className="dropdown-item" href="/">A-Level 课程</a>
                        </div>
                    </li>
                    <li className={"nav-item"}><a className="nav-link" href="/">语言培训</a></li>
                    <li className={"nav-item"}><a className="nav-link" href="/">竞赛项目</a></li>
                    <li className={"nav-item"}><a className="nav-item nav-link" href="/">背景提升</a></li>
                    <li className={"nav-item"}><a className="nav-item nav-link" href="/">关于我们</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;

