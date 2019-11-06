import React from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';

export default function Login(){
    return (
        <div>
            <div className='links'><p><span>主页</span>/&nbsp;&nbsp;登录</p></div>
            <div className='logindiv'>
                <form>
                用户名&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='name'/>
                <br />
                &nbsp;&nbsp;&nbsp;密码&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type='text' name='pwd' />
                </form>
                <Link to='/' style={{color:'#fff'}}><div>登录</div></Link>
            </div>
        </div>
        
    )
}