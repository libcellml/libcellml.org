import{t as v,aW as y,c as r,o,n as p,w as _,a as k,F as B,i as C,u as E,aR as l,A as N}from"./index-45856ec8.js";const x={__name:"Title",props:{node:{type:void 0,default:null},componentName:{type:String},properties:{type:Object,required:!0}},setup(c){const i=c,{node:u,properties:n}=v(i),{children:m}=y(u),a=n.value.depth,s=n.value.isTopic,d=r(()=>{let e="h"+a;return s&&(e="p"),e}),f=r(()=>{let e=[];return s&&(e.push("topic-title"),a===1&&e.push("first")),e});return(e,g)=>(o(),p(l(d.value),{class:N(f.value)},{default:_(()=>[(o(!0),k(B,null,C(E(m),(t,h)=>(o(),p(l(t.component),{key:"title_component_"+h,node:t.node,componentName:t.name,properties:t.properties},null,8,["node","componentName","properties"]))),128))]),_:1},8,["class"]))}};export{x as default};
