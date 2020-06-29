import React from 'react';
import "./style.css";

const Header = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-lg">
            <div className={"d-flex flex-grow-1"}>
                <span className="w-100 d-lg-none d-block"/>
                <a className="navbar-brand" href="/">
                    {/*<images src={require("../images/logo128.png")} alt={"Logo"}/>*/}
                    海马国际教育
                </a>
                <div className={"w-100 text-right"}>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02"
                            aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                </div>
            </div>
            <div className="collapse navbar-collapse navbar-right" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto navbar-right">
                    <li className="nav-item active">
                        <a href={"/"} className="nav-link">首页</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/ap" id="navbarDropdown"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            国际课程
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/ap">AP 课程</a>
                            <a className="dropdown-item" href="/alevel">A-Level 课程</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a href={"/language"} className="nav-link">语言培训</a>
                    </li>
                    <li className="nav-item">
                        <a href="/contest" className="nav-link">竞赛项目</a>
                    </li>
                    <li className="nav-item">
                        <a href="/background" className="nav-link">背景提升</a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">关于我们</a>
                    </li>
                </ul>
            </div>
        </nav>

    );
};

export default Header;

