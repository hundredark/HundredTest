import{_ as f,o as e,c as o,a as n,F as c,r as w,u as l,b as k,d as h,w as g,R as x,e as H,f as y,t as i,g as _,h as T,i as C,j as b}from"./app-c0d7145b.js";import{g as B,u as N}from"./utils-690d2ab8.js";import"./_commonjsHelpers-87174ba5.js";const V={__name:"Header",setup(p){return(s,r)=>(e(),o("div",null,[n("div",null,[(e(!0),o(c,null,w(l(k).routes,(t,a)=>(e(),o(c,{key:a},[t.name?(e(),h(l(x),{key:0,to:t.path,class:"ml-6"},{default:g(()=>[y(i(t.name),1)]),_:2},1032,["to"])):H("v-if",!0)],64))),128))])]))}},L=f(V,[["__file","/home/runner/work/HundredTest/HundredTest/src/components/Header.vue"]]),M={class:"mt-20"},j={class:"flex flex-row justify-between items-center w-screen"},E={__name:"Home",setup(p){const s=B(),r=_(!1),t=_("Guest"),a=T(()=>s?`from Mixin ${s}`:""),u=async()=>{const m=await N().user.profile();t.value=m.full_name,r.value=!0},v=()=>{window.localStorage.clear(),setTimeout(()=>{window.location.href=window.location.origin},100)};return C(async()=>{try{await u()}catch{}}),(d,m)=>(e(),o(c,null,[b(L),n("div",M,[n("div",j,[n("div",null," 你好, "+i(t.value)+" "+i(l(a)),1),n("div",null,[r.value?(e(),o("button",{key:0,onClick:v},"注销")):(e(),o("button",{key:1,onClick:u},"登陆"))])])])],64))}},$=f(E,[["__file","/home/runner/work/HundredTest/HundredTest/src/pages/Home.vue"]]);export{$ as default};