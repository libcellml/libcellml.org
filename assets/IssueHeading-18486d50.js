import{o as _,a as g}from"./VFileInput-285a6b06.js";import{o as i,n,w as e,h as s,s as f,b as a,e as r,ap as p,f as C,v as V,aq as y,C as c,u as h,q as m,d as l,G as x}from"./index-45856ec8.js";const S=l("strong",null,"Specification section: ",-1),N={__name:"IssueCard",props:{issue:{type:Object,required:!0},learnMoreButton:{type:Boolean,default:!1}},emits:["dismiss"],setup(t,{emit:u}){const o=()=>{u("dismiss")};return(B,d)=>(i(),n(m,{elevation:"0",outlined:""},{default:e(()=>[s(f,null,{default:e(()=>[a(r(t.issue.type),1)]),_:1}),t.issue.ref?(i(),n(p,{key:0},{default:e(()=>[S,a(" "+r(t.issue.ref),1)]),_:1})):C("",!0),s(V,null,{default:e(()=>[a(r(t.issue.description)+" "+r(t.issue.url),1)]),_:1}),s(y,null,{default:e(()=>[s(c,{left:"",text:"",light:"",onClick:d[0]||(d[0]=w=>h(_)(t.issue.url)),color:"primary"},{default:e(()=>[a("Learn more")]),_:1}),s(g),s(c,{right:"",text:"",color:"warning",onClick:o},{default:e(()=>[a("Dismiss")]),_:1})]),_:1})]),_:1}))}},k={style:{"padding-right":"1em","font-weight":"600"}},b={__name:"IssueHeading",props:{title:{type:String,required:!0},issueSource:{type:String,default:"Parser"}},setup(t){return(u,o)=>(i(),n(m,{class:"red darken-1 errors",elevation:"0"},{default:e(()=>[s(f,null,{default:e(()=>[s(x,{large:""},{default:e(()=>[a("mdi-alert-circle")]),_:1}),l("span",k,r(t.title)+":",1),l("span",null,r(t.issueSource)+" errors were found!",1)]),_:1})]),_:1}))}};export{b as _,N as a};
