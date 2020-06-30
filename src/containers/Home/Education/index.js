import React from 'react';

import './style.css';

function Education() {
    return (
        <div className={"education"}>
            <div className={"row justify-content-center"}>
                <div className={"title-0 col-sm-10"}>
                    <h2>海马主要海外服务范围</h2>
                </div>
            </div>
            <div className={"row justify-content-center"}>
                <div className={"col-md-8"}>
                    <div className={"row justify-content-center"}>
                        <div className={"col-md-7"}>
                            <div className={"row"}>
                                <div className={"col border rounded shadow"}>
                                    <h6 className={"text-dark mb-4 textb"}>加拿大 · Canada</h6>
                                    <h6 className={"text-dark mb-2 texta"}>安大略 · Ontario</h6>
                                    <h6 className={"text-dark mb-2 texta"}>魁北克 · Quebec</h6>
                                    <h6 className={"text-dark mb-2 texta"}>阿尔伯塔 · Alberta</h6>
                                    <h6 className={"text-dark mb-2 texta"}>不列颠哥伦比亚 · British Columbia</h6>
                                </div>
                            </div>
                            <div className={"row"}>
                                <div className={"col border rounded text-center shadow"}>
                                    <h6 className={"text-dark mb-4 textb"}>美国 · America</h6>
                                    <h6 className={"text-dark mb-2 texta"}>德州 · Texas</h6>
                                    <h6 className={"text-dark mb-2 texta"}>加州 · California</h6>
                                    <h6 className={"text-dark mb-2 texta"}>宾州 · Pennsylvania</h6>
                                    <h6 className={"text-dark mb-2 texta"}>麻省 · Massachusetts</h6>
                                    <h6 className={"text-dark mb-2 texta"}>纽约州 · New York state</h6>
                                    <h6 className={"text-dark mb-2 texta"}>加利福尼亚州 · California</h6>
                                </div>
                            </div>
                        </div>
                        <div className={"col-md-5 justify-content-center"}>
                            <img src={require("./images/Map.png")} width={"550"} height={"550"} alt={"map"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Education;