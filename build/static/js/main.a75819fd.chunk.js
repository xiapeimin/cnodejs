(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(35)},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(20),r=a.n(c),s=a(5),i=a(6),m=a(8),o=a(7),u=a(9),p=a(1);function h(){return l.a.createElement("div",{className:"headerwrap"},l.a.createElement("header",null,l.a.createElement("img",{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:""}),l.a.createElement("input",{type:"text"}),l.a.createElement("div",{style:{float:"right",lineHeight:"50px"}},l.a.createElement(p.b,{to:"/"},"\u9996\u9875"),l.a.createElement(p.b,{to:"/start"},"\u65b0\u624b\u5165\u95e8"),l.a.createElement(p.b,{to:"/api"},"API"),l.a.createElement(p.b,{to:"/about"},"\u5173\u4e8e"),l.a.createElement(p.b,null,"\u6ce8\u518c"),l.a.createElement(p.b,{to:"/login"},"\u767b\u5f55"))))}var d=a(10),E=a(14),v=function(e){function t(e){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).call(this,e))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.match,e.location);e.history;return l.a.createElement("div",null,this.props.parent.getChildrenMsg(this,t.pathname))}}]),t}(l.a.Component),b=Object(d.f)(v),g=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={data:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.location.pathname,a=[];t.length>3?a=(t=t.slice(1)).split("/"):a[0]="all";var n=this.props.match.params.page||1;fetch("https://cnodejs.org/api/v1/topics?tab="+a[0]+"&page="+n).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this,n=this.props.location.pathname,l=[];if(n.length>3?l=(n=n.slice(1)).split("/"):l[0]="all",e.match.params.page!==this.props.match.params.page){var c=this.props.match.params.page||1;fetch("https://cnodejs.org/api/v1/topics?tab="+l[0]+"&page="+c).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data})}))}}},{key:"render",value:function(){return l.a.createElement("div",null,this.state.data.map((function(e){return l.a.createElement("a",{className:"tphov"},l.a.createElement("div",{className:"topic"},l.a.createElement("div",{className:"user1"},l.a.createElement("img",{src:e.author.avatar_url,className:"img1"})),l.a.createElement("div",{className:"look",style:{color:"rgb(156, 153, 153)"}}," ",e.reply_count,"/",e.visit_count),l.a.createElement("div",{className:"attop"},"\u7f6e\u9876"),l.a.createElement(p.b,{to:"/topic/".concat(e.id),className:"hov"},l.a.createElement("div",{className:"title",dangerouslySetInnerHTML:{__html:e.title}})),l.a.createElement("div",{className:"user2"},l.a.createElement("img",{src:"https://avatars3.githubusercontent.com/u/132677?v=4&s=120",className:"img2"})),l.a.createElement("div",{className:"time",style:{color:"rgb(156, 153, 153)"}},"1\u5929\u524d")))})))}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).getChildrenMsg=function(e,t){if(t.length>3){var n,l=t.slice(1).split("/"),c="/"+l[0];"/all"==c?n=1:"/good"==c?n=2:"/share"==c?n=3:"/ask"==c?n=4:"/job"==c&&(n=5),a.state.url!==c&&a.setState({url:c,activeType:l[1]-1,flag:n})}else{var r;r=1!=t.length?t.slice(1)-1:0,a.state.activeType!==r&&a.setState({activeType:r,flag:1})}},a.state={url:"",activeType:0,flag:1,list:[1,2,3,4,5,6,7,8,9,10]},a.handleClick=a.handleClick.bind(Object(E.a)(a)),a.handlebc=a.handlebc.bind(Object(E.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activeType+1,a=this.state.url;return l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement("div",{className:"links"},l.a.createElement("div",{className:1==this.state.flag?"bc":"",onClick:this.handlebc},l.a.createElement(p.b,{to:"/all/"+t,style:{color:"rgb(105, 172, 5)"}},"\u5168\u90e8")),l.a.createElement("div",{className:2==this.state.flag?"bc":"",onClick:this.handlebc},l.a.createElement(p.b,{to:"/good/"+t,style:{color:"rgb(105, 172, 5)"}},"\u7cbe\u534e")),l.a.createElement("div",{className:3==this.state.flag?"bc":"",onClick:this.handlebc},l.a.createElement(p.b,{to:"/share/"+t,style:{color:"rgb(105, 172, 5)"}},"\u5206\u4eab")),l.a.createElement("div",{className:4==this.state.flag?"bc":"",onClick:this.handlebc},l.a.createElement(p.b,{to:"/ask/"+t,style:{color:"rgb(105, 172, 5)"}},"\u95ee\u7b54")),l.a.createElement("div",{className:5==this.state.flag?"bc":"",onClick:this.handlebc},l.a.createElement(p.b,{to:"/job/"+t,style:{color:"rgb(105, 172, 5)"}},"\u62db\u8058")),l.a.createElement("div",null,l.a.createElement(p.b,{style:{color:"rgb(105, 172, 5)"}},"\u5ba2\u6237\u7aef\u6d4b\u8bd5"))),l.a.createElement("div",{className:"tiezi"},l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"".concat(a,"/:page"),component:g}),l.a.createElement(d.a,{path:"/",component:g}))),l.a.createElement(b,{parent:this}),l.a.createElement("div",{className:"auto"},this.state.list.map((function(t,a){return l.a.createElement("div",{key:a},l.a.createElement(p.b,{to:""+t,className:e.state.activeType==a?"bomtab active":"bomtab",style:{color:"rgb(156, 153, 153)"},index:a,onClick:e.handleClick},t))})))))}},{key:"handleClick",value:function(e){var t=e.target.innerHTML-1;this.setState({activeType:t})}},{key:"handlebc",value:function(e){var t=e.target.innerHTML;"\u5168\u90e8"==t?this.setState({flag:1}):"\u7cbe\u534e"==t?this.setState({flag:2}):"\u5206\u4eab"==t?this.setState({flag:3}):"\u95ee\u7b54"==t?this.setState({flag:4}):"\u62db\u8058"==t&&this.setState({flag:5})}}]),t}(n.Component);function N(){return l.a.createElement("div",null,l.a.createElement("h1",null,"start"))}function y(){return l.a.createElement("div",null,l.a.createElement("h1",null,"about"))}function j(){return l.a.createElement("div",null,l.a.createElement("h1",null,"api"))}function k(){return l.a.createElement("div",null,l.a.createElement("div",{className:"links"},l.a.createElement("p",null,l.a.createElement("span",null,"\u4e3b\u9875"),"/\xa0\xa0\u767b\u5f55")),l.a.createElement("div",{className:"logindiv"},l.a.createElement("form",null,"\u7528\u6237\u540d\xa0\xa0\xa0\xa0\xa0",l.a.createElement("input",{type:"text",name:"name"}),l.a.createElement("br",null),"\xa0\xa0\xa0\u5bc6\u7801\xa0\xa0\xa0\xa0\xa0\xa0",l.a.createElement("input",{type:"text",name:"pwd"})),l.a.createElement(p.b,{to:"/",style:{color:"#fff"}},l.a.createElement("div",null,"\u767b\u5f55"))))}function O(){return l.a.createElement("div",{className:"sider"},l.a.createElement("div",{className:"siderchild1"},l.a.createElement("p",{className:"sp1"},"CNode: Node.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"),l.a.createElement("p",{className:"sp2"},"\u60a8\u53ef\u4ee5\xa0",l.a.createElement("a",{style:{color:"rgb(156, 153, 153)"}},"\u767b\u5f55"),"\xa0\u6216\xa0",l.a.createElement("a",{style:{color:"rgb(156, 153, 153)"}},"\u6ce8\u518c"),"\xa0"),l.a.createElement("div",{className:"git"},"\u901a\u8fc7\xa0GitHub\xa0\u767b\u5f55")),l.a.createElement("div",{className:"siderchild3"},l.a.createElement("div",{className:"backcolor"},"\u65e0\u4eba\u56de\u590d\u7684\u8bdd\u9898"),l.a.createElement("p",null,"webpack4 \u4f7f\u7528\u6a21\u5757\u5f02\u6b65\u52a0\u8f7d\u7684\u95ee\u9898\uff0cimp..."),l.a.createElement("p",null,"JavaScript PNG \u56fe\u7247\u7f16\u7801\u548c\u89e3\u7801"),l.a.createElement("p",null,"\u4f60\u597d\uff01\u53ef\u4ee5\u5427\u7f51\u7ad9\u505a\u6210\u5c0f\u7a0b\u5e8f\u5417\uff1f"),l.a.createElement("p",null,"\u53ea\u56e0\u6709\u4e86\u5b83\uff0c\u6211\u627e\u5230\u4e86\u4f18\u79c0\u7684\u5019\u9009\u4eba\uff1a\u63a8..."),l.a.createElement("p",null,"\u6d77\u5916\u534e\u4eba\u5982\u4f55\u7ffb\u5899\u56de\u56fd\u770b\u4e2d\u56fd\u7535\u89c6\u89c6\u9891?")),l.a.createElement("div",{className:"siderchild4"},l.a.createElement("div",{className:"backcolor"},"\u79ef\u5206\u699c\xa0\xa0\xa0TOP 100>>"),l.a.createElement("p",null,"21735\xa0\xa0\xa0 i5ting"),l.a.createElement("p",null,"15670\xa0\xa0\xa0 alsotang"),l.a.createElement("p",null,"9350\xa0\xa0\xa0 leapon"),l.a.createElement("p",null,"9060\xa0\xa0\xa0 atian25"),l.a.createElement("p",null,"8780\xa0\xa0\xa0 jiyinyiyong"),l.a.createElement("p",null,"7320\xa0\xa0\xa0 yakczh"),l.a.createElement("p",null,"6815\xa0\xa0\xa0 im-here"),l.a.createElement("p",null,"6095\xa0\xa0\xa0 DevinXian"),l.a.createElement("p",null,"5815\xa0\xa0\xa0 chapgaga"),l.a.createElement("p",null,"5350\xa0\xa0\xa0 magicdawn")))}function S(){return l.a.createElement("div",{className:"sider",style:{height:"500px"}},l.a.createElement("div",{className:"loginbox"},l.a.createElement("div",{className:"backcolor"},"\u5173\u4e8e"),l.a.createElement("p",null,"CNode\uff1aNode.js\u4e13\u4e1a\u4e2d\u6587\u793e\u533a"),l.a.createElement("p",null,"\u5728\u8fd9\u91cc\u4f60\u53ef\u4ee5\uff1a"),l.a.createElement("p",null,"\u5411\u522b\u4eba\u63d0\u51fa\u4f60\u9047\u5230\u7684\u95ee\u9898"),l.a.createElement("p",null,"\xa0\xa0\xa0\u2022\xa0\xa0\xa0\u5e2e\u52a9\u9047\u5230\u95ee\u9898\u7684\u4eba"),l.a.createElement("p",null,"\xa0\xa0\xa0\u2022\xa0\xa0\xa0\u5206\u4eab\u81ea\u5df1\u7684\u77e5\u8bc6"),l.a.createElement("p",null,"\xa0\xa0\xa0\u2022\xa0\xa0\xa0\u548c\u5176\u5b83\u4eba\u4e00\u8d77\u8fdb\u6b65")))}function C(){return l.a.createElement("div",{className:"footbox"},l.a.createElement("footer",null,l.a.createElement("p",{style:{color:"black"}},l.a.createElement("a",null,"RSS"),"\xa0|\xa0\u6e90\u7801\u5730\u5740"),l.a.createElement("p",null,"CNode \u793e\u533a\u4e3a\u56fd\u5185\u6700\u4e13\u4e1a\u7684 Node.js \u5f00\u6e90\u6280\u672f\u793e\u533a\uff0c\u81f4\u529b\u4e8e Node.js \u7684\u6280\u672f\u7814\u7a76\u3002"),l.a.createElement("p",null,"\u670d\u52a1\u5668\u8d5e\u52a9\u5546\u4e3a ucloud ",l.a.createElement("img",null),"\uff0c\u5b58\u50a8\u8d5e\u52a9\u5546\u4e3a \u4e03\u725b\u4e91\u5b58\u50a8 ",l.a.createElement("img",null)," \uff0c\u7531 alinode ",l.a.createElement("img",null),"\u63d0\u4f9b\u5e94\u7528\u6027\u80fd\u670d\u52a1\u3002"),l.a.createElement("p",null,"\u65b0\u624b\u642d\u5efa Node.js \u670d\u52a1\u5668\uff0c\u63a8\u8350\u4f7f\u7528\u65e0\u9700\u5907\u6848\u7684 ",l.a.createElement("a",{href:"https://www.digitalocean.com",target:"_blank",style:{color:"blue"}},"DigitalOcean(https://www.digitalocean.com/)"))))}var w=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(o.a)(t).call(this,e))).state={data:[],reply:[],loginname:"",from:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;fetch("https://cnodejs.org/api/v1//topic/"+t).then((function(e){return e.json()})).then((function(t){e.setState({data:t.data,reply:t.data.replies,loginname:t.data.author.loginname}),"share"==e.state.data.tab?e.setState({from:"\u5206\u4eab"}):"good"==e.state.data.tab?e.setState({from:"\u7cbe\u534e"}):"ask"==e.state.data.tab?e.setState({from:"\u95ee\u7b54"}):"job"==e.state.data.tab?e.setState({from:"\u62db\u8058"}):e.setState({from:"\u5206\u4eab"})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id){var n=this.props.match.params.id;fetch("https://cnodejs.org/api/v1//topic/"+n).then((function(e){return e.json()})).then((function(e){a.setState({data:e.data}),"share"==a.state.data.tab?a.setState({from:"\u5206\u4eab"}):"good"==a.state.data.tab?a.setState({from:"\u7cbe\u534e"}):"ask"==a.state.data.tab?a.setState({from:"\u95ee\u7b54"}):"job"==a.state.data.tab?a.setState({from:"\u62db\u8058"}):a.setState({from:"\u5206\u4eab"})}))}}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"d1"},l.a.createElement("div",{className:"tattop"},"\u7f6e\u9876"),l.a.createElement("h1",null,this.state.data.title),l.a.createElement("p",null,"\u2022\u53d1\u5e03\u4e8e1\u5929\u524d\xa0\u2022\xa0\u4f5c\u8005\xa0",this.state.loginname,"\xa0\u2022\xa0",this.state.data.visit_count,"\xa0\u6b21\u6d4f\u89c8\xa0\u2022\xa0\u6765\u81ea\xa0",this.state.from)),l.a.createElement("div",{className:"d2",dangerouslySetInnerHTML:{__html:this.state.data.content}}),l.a.createElement("div",{style:{height:"15px",width:"950px",background:"#ddd"}}),l.a.createElement("div",{className:"num"},this.state.reply.length," \u56de\u590d"),this.state.reply.map((function(e,t){return l.a.createElement("div",{className:"reply"},l.a.createElement("div",{className:"r1"},l.a.createElement("img",{className:"repimg",src:e.author.avatar_url})),l.a.createElement("div",{className:"r2"},e.author.loginname," ",l.a.createElement("span",{style:{fontSize:"13px",color:"blue"}},"\xa0\xa0\xa0",t+1,"\u697c\u20226\u4e2a\u6708\u524d")),l.a.createElement("div",{className:"zan"},e.ups.length," \u8d5e"),l.a.createElement("div",{className:"r3",dangerouslySetInnerHTML:{__html:e.content}}))})))}}]),t}(n.Component);function T(){return l.a.createElement("div",null,l.a.createElement("h1",null,"404"),l.a.createElement("p",null,"\u60a8\u8bbf\u95ee\u7684\u9875\u9762\u4e0d\u5b58\u5728"))}var _=function(e){function t(){return Object(s.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement("div",{className:"main"},l.a.createElement("div",{className:"content"},l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/topic/:id",component:w}),l.a.createElement(d.a,{path:"/start",component:N}),l.a.createElement(d.a,{path:"/api",component:j}),l.a.createElement(d.a,{path:"/about",component:y}),l.a.createElement(d.a,{path:"/login",component:k}),l.a.createElement(d.a,{path:"/",component:f}),l.a.createElement(d.a,{path:"*",component:T}))),l.a.createElement("div",{className:"sider"},l.a.createElement(d.c,null,l.a.createElement(d.a,{path:"/start",component:O}),l.a.createElement(d.a,{path:"/about",component:O}),l.a.createElement(d.a,{path:"/api",component:O}),l.a.createElement(d.a,{path:"/login",component:S}),l.a.createElement(d.a,{path:"/",component:O})))),l.a.createElement("div",{className:"foot"},l.a.createElement(C,null))))}}]),t}(n.Component);a(33),a(34);r.a.render(l.a.createElement(_,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.a75819fd.chunk.js.map