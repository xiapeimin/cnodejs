import React, {Component} from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';

export default class All extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
   
    componentDidMount(){       
        let url = this.props.location.pathname;
        let arr = [];
        if(url.length > 3){
            url = url.slice(1);
            arr = url.split('/');
        }else{
            arr[0]='all';
        }
        let page = this.props.match.params.page || 1;
        fetch('https://cnodejs.org/api/v1/topics?tab='+arr[0]+'&page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            });          
        });

    }
    componentDidUpdate(prevProps,prevState){
        let url = this.props.location.pathname;
        let arr = [];
        if(url.length > 3){
            url = url.slice(1);
            arr = url.split('/');
        }else{
            arr[0]='all';
        }
        if(prevProps.match.params.page!==this.props.match.params.page){         
            let page = this.props.match.params.page || 1;
            fetch('https://cnodejs.org/api/v1/topics?tab='+arr[0]+'&page='+page)
                .then((res)=>res.json())
                .then((res)=>{
                    this.setState({
                        data:res.data
                    });       
                })
        }
    }

    render(){
        return (
            <div>
                {
                    this.state.data.map((item)=>(                      
                        <a className='tphov'><div className='topic'>
                            <div className='user1'><img src={item.author.avatar_url} className='img1'/></div>
                            <div className='look'  style={{color:'rgb(156, 153, 153)'}}> {item.reply_count}/{item.visit_count}</div>
                            <div className='attop'>置顶</div>        
                            <Link to={`/topic/${item.id}`} className='hov'><div className='title' dangerouslySetInnerHTML={{__html:item.title}}></div></Link>
                            <div className='user2'><img src='https://avatars3.githubusercontent.com/u/132677?v=4&s=120' className='img2'/></div>
                            <div className='time' style={{color:'rgb(156, 153, 153)'}}>1天前</div>   
                        </div></a>    
                    ))
                }
              
            </div>
        )
    }

}
