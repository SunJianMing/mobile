import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom'
import Home from './view/home';
import Course from './view/course';
import Lecturer from './view/lecturer';
import Message from './view/message';
import Work from './view/work';



class App extends Component {
    render() {
        return (
            <Switch>
                <Route  path='/' exact component={Home}/>
                <Route  path='/course' exact component={Course}/>
                <Route  path='/lecturer' exact component={Lecturer}/>
                <Route  path='/message' exact component={Message}/>
                <Route  path='/work' exact component={Work}/>
            </Switch>
        );
    }
}

export default App;
