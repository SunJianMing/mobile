import React, { Component,Fragment } from 'react';
import Header from '../../comm/components/header'

import Menu from '../../comm/components/menu'
import Course from './course'



let tabImg = [
    require('../../comm/components/nav/img/banner.png'),
    require('../../comm/components/nav/img/banner.png'),
    require('../../comm/components/nav/img/banner.png'),
    require('../../comm/components/nav/img/banner.png')
]
class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Header {...{}}/>
                <Menu/>
                <div className="page">
                    <div className="banner tab">
                        <ul className='picList'>
                            {tabImg.map((elt,i)=>{
                                return (
                                    <li key={i}>
                                        <img src={elt} alt=''/>
                                    </li>
                                )
                            })}
                        </ul>
                        <nav className='picNav'>
                            {
                                tabImg.map((elt,i)=>{
                                    return (
                                        <span key={i} className={i===0?'active':''}></span>   
                                    )
                                })
                            }
                        </nav>
                    </div>
                    <Course/>
                </div>
                
            </Fragment>
            
        )
    }
}
 
export default Home;