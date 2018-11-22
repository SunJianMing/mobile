import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Header extends Component {
    state = {}
    render() {
        console.log(this.props);
        let {back, login} = this.props;
        return (
            <header className='header'>
                <button
                    type='button'
                    className='header-btn-left headerMenu iconfont icon-navmenuicon'></button>
                {back && (
                    <button type='button' className='header-btn-left back iconfont icon-back'></button>
                )}
                <img className='logo' src={require('./img/logo.png')} alt=""/> {
                    login
                    ? (
                        <span className='header-btn-right'>miaov</span>
                    )
                    : (
                        <Link to='/login' className='header-btn-right user-login iconfont icon-denglu'></Link>
                    )
                }

            </header>
        );
    }
}

export default Header;