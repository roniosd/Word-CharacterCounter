(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const l=document.querySelector("html"),c=document.getElementById("icons"),u=document.getElementById("darkmode"),i=document.getElementById("sentence");document.getElementById("boxes");const a=document.getElementById("words"),m=document.getElementById("characters");u.addEventListener("click",()=>{const n=l.classList.toggle("dark");c.classList.toggle("fa-sun",n),c.classList.toggle("fa-moon",!n)});i.addEventListener("input",()=>{const n=i.value.trim(),o=n.replace(/\s+/g,"");a.innerText=n?n.split(/\s+/).length:0,m.innerText=o.length});