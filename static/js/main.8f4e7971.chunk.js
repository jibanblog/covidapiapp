(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(13),r=a.n(c),u=a(3),s=a.n(u),d=a(14),i=a(2),o=a(15),m=a.n(o),E=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(),u=Object(i.a)(r,2),o=u[0],E=u[1],b=Object(n.useState)(),p=Object(i.a)(b,2),h=p[0],f=p[1],j=Object(n.useState)(),v=Object(i.a)(j,2),O=v[0],w=v[1],g=Object(n.useState)(),k=Object(i.a)(g,2),S=k[0],C=k[1];return Object(n.useEffect)((function(){function e(){return(e=Object(d.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://api.covid19india.org/raw_data12.json");case 2:t=e.sent,n=t.data.raw_data.length,E(t.data.raw_data[a].detectedstate),f(t.data.raw_data[a].detecteddistrict),w(t.data.raw_data[a].currentstatus),C(t.data.raw_data[a].numcases),console.log(n);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()})),l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"main"},l.a.createElement("h1",null," Covid-19 Cases From July 23 To Aug 06 "),l.a.createElement("p",null," Click on below button to check ",l.a.createElement("br",null)," covid-19 cases district wise: "),l.a.createElement("div",{class:"btn"},l.a.createElement("button",{onClick:function(){c(a+1)}}," Click On ")),l.a.createElement("div",{class:"covid-table"},l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null," Id "),l.a.createElement("th",null," State "),l.a.createElement("th",null," District "),l.a.createElement("th",null," Status "),l.a.createElement("th",null," Cases "))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null," ",a," "),l.a.createElement("td",null," ",o," "),l.a.createElement("td",null," ",h," "),l.a.createElement("td",null," ",O," "),l.a.createElement("td",null," ",S," ")))))))};a(39);r.a.render(l.a.createElement(E,null," "),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.8f4e7971.chunk.js.map