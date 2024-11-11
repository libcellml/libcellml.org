import{o as n,n as v,t as f,c as _,aJ as H,a as u,d as i,e as d,u as s,h as x,F as h,i as k,b as g,f as E,r as C,aI as J,z as Q,aP as W,aQ as q,aN as G,aO as F,g as X,w as S,aR as b,aS as Y,aT as Z,aU as ee}from"./index-45856ec8.js";const P={__name:"LinkedText",props:{properties:Object,item:Object},setup(l){const p=l,{properties:e,item:a}=f(p),o=C({path:"",hash:""}),t=C(null),r=J(),m=Q();e.value?t.value=W(e.value.element):t.value=a.value,q(()=>{if(t.value.reference!==null)if(t.value.reference.refKind==="member"){o.value.path=r.getPageIdForReferenceId(O.value,t.value.reference.refId);let c=t.value.reference.refId;c.startsWith("#")||(c="#"+c),o.value.hash=c,o.value.path===void 0&&(o.value.path="",y(t.value.reference.refId,1))}else if(t.value.reference.refKind==="compound")o.value.path=t.value.reference.refId,o.value.hash="";else throw"Found a doxygen ref that is not being handled! Eeek."});function y(c,j){const T="<tmp-double-colon>",D="_1_1",M=c.replace(D,T).split("_");let w=[];for(const I of M)w.push(I.replace(T,D));if(j<w.length){let I=w.splice(0,j).join("_");const A=r.getBaseUrl(O.value);r.fetchPage({page_name:I,page_stem:O.value,page_url:A}).then(K=>{o.value.path=K.id}).catch(()=>{y(c,j+1)})}else throw`Could not determine the page that reference '${c}' came from.`}const O=_(()=>G(m)),V=_(()=>t.value.reference!==null?t.value.linkedText:`${t.value.text} `),U=_(()=>{const c=t.value.text.split(t.value.linkedText)[0];return F(c)}),L=_(()=>{const c=t.value.text.split(t.value.linkedText)[1];return F(c)});return(c,j)=>{const T=X("router-link");return n(),u("span",null,[t.value.reference===null&&t.value.text?(n(),u(h,{key:0},[g(d(s(V)),1)],64)):t.value.reference!==null?(n(),u(h,{key:1},[g(d(s(U))+" ",1),x(T,{to:{path:o.value.path,hash:o.value.hash}},{default:S(()=>[g(d(s(V)),1)]),_:1},8,["to"]),g(" "+d(s(L)),1)],64)):E("",!0)])}}},te={class:"pre"},ne={__name:"computeroutput",props:{properties:Object},setup(l){const p=l,{properties:e}=f(p),{children:a}=N(e.value.element);return(o,t)=>(n(),u("code",null,[i("span",te,[(n(!0),u(h,null,k(s(a),(r,m)=>(n(),v(b(r.component),{key:"child_"+m,properties:r.properties},null,8,["properties"]))),128))])]))}},re={__name:"entry",props:{properties:Object},setup(l){const p=l,{properties:e}=f(p),a=C({}),o=C(""),{children:t}=N(e.value.element);for(const r of e.value.element.attributes)r.name==="thead"?o.value=r.value==="yes"?"th":"td":a.value[r.name]=r.value;return(r,m)=>(n(),v(b(o.value),Z(ee(a.value)),{default:S(()=>[(n(!0),u(h,null,k(s(t),(y,O)=>(n(),v(b(y.component),{key:"child_"+O,properties:y.properties},null,8,["properties"]))),128))]),_:1},16))}},le={__name:"mdash",props:{properties:void 0},setup(l){return(p,e)=>"—"}},ae=i("dt",null,[i("strong",null,"Parameters")],-1),pe={__name:"parameterlist",props:{properties:Object},setup(l){const p=l,{properties:e}=f(p),{children:a}=N(e.value.element);return(o,t)=>(n(),u("dl",null,[ae,i("dd",null,[i("ul",null,[(n(!0),u(h,null,k(s(a),(r,m)=>(n(),v(b(r.component),{key:"child_"+m,properties:r.properties},null,8,["properties"]))),128))])])]))}},se={__name:"plaintext",props:{properties:void 0},setup(l){return(p,e)=>d(l.properties.text)}},oe={__name:"simplesect",props:{properties:Object},setup(l){const p=l,{properties:e}=f(p),{children:a}=N(e.value.element),o=_(()=>{const t=e.value.element.getAttribute("kind");return t==="see"?"See also":t.charAt(0).toUpperCase()+t.slice(1)});return(t,r)=>(n(),u("dl",null,[i("dt",null,[i("strong",null,d(s(o)),1)]),i("dd",null,[i("ul",null,[(n(!0),u(h,null,k(s(a),(m,y)=>(n(),v(b(m.component),{key:"child_"+y,properties:m.properties},null,8,["properties"]))),128))])])]))}},ue={__name:"sp",props:{properties:void 0},setup(l){return(p,e)=>" "}},ie={__name:"table",props:{properties:Object},setup(l){const p=l,{properties:e}=f(p),{children:a}=N(e.value.element);return(o,t)=>(n(),u("table",null,[i("tbody",null,[(n(!0),u(h,null,k(s(a),(r,m)=>(n(),v(b(r.component),{key:"child_"+m,properties:r.properties},null,8,["properties"]))),128))])]))}},R=new Map([["bold","strong"],["codeline","span"],["emphasis","em"],["highlight","mark"],["itemizedlist","ul"],["listitem","li"],["para","span"],["parameterdescription","span"],["parameteritem","li"],["parametername","code"],["parameternamelist","span"],["programlisting","code"],["row","tr"]]),$=new Map([["computeroutput",ne],["entry",re],["parameterlist",pe],["ref",P],["simplesect",oe],["table",ie]]);function N(l){return{children:_(()=>{let p=[];for(const e of l.childNodes){let a;e.nodeName==="#text"?a={component:se,properties:{text:e.nodeValue}}:R.has(e.nodeName)?a={component:B,properties:{element:e,tag:R.get(e.nodeName)}}:$.has(e.nodeName)?a={component:$.get(e.nodeName),properties:{element:e}}:e.nodeName==="sp"?a={component:ue,properties:{}}:e.nodeName==="mdash"?a={component:le,properties:{}}:a={component:Y,properties:{name:e.nodeName}},p.push(a)}return p})}}const B={__name:"SimpleTag",props:{properties:Object},setup(l){const p=l,{properties:e}=f(p),{children:a}=N(e.value.element);return(o,t)=>(n(),v(b(s(e).tag),null,{default:S(()=>[(n(!0),u(h,null,k(s(a),(r,m)=>(n(),v(b(r.component),{key:"child_"+m,properties:r.properties},null,8,["properties"]))),128))]),_:1}))}},z={__name:"BriefDescription",props:{element:void 0},setup(l){return(p,e)=>(n(),v(B,{properties:{element:l.element,tag:"span"}},null,8,["properties"]))}},me={__name:"DetailedDescription",props:{element:void 0},setup(l){return(p,e)=>(n(),v(B,{properties:{element:l.element,tag:"dd"}},null,8,["properties"]))}},ce=["id"],de=i("tr",null,[i("th",null,"Constant"),i("th",null,"Description")],-1),he=["id"],ge={__name:"EnumSection",props:{data:Object},setup(l){const p=l,{data:e}=f(p),a=_(()=>H(e.value.brief));return(o,t)=>(n(),u("div",{id:s(e).id,class:"enum"},[i("h3",null,"enum "+d(s(e).name),1),x(z,{element:s(a)},null,8,["element"]),i("table",null,[de,(n(!0),u(h,null,k(s(e).enumValues,(r,m)=>(n(),u("tr",{key:`enum_${s(e).name}_${m}`,id:r.id},[i("td",null,d(r.name),1),i("td",null,[x(z,{element:r.brief},null,8,["element"])])],8,he))),128))])],8,ce))}},ve=["id"],fe={class:"sig-name"},be={__name:"PublicFunction",props:{data:Object},setup(l){const p=l,{data:e}=f(p),a=_(()=>{let o="";if(e.value.argsString.includes(")")){const t=e.value.argsString.split(")");o=t[t.length-1]}return o});return(o,t)=>(n(),u("dl",{id:s(e).id,class:"function"},[i("dt",null,[x(P,{item:s(e).returnType},null,8,["item"]),i("code",fe,d(s(e).name),1),g("( "),(n(!0),u(h,null,k(s(e).params,(r,m)=>(n(),u("span",{key:s(e).name+"_"+m},[x(P,{item:r.paramType},null,8,["item"]),g(),i("em",null,d(r.name),1),m<s(e).params.length-1?(n(),u(h,{key:0},[g(", ")],64)):E("",!0)]))),128)),g(") "+d(s(a)),1)]),x(me,{element:s(e).detailed},null,8,["element"])],8,ve))}};export{z as E,P as R,me as i,ge as k,be as y};
