import{r as k,t as h,z as y,aQ as g,aW as R,g as _,u as t,o,n as a,w as v,b as x,e as C,a as s,F as b,i as N,aR as w}from"./index-45856ec8.js";import{x as B}from"./methods-f5038371-1c4f0618.js";import{I}from"./basereference-dc2b6871-cf7b6028.js";const S=["href"],G={__name:"Reference",props:{node:{type:void 0,default:null},componentName:{type:String}},setup(l){const p=l,r=k({path:"",hash:""}),{node:e}=h(p),i=y(),{isInternalReference:m}=B(),{onReferenceCreated:u}=I(e.value,i,r);g(u);const{children:c}=R(e);return(A,D)=>{const f=_("router-link");return t(m)(t(e))?(o(),a(f,{key:0,to:r.value},{default:v(()=>[x(C(t(e).textContent),1)]),_:1},8,["to"])):(o(),s("a",{key:1,href:t(e).getAttribute("refuri"),target:"_blank"},[(o(!0),s(b,null,N(t(c),(n,d)=>(o(),a(w(n.component),{key:"sub_link_"+d,node:n.node,componentName:n.name,properties:n.properties},null,8,["node","componentName","properties"]))),128))],8,S))}}};export{G as default};
