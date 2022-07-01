const l=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};l();const a="svg-inline",c=[],d=["class","style","src","width","height"],w=`
${a}{
  display: inline-block;
  font-size: 0;
}
${a}>svg{
  width: 100%;
  height: 100%;
}
`,p=()=>{const n=document.createElement("style");n.id=`${a}-stylesheet`,n.textContent=w,document.head.appendChild(n)};p();class m extends HTMLElement{constructor(){super();const o=Array.from(this.attributes).reduce((r,{name:i,value:e})=>(r[i]=e,r),{});c.forEach(r=>this.removeAttribute(r)),o.src&&fetch(o.src).then(r=>r.text()).then(r=>{const i=new DOMParser().parseFromString(r,"image/svg+xml").getElementsByTagName("svg")[0];Object.entries(o).forEach(([e,t])=>{d.includes(e)||i.setAttribute(e,String(t))}),i.hasAttribute("viewBox")||i.setAttribute("viewBox",`0 0 ${i.getAttribute("width")||o.width} ${i.getAttribute("height")||o.height}`),this.appendChild(i)})}}customElements.define(a,m);
