import React, { Component,Fragment } from 'react';
import Header from '../../comm/components/header'

import Menu from '../../comm/components/menu'


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Header {...{}}/>
                {/* <Menu/> */}
                <div className="banner">
                    <ul className='picList'></ul>
                    <nav className='picNav'></nav>
                </div>
            </Fragment>
            
        )
    }
}
 
export default Home;