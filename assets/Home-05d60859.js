import{r as s,o as i,a as l,c as r,b as t,t as c,w as u,v as m}from"./index-1cd62eb6.js";import{u as p}from"./api-486852ac.js";import"./_commonjsHelpers-87174ba5.js";const v={__name:"Home",setup(w){const e=s("Guest"),a=()=>{window.localStorage.clear(),setTimeout(()=>{window.location.href=window.location.origin},100)};return i(async()=>{const o=await p().user.profile();e.value=o.full_name}),(n,o)=>(l(),r("div",null,[t("div",null,"你好, "+c(e.value),1),u(t("button",{onClick:a},"注销",512),[[m,e.value!=="Guest"]])]))}};export{v as default};
