(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(19)},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),c=n.n(s),o=n(1),i=n.n(o),u=n(9),l=n(2),m=n(5),d=n(6),p=n(8),f=n(7),h=n(10),b={textAlign:"left",fontSize:"16px"};var v=function(e){var t=e.users;return r.a.createElement("div",{className:"container"},r.a.createElement("p",{style:b},t.username),r.a.createElement("p",{style:b},t.email))},y={fontFamily:"italic",textDecoration:"line-through",color:"silver"};var E=function(e){var t=e.item;return r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"text-left",style:t.completed?y:null},t.title),r.a.createElement("input",{type:"checkbox",defaultChecked:t.completed}),r.a.createElement("span",{className:"checkmark"}))};var k=function(e){var t=e.item;return r.a.createElement("div",null,r.a.createElement(E,{item:t}))},x=(n(18),function(){var e=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/todos");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()),j=function(){var e=Object(l.a)(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),w=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(r)))).state={todos:[],isLoaded:!1,isLoading:!1},n.handleClick=Object(l.a)(i.a.mark(function e(){var t,a,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({isLoading:!0}),e.next=3,x();case 3:return t=e.sent,e.next=6,j();case 6:a=e.sent,r=t.map(function(e){return Object(u.a)({},e,{user:a.find(function(t){return t.id===e.userId})})}),n.setState({todos:r,isLoading:!1,isLoaded:!0});case 9:case"end":return e.stop()}},e)})),n.sortName=function(){n.setState(function(e){return{todos:e.todos.sort(function(e,t){return e.user.username>t.user.username?1:-1})}})},n.sortComplete=function(){n.setState(function(e){return{todos:e.todos.sort(function(e,t){return e.completed>t.completed?-1:1})}})},n}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.state.todos.map(function(e){return r.a.createElement("div",{key:e.id,className:"todo"},r.a.createElement(k,{item:e}),r.a.createElement(v,{users:e.user}))});return this.state.isLoaded?r.a.createElement("main",{className:"App"},r.a.createElement("button",{type:"submit",className:"btn btn-primary mt-5 mb-5 mr-3",onClick:this.sortName},"sortName"),r.a.createElement("button",{type:"submit",className:"btn btn-primary mt-5 mb-5",onClick:this.sortComplete},"sortComplete"),r.a.createElement("div",null,e)):r.a.createElement("button",{type:"submit",className:"btn btn-success mt-5",onClick:this.handleClick,disabled:this.state.isLoading},this.state.isLoading?"Loading...":"Load")}}]),t}(r.a.Component);c.a.render(r.a.createElement(w,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.d37c81c4.chunk.js.map