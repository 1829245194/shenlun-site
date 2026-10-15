
function setPart(p, open){p.classList.toggle('closed', !open);p.querySelector('.part-head').setAttribute('aria-expanded',open);p.querySelector('.part-body').hidden=!open;}
function togglePart(h){var p=h.closest('.part');setPart(p,p.classList.contains('closed'));}
function openHash(){var p=document.getElementById(location.hash.slice(1));if(p&&p.classList.contains('part')){setPart(p,true);document.querySelectorAll('.reader-nav a[href^="#"]').forEach(function(a){a.classList.toggle('active',a.hash===location.hash);});requestAnimationFrame(function(){p.scrollIntoView({block:'start'});});}}
document.addEventListener('DOMContentLoaded',function(){
 document.querySelectorAll('.part').forEach(function(p,i){setPart(p,i===0);});
 var all=document.querySelector('.digest-toggle'),details=Array.from(document.querySelectorAll('.news-detail'));
 function syncDetails(){if(!all)return;var open=details.length>0&&details.every(function(d){return d.open;});all.textContent=open?'收起全部要点':'展开全部要点';all.setAttribute('aria-pressed',String(open));}
 if(all){all.addEventListener('click',function(){var open=!details.every(function(d){return d.open;});details.forEach(function(d){d.open=open;});syncDetails();});details.forEach(function(d){d.addEventListener('toggle',syncDetails);});syncDetails();}
 var first=document.querySelector('.reader-nav a[href^="#"]');if(first&&!location.hash)first.classList.add('active');openHash();
});window.addEventListener('hashchange',openHash);
