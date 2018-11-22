import React from 'react';

export default function () {
    return (
        <footer className='footer'>
            <div className="footer-links">
                <div className="email-phone">
                    <span className='email iconfont icon-youxiang'>
                        <span>hr_recruit@miaov.com</span>
                    </span>
                    <span className='phone iconfont icon-dianhua'>
                        <span>010-57269690</span>
                    </span>
                </div>
                <div className="links">
                    <span href="#">首页</span>
                    <span href="#">课程安排</span>
                    <span href="#">学员作品</span>
                    <span href="#">视频教程</span>
                    <span href="#">关于我们</span>
                    <span href="#">在线留言</span>
                    <span href="#">常见问题</span>
                </div>
            </div>
            <p className="record">京ICP备08102442号-1 2007-2016 MIAOOV.COM 版权所有</p>
        </footer>
    )
}