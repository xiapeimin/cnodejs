import React, {Component} from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import ShowTheLocation from './ShowTheLocation';
import All from './HomeCom/All';

export default class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            url:'',
            activeType: 0,
            flag:1,
            list:[1,2,3,4,5,6,7,8,9,10]
        }
        this.handleClick = this.handleClick.bind(this);
        this.handlebc = this.handlebc.bind(this);
    }

    render(){       
        let p = this.state.activeType+1;  
        let url = this.state.url;     
        return (                     
            <Router>                       
                <div>                    
                    <div className='links'>
                        <div className={this.state.flag == 1 ? 'bc' : ''} onClick={this.handlebc}><Link to={'/all/'+p} style={{color:'rgb(105, 172, 5)'}}>全部</Link></div>
                        <div className={this.state.flag == 2 ? 'bc' : ''} onClick={this.handlebc}><Link to={'/good/'+p} style={{color:'rgb(105, 172, 5)'}}>精华</Link></div>
                        <div className={this.state.flag == 3 ? 'bc' : ''} onClick={this.handlebc}><Link to={'/share/'+p} style={{color:'rgb(105, 172, 5)'}}>分享</Link></div>
                        <div className={this.state.flag == 4 ? 'bc' : ''} onClick={this.handlebc}><Link to={'/ask/'+p} style={{color:'rgb(105, 172, 5)'}}>问答</Link></div>
                        <div className={this.state.flag == 5 ? 'bc' : ''} onClick={this.handlebc}><Link to={'/job/'+p} style={{color:'rgb(105, 172, 5)'}}>招聘</Link></div>
                        <div><Link style={{color:'rgb(105, 172, 5)'}}>客户端测试</Link></div>
                    </div>
                    <div className='tiezi'>
                        <Switch>
                            <Route path={`${url}/:page`} component={All}/>
                            <Route path={'/'} component={All}/>
                        </Switch>                        
                    </div>
                    <ShowTheLocation parent={this}/>          
                    <div className='auto'>
                        {                        
                            this.state.list.map((item,index)=>(
                                <div key={index}><Link to={''+item} className={this.state.activeType == index ? 'bomtab active' : 'bomtab'} style={{color:'rgb(156, 153, 153)'}} index={index} onClick={this.handleClick}>{item}</Link></div>   
                            ))                   
                        }
                    </div>                  
                </div>                          
            </Router>
            
        )
    }
    
    //分页底部 点击切换样式
    handleClick(e){
        var index = e.target.innerHTML-1;       
        this.setState({
            activeType: index
        })       
    }
    //顶部样式切换
    handlebc(e){
        var value = e.target.innerHTML;
        if(value == '全部'){
            this.setState({
                flag:1
            })
        }else if(value == '精华'){
            this.setState({
                flag:2
            })
        }else if(value == '分享'){
            this.setState({
                flag:3
            })
        }else if(value == '问答'){
            this.setState({
                flag:4
            })
        }else if(value == '招聘'){
            this.setState({
                flag:5
            })
        }
        
    }

    //从子组件showthelocation中取值 url 
    getChildrenMsg = (result, url) => {    
        if(url.length > 3){
            var url2 = url.slice(1);
            var arr = url2.split('/');
            var str = '/'+arr[0];
            var f;
            if(str == '/all'){
                f=1
            }else if(str == '/good'){
                f=2
            }else if(str == '/share'){
                f=3
            }else if(str == '/ask'){
                f=4
            }else if(str == '/job'){
                f=5
            }

            if (this.state.url !== str){               
                this.setState({
                    url:str,
                    activeType: arr[1]-1,
                    flag:f                 
                });
            }            
            
        }else{
            var len;
            if(url.length != 1){
                len =  url.slice(1)-1;
            }else{
                len = 0;
            }    
            if (this.state.activeType !== len){               
                this.setState({
                    activeType: len,
                    flag:1                  
                });
            }
        }
    }
    
}

