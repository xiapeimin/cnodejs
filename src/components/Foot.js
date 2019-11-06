import React from 'react';

export default function Header(){ 
    return (
        <div className='footbox'>
            <footer>
                <p style={{color:'black'}}><a>RSS</a>&nbsp;|&nbsp;源码地址</p>
                <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                <p>服务器赞助商为 ucloud <img />，存储赞助商为 七牛云存储 <img/> ，由 alinode <img/>提供应用性能服务。</p>
                <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href='https://www.digitalocean.com' target='_blank' style={{color:'blue'}}>DigitalOcean(https://www.digitalocean.com/)</a></p>
            </footer>
        </div>
    )
}
