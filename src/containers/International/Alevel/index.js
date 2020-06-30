import React from 'react';
import './style.css';
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function A_Level() {
    return (
        <div className={"alevel"}>
            <Header/>
            <div className={"row justify-content-center"}>
                <div className={"title-0 col-sm-10"}>
                    <h1>海马国际教育ALevel课程</h1>
                    <p>
                        开设有一对一Alevel/IGcse基础班，提高班；寒暑假班课等班型。针对各个考试局的大纲深入剖析，辅以大量真题，加上海马
                        特色的四项服务，为A*保驾护航。
                    </p>
                </div>
            </div>
            <div className={"row justify-content-center pb-5"}>
                <div className={"col col-sm mr-3 border rounded shadow"}>
                    <img src={require("../images/phy2.png")} width={"50"} height={"50"} alt={"phy2"}/>
                    <h4>ALevel 物理 Physics</h4>
                    <p>
                        ALevel物理是国内学生首选课程之一，拿到高分十分重要。海马国际教育针对力学、电学、光学、转动等几大主题专题梳理，
                        特别对于学生薄弱的实验题做了大量分析，助您拿到A*！
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 mr-3 border rounded shadow"}>
                    <img src={require("../images/math2.png")} width={"50"} height={"50"} alt={"math"}/>
                    <h4>ALevel数学 (AB/BC)</h4>
                    <p>
                        Alevel数学版本较多，海马国际教育覆盖纯数/高数/概率/机械数学全科目，数学分数对申请影响很大，申请名校一定需要一个
                        高分的数学，但是Alevel数学特别是高数难度不低。 海马国际教育深度剖析各版本数学大纲，配合大量真题练习，让学生真正
                        学懂数学，奔向名校！
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 border rounded shadow"}>
                    <img src={require("../images/chem2.png")} width={"50"} height={"50"} alt={"chem2"}/>
                    <h4>ALevel 化学 Chemistry</h4>
                    <p>
                        Alevel化学相比国内化学难度较大，更多在于知识点的杂乱以及化学名词难以记住，海马国际教育对于Alevel化学做了深度梳理，
                        特别是国内化学中不涉及的点，比如电子轨道亚层，电离能等知识点重点讲解，单词知识点全面覆盖，配合海马专属的四大服务，
                        让学生不再畏惧化学。
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
            </div>
            <div className={"row justify-content-center pb-5"}>
                <div className={"col col-sm mr-3 border rounded shadow"}>
                    <img src={require("../images/eco2.png")} width={"50"} height={"50"} alt={"eco2"}/>
                    <h4>Alevel经济 Economics</h4>
                    <p>
                        Alevel经济学是当下最火商科类专业的入门课，国内学生首选课程之一，微观经济学更是火热，但是由于国内学生普遍基础欠缺，
                        理解不深入，丢分率高。海马国际教育聘请在职的国际学校经济教师，强基础重练习，实现您的商科梦。
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 mr-3 border rounded shadow"}>
                    <img src={require("../images/bio.png")} width={"50"} height={"50"} alt={"bio"}/>
                    <h4>Alevel生物 Biology</h4>
                    <p>
                        AP生物给了生化爱好者一个证明自己的选择，但Alevel生物难度确实很大，海马国际教育聘请生物学博士，深入讲解生物相关
                        内容，整理生物各章节词汇，辅以海马专属四大服务，让生物不再困扰您的学习。
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
                <div className={"col col-sm ml-3 border rounded shadow"}>
                    <img src={require("../images/cs2.png")} width={"50"} height={"50"} alt={"cs2"}/>
                    <h4>ALevel计算机 Computer science</h4>
                    <p>
                        ALevel计算机是当下最火计算机专业的入门课，受到的关注很多，但普遍学生担心是否能够拿到高分，海马国际教育在计算机
                        编程教育方面优势明显，精研ALevel计算机课程，深入浅出讲解，配以大量练习以及背景提升，让CS之梦从高中开始实现！
                    </p>
                    <br/>
                    {/*<a className={"more"} href={"/404"}>更多详情>>></a>*/}
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default A_Level;