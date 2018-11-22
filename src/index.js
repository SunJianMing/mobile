import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
    BrowserRouter as Router
} from 'react-router-dom'

import * as serviceWorker from './serviceWorker';

import './comm/fonts/iconfont.css'
import './comm/css/style.css'
import './comm/components/style.css'
ReactDOM.render( 
    <Router basename='/'>
        <App />
    </Router>
     
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();