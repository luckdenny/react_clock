(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,c){},14:function(e,t,c){"use strict";c.r(t);var n=c(7),s=c.n(n),a=c(2),i=c(3),l=c(5),o=c(4),r=c(1),j=c.n(r),b=(c(12),function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={date:new Date,timerId:void 0},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this,t=setInterval((function(){e.setState({date:new Date})}),1e3);this.setState({timerId:t})}},{key:"componentDidUpdate",value:function(){console.log(this.state.date.toLocaleTimeString())}},{key:"componentWillUnmount",value:function(){clearInterval(this.state.timerId)}},{key:"render",value:function(){return this.state.date.toLocaleTimeString()}}]),c}(j.a.Component)),p=c(0),h=function(e){Object(l.a)(c,e);var t=Object(o.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={isVisible:!0,hideClock:function(){e.setState({isVisible:!1})},showClock:function(){e.setState({isVisible:!0})}},e}return Object(i.a)(c,[{key:"render",value:function(){var e=this.state,t=e.isVisible,c=e.hideClock,n=e.showClock;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("h1",{className:"App__title",children:"React clock"}),Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("p",{className:"center",children:[" ",Object(p.jsxs)("button",{className:"App__button-on",type:"button",onClick:n,children:[Object(p.jsxs)("svg",{width:"180px",height:"60px",viewBox:"0 0 180 60",className:"border",children:[Object(p.jsx)("polyline",{points:"179,1 179,59 1,59 1,1 179,1",className:"bg-line"}),Object(p.jsx)("polyline",{points:"179,1 179,59 1,59 1,1 179,1",className:"hl-line"})]}),Object(p.jsx)("span",{children:"Show Clock"})]})]})}),Object(p.jsx)("br",{}),Object(p.jsx)("br",{}),Object(p.jsx)("div",{className:"app2",children:Object(p.jsxs)("p",{className:"center",children:[Object(p.jsxs)("button",{className:"App__button-off",type:"button",onClick:c,children:[Object(p.jsxs)("svg",{width:"180px",height:"60px",viewBox:"0 0 180 60",className:"border",children:[Object(p.jsx)("polyline",{points:"179,1 179,59 1,59 1,1 179,1",className:"bg-line"}),Object(p.jsx)("polyline",{points:"179,1 179,59 1,59 1,1 179,1",className:"hl-line"})]}),Object(p.jsx)("span",{children:"Hide Clock"})]}),Object(p.jsx)("div",{className:"clock",children:t&&Object(p.jsx)(b,{})})]})})]})}}]),c}(j.a.Component),d=h;s.a.render(Object(p.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.bc5bed2b.chunk.js.map