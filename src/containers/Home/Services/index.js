import React from 'react';
import './style.css';

const Services = () => {
    return (
        <div className={"Services"}>
            <div className={"text-h1-inner"}>
                <h1>为什么选择海马教育</h1>
            </div>
            <div className={"text-p4-inner"}>
                <h2>四大专属服务</h2>
            </div>
            <div className="row justify-content-center">
                <div className={"col mr-4"}>
                    <img src={require("../images/guihua.png")} alt={"plan"} width={"80"} height={"80"}
                         className={"img"}/>
                    <h3 className={"text-x"}>学术规划</h3>
                </div>
                <div className={"col ml-4 mr-4"}>
                    <img src={require("../images/fudao.png")} alt={"tutorial"} width={"80"} height={"80"}
                         className={"img"}/>
                    <h3 className={"text-x"}>学术辅导</h3>
                </div>
                <div className={"col ml-4 mr-4"}>
                    <img src={require("../images/ducu.png")} alt={"ducu"} width={"80"} height={"80"} className={"img"}/>
                    <h3 className={"text-x"}>学术督促</h3>
                </div>
                <div className={"col ml-4"}>
                    <img src={require("../images/fankui.png")} alt={"feedback"} width={"80"} height={"80"}
                         className={"img"}/>
                    <h3 className={"text-x"}>学术反馈</h3>
                </div>
            </div>
            <div className={"text-p4-inner"}>
                <h2>三大质量保障</h2>
            </div>
            <div className="row justify-content-center">
                <div className={"col mr-4"}>
                    <img src={require("../images/Teacher.png")} alt={"teacher"} width={"80"} height={"80"}
                         className={"img"}/>
                    <h3 className={"text-x"}>顶级师资，专业！</h3>
                    <h3 className={"text-y"}>
                        所有授课教师均具有顶级海归或985硕士以上学历，平均授课经验5年以上，国际教育经验3年以上，定期教研、培训、磨课，
                        让老师比学校更专业。
                    </h3>
                </div>
                <div className={"col ml-4 mr-4"}>
                    <img src={require("../images/Service.png")} alt={"service"} width={"80"} height={"80"}
                         className={"img"}/>
                    <h3 className={"text-x"}>全程服务，负责！</h3>
                    <h3 className={"text-y"}>
                        拥有完善闭环的服务体系，学术规划、学术辅导、学术督促、学术反馈四位一体，得到家长学生们的一致好评，效果看的见。
                    </h3>
                </div>
                <div className={"col ml-4 mr-4"}>
                    <img src={require("../images/Money.png")} alt={"money"} width={"80"} height={"80"} className={"img"}/>
                    <h3 className={"text-x"}>无效退费，放心！</h3>
                    <h3 className={"text-y"}>
                        相比线下机构昂贵学费，推出了多种优惠组合方式。全程无理由退款剩余费用，保障您的合理权益。
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Services;