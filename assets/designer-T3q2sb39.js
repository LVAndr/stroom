import{_ as o,o as i,i as s,w as c,f as u,t as r,n as d,j as f}from"./index-CrMK7WMl.js";const g={__name:"setButton",props:{tag:{type:String,default:"router-link"},url:{type:[String,Object],default:""},label:{type:String,default:"Кнопка"},color:{type:String,default:"apple-green"},rounded:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},full:{type:Boolean,default:!1},animation:{type:String,default:"light-green"}},emits:["btn-click"],setup(t,{emit:e}){const a=t,n=e,l=()=>{a.tag==="button"&&n("btn-click")};return(b,m)=>(i(),s(f(t.tag),{href:t.tag==="a"?t.url:null,to:t.tag==="router-link"?t.url:null,onClick:l,class:d(["btn",`btn__${t.color}`,{btn__rounded:t.rounded},{btn__disabled:t.disabled},{btn__full:t.full},`btn-animation__${t.animation}`])},{default:c(()=>[u(r(t.label),1)]),_:1},8,["href","to","class"]))}},S=o(g,[["__scopeId","data-v-aba70426"]]),k="/stroom/assets/designer-DIZSRfTT.jpg";export{S,k as p};
