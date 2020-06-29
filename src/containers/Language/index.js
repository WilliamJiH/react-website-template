import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css';

function Language() {
    return (
        <div className={"language"}>
            <Header/>
            <div className={"row justify-content-center"}>
                <div className={"title-0 col-sm-10"}>
                    <h1>海马国际教育语言课程</h1>
                    <p>
                        针对多邻国英语考试、托福考试、雅思考试、SAT考试、GRE考试等开设有一对一基础班，提高班；寒暑假专题班课等班型
                        海马国际教育四大专属服务，让学生学得会，记得牢，有督促，有反馈。提升效果十分显著。
                    </p>
                </div>
            </div>
            <div className={"row justify-content-center pb-5"}>
                <div className={"col col-sm mr-3 border rounded shadow"}>
                    <img src={require("./images/ielts.png")} width={"130"} height={"100"} alt={"ielts"}/>
                    <h4>海马雅思</h4>
                    <p>
                        采用基于剑桥雅思最新材料辅以本地考试经验技巧编撰而成的海马雅思专用教材。最终保证学生可以在原有的雅思分数基础上，
                        每科目至少提高1 – 1.5分。
                    </p>
                    <br/>
                    <a className={"more"} href={"/404"}>更多详情>>></a>
                </div>
                <div className={"col col-sm ml-3 mr-3 border rounded shadow"}>
                    <img src={require("./images/toefl.png")} width={"130"} height={"100"} alt={"toefl"}/>
                    <h4>海马托福</h4>
                    <p>
                        海马国际教育多年精品课程，英语能力提升首选，分单词/听/说/读/写五项教学，重基础，强练习。专属老师每日督促检查，
                        杜绝学生懒惰行为。
                    </p>
                    <br/>
                    <a className={"more"} href={"/404"}>更多详情>>></a>
                </div>
                <div className={"col col-sm ml-3 mr-3 border rounded shadow"}>
                    <img src={require("./images/sat.png")} width={"130"} height={"100"} alt={"sat"}/>
                    <h4>海马SAT</h4>
                    <p>
                        SAT虽然最近被很多大学从必须降成可选，但对于中国学生，必要性还是很高。海马国际教育SAT课程分为5大板块，
                        单词/阅读/语法/数学/作文分别授课，让SAT提分不再困难。
                    </p>
                    <br/>
                    <a className={"more"} href={"/404"}>更多详情>>></a>
                </div>
                <div className={"col col-sm ml-3 border rounded shadow"}>
                    <img src={require("./images/duolingo.png")} width={"130"} height={"100"} alt={"duolingo"}/>
                    <h4>海马多邻国</h4>
                    <p>
                        海马国际教育核心精品课程，多邻国高分保驾护航！ 疫情期间，多邻国由于方便、便宜、认可度高一跃成为最受关注的考试。
                        由于考试题型新颖，且随机性较强，很多学生没有好的方法练习，海马国际教育有着市面上最完善的精校多邻国真题，
                        专业老师精心剖析八大题型，提分效果显著。
                    </p>
                    <a className={"more"} href={"/404"}>更多详情>>></a>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Language;