import React from 'react';
import './style.css';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Contest() {
    return (
        <div className={"contest"}>
            <Header/>
            <div className={"row justify-content-center"}>
                <div className={"title-0 col-sm-10"}>
                    <h1>海马国际教育竞赛课程</h1>
                    <p>
                        众所周知，学有余力的情况下，冲击名校竞赛是一个重要的申请加分项。海马国际教育联合顶级名校博士，打造了AMC数学竞赛，
                        Physics Bowl物理竞赛，ICPC大学生程序设计竞赛，以及IOI国际信息学奥林匹克竞赛四大课程体系。
                    </p>
                </div>
            </div>
            <div className={"row justify-content-center pb-5"}>
                <div className={"col col-sm-2 mr-3 border rounded shadow"}>
                    <img src={require("./images/amc.png")} width={"130"} height={"100"} alt={"amc"}/>
                    <h4>海马AMC</h4>
                    <p>
                        AMC是美国数学协会举办的美国最大的数学竞赛。这项竞赛始于1950年。最初，AMC被称为年度高中数学考试。 AMC竞赛的目的是
                        提高美国青少年的数学技能，并培养他们对数学的兴趣。AMC在促进美国中学数学教育中发挥着非常重要的作用。
                    </p>
                    <br/>
                    <a className={"more"} href={"/404"}>更多详情>>></a>
                </div>
                <div className={"col col-sm-2 ml-3 mr-3 border rounded shadow"}>
                    <img src={require("./images/phy.png")} width={"130"} height={"100"} alt={"phy"}/>
                    <h4>海马物理杯</h4>
                    <p>
                        PhysicsBowl是由美国物理教师协会（AAPT）举办的年度物理竞赛。经验丰富的注册物理老师和教授齐心协力编写比赛问题并
                        评判结果。物理杯分A组和B组两个等级，分别对应高低年级， 考试是选择题形式。2015年开始在中国设立考点，
                        在国内参与度较高，是最负盛名的物理竞赛。
                    </p>
                    <br/>
                    <a className={"more"} href={"/404"}>更多详情>>></a>
                </div>
                <div className={"col col-sm-2 ml-3 mr-3 border rounded shadow"}>
                    <img src={require("./images/icpc.png")} width={"130"} height={"100"} alt={"icpc"}/>
                    <h4>海马ICPC</h4>
                    <p>
                        国际大学生程序设计竞赛（ICPC）是一项旨在展示大学生创新能力、团队精神和在压力下编写程序、分析和解决问题能力的年度
                        竞赛。经过30多年的发展，国际大学生程序设计竞赛已经发展成为最具影响力的大学生计算机竞赛。
                    </p>
                    <br/>
                    <a className={"more"} href={"/404"}>更多详情>>></a>
                </div>
                <div className={"col col-sm-2 ml-3 border rounded shadow"}>
                    <img src={require("./images/ioi.png")} width={"130"} height={"100"} alt={"ioi"}/>
                    <h4>海马IOI预备课</h4>
                    <p>
                        IOI是国际信息学奥林匹克竞赛，是面向初/高中学生一年一度的信息学竞赛。这项竞赛包含两天的电脑程式设计，主要编程语言
                        以C++为主，解决各类算法问题。选手以个人为单位，每个国家最多可选派4名选手参加。参赛选手从各国相应计算机竞赛中选拔。
                    </p>
                    <br/>
                    <a className={"more"} href={"/404"}>更多详情>>></a>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Contest;