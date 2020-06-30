import React from 'react';
import './style.css';

function Bar() {
    return (
        <section className={"bar"}>
            <div className={"row justify-content-center"}>
                <div className={"col border-right"}>
                    <h1 className={"tit pb-2"}>1000+</h1>
                    <h3 className={'text-g'}>近四年来服务千名学生</h3>
                </div>
                <div className={"col border-right border-left"}>
                    <h1 className={"tit pb-2"}>95%+</h1>
                    <h3 className={'text-g'}>学生成绩得到提高</h3>
                </div>
                <div className={"col border-right border-left"}>
                    <h1 className={"tit pb-2"}>150+</h1>
                    <h3 className={'text-g'}>国际名校录取</h3>
                </div>
                <div className={"col border-right border-left"}>
                    <h1 className={"tit pb-2"}>3</h1>
                    <h3 className={'text-g'}>北京、匹兹堡、休斯顿三地服务</h3>
                </div>
            </div>
        </section>
    );
}

export default Bar;