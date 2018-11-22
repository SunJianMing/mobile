import React, { Component } from 'react';
import './style.css'
import '../fonts/iconfont.css'
class Header extends Component {
    state = {  }
    render() { 
        return ( 
            <header className='header'>
                <button type='button' className='header-menu iconfont icon-navmenuicon'></button>
                <button type='button' className='header-back iconfont icon-back'></button>
            </header>
         );
    }
}
 
export default Header;