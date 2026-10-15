'use strict';
const menuToggle=document.querySelector('#menu-toggle');
menuToggle.addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');menuToggle.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('#chapter-nav a').forEach(a=>a.addEventListener('click',()=>{document.body.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){document.body.classList.remove('menu-open');menuToggle.setAttribute('aria-expanded','false');}});
const links=[...document.querySelectorAll('#chapter-nav a')];
const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){const id=entry.target.id;links.forEach(a=>{const active=a.dataset.section===id;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}},{rootMargin:'-90px 0px -65% 0px',threshold:0});
document.querySelectorAll('.chapter,#obres').forEach(s=>observer.observe(s));
let scheduled=false;function updateProgress(){const available=document.documentElement.scrollHeight-innerHeight;document.querySelector('#reading-progress').style.width=(available>0?Math.min(100,scrollY/available*100):0)+'%';scheduled=false;}
addEventListener('scroll',()=>{if(!scheduled){requestAnimationFrame(updateProgress);scheduled=true;}},{passive:true});addEventListener('resize',updateProgress);updateProgress();
document.querySelector('#print-document').addEventListener('click',()=>print());
