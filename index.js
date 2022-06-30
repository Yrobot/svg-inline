const c=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}};c();const a="svg-inline",l=[],d=["class","style","src","width","height"],w=`
${a}{
  display: inline-block;
  font-size: 0;
}
${a}>svg{
  width: 100%;
  height: 100%;
}
`,p=()=>{const n=document.createElement("style");n.id=`${a}-stylesheet`,n.textContent=w,document.head.appendChild(n)};p();class m extends HTMLElement{constructor(){super();const o=Array.from(this.attributes).reduce((i,{name:r,value:e})=>(i[r]=e,i),{});l.forEach(i=>this.removeAttribute(i)),o.src&&fetch(o.src).then(i=>i.text()).then(i=>{const r=new DOMParser().parseFromString(i,"image/svg+xml").getElementsByTagName("svg")[0];Object.entries(o).forEach(([e,t])=>{d.includes(e)||r.setAttribute(e,String(t))}),r.hasAttribute("viewBox")||r.setAttribute("viewBox",`0 0 ${r.getAttribute("width")||o.width} ${r.getAttribute("height")||o.height}`),this.appendChild(r)})}}customElements.define(a,m);
