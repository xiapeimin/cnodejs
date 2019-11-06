import React, {Component} from 'react';
import Header from './components/Header';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './container/Home';
import Start from './container/Start';
import About from './container/About';
import Api from './container/Api';
import Login from './container/Login';
import Homesider from './components/sider/HomeSider';
import Loginsider from './components/sider/Loginsider';
import Foot from './components/Foot';
import Topic from './container/HomeCom/Topic';
import NoMatch from './NoMatch';

export default class App extends Component{
    render(){       
        return (
            <Router>
                <div>           
                    <Header/>                  
                    <div className='main'>
                        <div className='content'>  
                            <Switch>     
                                <Route path={'/topic/:id'} component={Topic}/>
                                <Route path='/start' component={Start} />
                                <Route path='/api' component={Api} />
                                <Route path='/about' component={About} />
                                <Route path='/login' component={Login} />   
                                <Route path='/' component={Home} />
                                <Route path='*' component={NoMatch}/>
                            </Switch>                                           
                        </div>
                        <div className='sider'>
                            <Switch>
                                <Route path='/start' component={Homesider} />
                                <Route path='/about' component={Homesider} />
                                <Route path='/api' component={Homesider} />
                                <Route path='/login' component={Loginsider}/>   
                                <Route path='/' component={Homesider} />
                            </Switch>                  
                        </div>
                    </div>
                    <div className='foot'>
                        <Foot />
                    </div>
                </div>
            </Router>
            
        )
    }
}


