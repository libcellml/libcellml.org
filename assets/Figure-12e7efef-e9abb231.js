import{t as f,r as v,aV as g,aW as k,c as y,o as n,a as s,F as _,i as b,n as B,aR as E,u as F,aT as N,aU as R}from"./index-45856ec8.js";import{x as h}from"./methods-f5038371-1c4f0618.js";const O={__name:"Figure",props:{node:{type:void 0,default:null},componentName:{type:String},properties:{type:Object}},setup(p){const l=p,{dataObject:u}=h(),{node:e}=f(l),t=v({}),{classes:c}=g(e),{children:m}=k(e),i=y(()=>{let o=[...c.value];for(const r of e.value.attributes)r.name==="align"&&o.push("align-"+r.value);return o});return t.value=u(e.value,i.value).attrs,(o,r)=>(n(),s("figure",N(R(t.value)),[(n(!0),s(_,null,b(F(m),(a,d)=>(n(),B(E(a.component),{key:"figure_component_"+d,node:a.node,componentName:a.name,properties:a.properties},null,8,["node","componentName","properties"]))),128))],16))}};export{O as default};