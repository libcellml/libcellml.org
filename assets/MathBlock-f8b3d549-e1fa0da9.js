import{t as b,c as y,g as h,o,a as l,F as k,i as v,h as x}from"./index-45856ec8.js";const q={class:"katex-block"},B={__name:"MathBlock",props:{node:{type:void 0,default:null},componentName:{type:String},properties:{type:Object}},setup(s){const i=s,c=["\\begin{equation}","\\end{equation}"],d=new Map([["\\begin{align}","\\begin{aligned}"],["\\begin{eqnarray}","\\begin{aligned}"],["\\end{align}","\\end{aligned}"],["\\end{eqnarray}","\\end{aligned}"]]),{node:p}=b(i),u=y(()=>{let n=[];const t=p.value.innerHTML.split(/\r?\n\r?\n/);for(const a of t)if(a){let e=a.replaceAll("&amp;","&");for(const r of c)e=e.replaceAll(r,"");for(let[r,m]of d)e=e.replaceAll(r,m);g(e)&&!f(e)&&(e=`\\begin{array}{cc}${e}\\end{array}`),n.push(e)}return n});function g(n){const t=n.search("&"),a=n.search("\\\\");return t!==-1&&a!==-1}function f(n){const t=n.search("begin{aligned}"),a=n.search("end{aligned}");return t!==-1&&a!==-1}return(n,t)=>{const a=h("katex-element");return o(),l("div",q,[(o(!0),l(k,null,v(u.value,(e,r)=>(o(),l("div",{key:"math_"+r},[x(a,{expression:e},null,8,["expression"])]))),128))])}}};export{B as default};
