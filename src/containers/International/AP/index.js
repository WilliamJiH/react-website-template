import React from 'react';
import './style.css';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function AP() {
    return (
        <div className={"ap"}>
            <Header/>
            <div className={"row justify-content-center"}>
                <div className={"title-0 col-sm-10"}>
                    <h1>海马国际教育AP课程</h1>
                    <p>
                        开设有一对一基础班，提高班；寒暑假前序班课等班型。 针对每年的大纲深入剖析，辅以大量真题，加上海马特色的四项服务，
                        为5分保驾护航。
                    </p>
                </div>
            </div>
            <div className={"row justify-content-center pb-5"}>
                <div className={"col col-sm mr-3 border rounded shadow"}>
                    <img src={require("../images/phy.png")} width={"50"} height={"50"} alt={"phy"}/>
                    <h4>AP物理 Physics(1/2/C)</h4>
                    <p>
                        海马国际教育核心精品课程，物理1/2,物理C力学/电磁全覆盖。AP物理是国内学生首选课程之一，拿到高分十分重要。
                        海马国际教育针对力学、电学、光学、转动等几大主题专题梳理，历年来学生5分率极高！
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 mr-3 border rounded shadow"}>
                    <img src={require("../images/calc.png")} width={"50"} height={"50"} alt={"calc"}/>
                    <h4>AP微积分 Calculus (AB/BC)</h4>
                    <p>
                        海马国际教育核心精品课程，Calculus AB/BC全覆盖。AP微积分同样是国内学生首选课程之一，数学也是大学必学课程，
                        绝大部分学生都会选择。海马国际教育深度剖析数学大纲，配合大量真题练习，得到学生广泛好评。
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 border rounded shadow"}>
                    <img src={require("../images/chem.png")} width={"50"} height={"50"} alt={"chem"}/>
                    <h4>AP化学 Chemistry</h4>
                    <p>
                        AP化学相比国内化学难度较大，更多在于知识点的杂乱以及化学名词难以记住，海马国际教育对于AP化学做了深度梳理，
                        单词知识点全面覆盖，配合海马专属的四大服务，让学生不再畏惧化学。
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
            </div>
            <div className={"row justify-content-center pb-5"}>
                <div className={"col col-sm mr-3 border rounded shadow"}>
                    <img src={require("../images/eco.png")} width={"50"} height={"50"} alt={"eco"}/>
                    <h4>AP经济 Economics (micro/macro)</h4>
                    <p>
                        AP经济学是当下最火商科类专业的入门课，宏微观经济海马全覆盖，经济学是国内学生首选课程之一，微观经济学更是火热，
                        但是由于国内学生普遍基础欠缺，理解不深入，丢分率高 。海马国际教育聘请在职的国际学校经济教师，强基础重练习，
                        实现您的商科梦。
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 mr-3 border rounded shadow"}>
                    <img src={require("../images/stats.png")} width={"50"} height={"50"} alt={"stats"}/>
                    <h4>AP统计 Statictics</h4>
                    <p>
                        AP统计虽没有微积分一样吸睛，也受到很多数学爱好者的青睐，相对国内高中阶段的数学内容，AP统计难度稍大，但有了海马
                        国际教育的讲解，统计5分不是梦。
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 border rounded shadow"}>
                    <img src={require("../images/cs.png")} width={"50"} height={"50"} alt={"cs"}/>
                    <h4>AP计算机 Computer science</h4>
                    <p>
                        AP计算机是当下最火计算机专业的入门课，受到的关注很多，但普遍学生担心是否能够拿到高分。海马国际教育在计算机编程教育
                        方面优势明显，精研AP计算机课程，深入浅出讲解，配以大量练习以及背景提升，让CS之梦从高中开始实现！
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default AP;