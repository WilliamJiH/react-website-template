import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css';

function Background() {
    return(
        <div className={"backgrounds"}>
            <Header/>
            <div className={"row justify-content-center"}>
                <div className={"title-0 col-sm-10"}>
                    <h1>海马国际教育背景提升计划</h1>
                    <p>
                        海马国际教育背景提升计划是针对处于留学申请早期阶段的学生设立的一系列的提高计划。
                        分别有编程项目训练、名企实习、游学夏令营、义工项目等针对申请加分项所研发的项目供您选择。
                    </p>
                </div>
            </div>
            <div className={"row justify-content-center pb-5"}>
                <div className={"col col-sm mr-3 border rounded shadow"}>
                    <img src={require("./images/cs.png")} width={"70"} height={"70"} alt={"cs"}/>
                    <h4>编程项目训练</h4>
                    <p>
                        海马国际教育核心项目，由海马创始人亲自指导，计算机作为热门专业备受欢迎，但申请计算机专业没有任何基础知识怎么行？
                        海马国际教育精心研发了零基础到精通的计算机课程，循序渐进，最后可以根据学生兴趣做出一个可以提交到申请的项目，
                        并提供三大方向（机器学习/网页设计/游戏设计）进阶课程可供选择。
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 mr-3 border rounded shadow"}>
                    <img src={require("./images/comp.png")} width={"70"} height={"70"} alt={"comp"}/>
                    <h4>名企实习</h4>
                    <p>
                        海马国际教育跟国内部分大公司有良好的合作，可以帮助学生申请短期（1-3）个月名企实习并拿到实习证明
                        优秀的实习经历对于申请来说很加分哦！
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 mr-3 border rounded shadow"}>
                    <img src={require("./images/camp.png")} width={"70"} height={"70"} alt={"camp"}/>
                    <h4>游学夏令营</h4>
                    <p>
                        海马国际教育跟部分国外名校有这紧密联系，参加夏令营或者游学能近距离接触学校负责人，了解学校环境及各方面情况，
                        全部项目都提供相应的证明或证书，对申请有一定帮助。
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 border rounded shadow"}>
                    <img src={require("./images/eco.png")} width={"70"} height={"70"} alt={"eco"}/>
                    <h4>义工项目</h4>
                    <p>
                        海马国际教育可以在境内外帮助学生安排义工活动，一方面让学生体会到劳动的辛苦，另一方面对学生背景多样化提升有很大益处。
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Background;