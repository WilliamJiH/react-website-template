import React from 'react';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './style.css';

function About() {
    return (
        <div className={"about"}>
            <Header/>
            <div className={"row justify-content-center pt-5"}>
                <h1 className={"title border rounded"}>做留学生最靠谱的伙伴，让留学之路更轻松</h1>
            </div>
            <div className={"row justify-content-center pt-5 pb-3"}>
                <div className={"text col-sm-4 border rounded mr-2"}>
                    <h4>海马国际教育简介</h4>
                    <br/>
                    <p>
                        海马国际教育是专注于国际课程培训的机构, 主要业务有三大国际课程体系AP/ALevel/IB的培训、国际主流竞赛指导及留学相
                        关业务，公司由名校海归联合教育行业资深人士创立。愿成为中国留学生最信赖的教育公司。
                    </p>

                </div>
                <div className={"text col-sm-5 border rounded ml-2"}>
                    <h4>海马国际教育创始人简介</h4>
                    <br/>
                    <p>
                        Milson Wang 在创立海马国际教育前，曾任职于顶级券商及教育行业投融资机构，在此之前曾在国内几家大型教育机构授课，
                        并担任过数家留学机构兼职顾问8年教育行业经验，带领过数千学生成绩提高，受到家长学生的一致好评。
                        Milson 拥有卡内基梅隆大学(CMU)硕士学位，天津大学本科学位，并曾在香港大学交换一年。
                    </p>
                </div>
            </div>
            <div className={"row justify-content-center pt-5 pb-3"}>
                <div className={"text col-sm-9 border rounded"}>
                    <h4>联系我们</h4>
                    <br/>
                    <p>微信号：Milsonwang1 即可直接联系王老师 或 微信公众号搜索：海马国际教育 并关注 即可获取关于我们的最新资讯</p>
                </div>
            </div>

            <Footer/>
        </div>
    );
}

export default About;