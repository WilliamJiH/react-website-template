import React from 'react';
import './style.css';

function Footer() {
    return (
        <section className={"page-footer pt-3"}>
            <div className={"container-fluid"}>
                <div className={"row justify-content-center"}>
                    <div className={"footer-col col-md-2 mt-md-0 mt-3"}>
                        <h5 className={"footer-cola"}>联系我们</h5>
                        <img src={require("../images/qrcode2.jpg")} width={"100"} height={"100"} alt={"contact-qr"}/>
                    </div>
                    <div className={"footer-col col-md-2 mt-md-0 mt-3"}>
                        <h5 className={"footer-cola"}>关注我们</h5>
                        <img src={require("../images/qrcode1.jpg")} width={"100"} height={"100"} alt={"contact-qr"}/>
                    </div>
                    {/*<hr className={"clearfix w-100 d-md-none pb-3"}/>*/}
                    <div className={"footer-col2 col-md-2 mb-md-0 mb-3"}>
                        <h5 className={"footer-colb"}>相关服务</h5>
                        <ul className={"list-unstyled"}>
                            <li>
                                <a href="/">AP考试辅导</a>
                            </li>
                            <li>
                                <a href="/">A-Level考试辅导</a>
                            </li>
                            <li>
                                <a href="/">多邻国英语</a>
                            </li>
                            <li>
                                <a href="/">竞赛辅导</a>
                            </li>
                        </ul>
                    </div>
                    <div className={"footer-col col-md-2 mt-md-0 mt-3"}>
                        <h5 className={"footer-cola"}>订阅海马</h5>
                        <input type="subscribe" id="subscribeForm" className="form-control mb-6"
                               placeholder="请输入您的电子邮箱"/>
                        <button className="btn btn-info btn-block my-4" type="submit">订阅海马留学资讯</button>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">
                京ICP备20022272号 <a href={"http://www.beian.miit.gov.cn"}>网站备案号</a> - 网站受到TrustAsia公司安全认证，保障您的信息安全。
            </div>
        </section>
    );
}

export default Footer;