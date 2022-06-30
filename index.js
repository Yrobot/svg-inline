const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const s of e.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}};c();const a="svg-inline",l=[],d=["class","style","src","width","height"],w=`
${a}{
  display: inline-block;
  font-size: 0;
}
${a}>svg{
  width: 100%;
  height: 100%;
}
`,p=()=>{const n=document.createElement("style");n.id=`${a}-stylesheet`,n.textContent=w,document.head.appendChild(n)};p();class h extends HTMLElement{constructor(){super();const o=Array.from(this.attributes).reduce((i,{name:r,value:t})=>(i[r]=t,i),{});l.forEach(i=>this.removeAttribute(i)),o.src&&fetch(o.src).then(i=>i.text()).then(i=>{const r=new DOMParser().parseFromString(i,"image/svg+xml").getElementsByTagName("svg")[0];Object.entries(o).forEach(([t,e])=>{d.includes(t)||r.setAttribute(t,String(e))}),r.hasAttribute("viewBox")||r.setAttribute("viewBox",`0 0 ${r.getAttribute("width")||o.width} ${r.getAttribute("height")||o.height}`),this.appendChild(r)})}}customElements.define(a,h);
