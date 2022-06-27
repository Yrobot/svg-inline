const c=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}};c();const a="svg-inline",l=[],d=["class","style","src","width","height"],w=`
${a}{
  display: inline-block;
  font-size: 0;
}
${a}>svg{
  width: 100%;
  height: 100%;
}
`,p=()=>{const n=document.createElement("style");n.id=`${a}-stylesheet`,n.textContent=w,document.head.appendChild(n)};p();class h extends HTMLElement{constructor(){super();const i=Array.from(this.attributes).reduce((o,{name:r,value:t})=>(o[r]=t,o),{});l.forEach(o=>this.removeAttribute(o)),i.src&&fetch(i.src).then(o=>o.text()).then(o=>{const r=new DOMParser().parseFromString(o,"image/svg+xml").getElementsByTagName("svg")[0];Object.entries(i).forEach(([t,e])=>{d.includes(t)||r.setAttribute(t,String(e))}),r.hasAttribute("viewBox")||r.setAttribute("viewBox",`0 0 ${r.getAttribute("width")||i.width} ${r.getAttribute("height")||i.height}`),this.appendChild(r)})}}customElements.define(a,h);
