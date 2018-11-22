import React from 'react';
import {Link} from 'react-router-dom'

export default function() {
    return (
            <nav className='menu'>
                <Link to='/' className='iconfont icon-Home'>首页</Link>
                <Link to='/course' className='iconfont icon-kecheng'>课程介绍</Link>
                <Link to='/lecturer' className='iconfont icon-peixunjiangshi'>讲师团队</Link>
            </nav>
        )
    
}