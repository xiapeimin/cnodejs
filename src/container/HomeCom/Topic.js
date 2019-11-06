import React, {Component} from 'react';

export default class Topic extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            reply:[],
            loginname:'',
            from:''

        }  
    }
   
    componentDidMount(){
        let id = this.props.match.params.id;
        fetch('https://cnodejs.org/api/v1//topic/'+id)
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data,
                reply:res.data.replies,
                loginname:res.data.author.loginname
            });
            if(this.state.data.tab == "share"){
                this.setState({
                    from:'分享'
                });
            }else if(this.state.data.tab == "good"){
                this.setState({
                    from:'精华'
                });
            }else if(this.state.data.tab == "ask"){
                this.setState({
                    from:'问答'
                });
            }else if(this.state.data.tab == "job"){
                this.setState({
                    from:'招聘'
                });
            }else{
                this.setState({
                    from:'分享'
                });
            }
        });

    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){         
            let id = this.props.match.params.id;
            fetch('https://cnodejs.org/api/v1//topic/'+id)
            .then((res)=>res.json())
            .then((res)=>{
                this.setState({
                    data:res.data
                });
                if(this.state.data.tab == "share"){
                    this.setState({
                        from:'分享'
                    });
                }else if(this.state.data.tab == "good"){
                    this.setState({
                        from:'精华'
                    });
                }else if(this.state.data.tab == "ask"){
                    this.setState({
                        from:'问答'
                    });
                }else if(this.state.data.tab == "job"){
                    this.setState({
                        from:'招聘'
                    });
                }else{
                    this.setState({
                        from:'分享'
                    });
                }    
            });
        }
    }
    render(){
        return (
            <div>               
                <div className='d1'>
                    <div className='tattop'>置顶</div>
                    <h1>{this.state.data.title}</h1>
                    <p>•发布于1天前&nbsp;•&nbsp;作者&nbsp;{this.state.loginname}&nbsp;•&nbsp;{this.state.data.visit_count}&nbsp;次浏览&nbsp;•&nbsp;来自&nbsp;{this.state.from}</p>
                </div>
                <div className='d2' dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>               
                <div style={{height:'15px',width:'950px',background:'#ddd'}}></div>
                <div className='num'>{this.state.reply.length} 回复</div>               
                {
                    this.state.reply.map((item,index)=>(
                        <div className='reply'>
                            <div className='r1'><img className='repimg' src={item.author.avatar_url} /></div>
                            <div className='r2'>{item.author.loginname} <span style={{fontSize:'13px',color:'blue'}}>&nbsp;&nbsp;&nbsp;{index+1}楼•6个月前</span></div>
                            <div className='zan'>{item.ups.length} 赞</div>
                            <div className='r3' dangerouslySetInnerHTML={{__html:item.content}}></div>
                        </div>
                    ))
                }
            </div>
            
        )
    }
}
