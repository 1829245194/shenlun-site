
function setPart(p, open){p.classList.toggle('closed', !open);p.querySelector('.part-head').setAttribute('aria-expanded',open);p.querySelector('.part-body').hidden=!open;}
function togglePart(h){var p=h.closest('.part');setPart(p,p.classList.contains('closed'));}
function openHash(){var p=document.getElementById(location.hash.slice(1));if(p&&p.classList.contains('part')){setPart(p,true);document.querySelectorAll('.reader-nav a[href^="#"]').forEach(function(a){a.classList.toggle('active',a.hash===location.hash);});requestAnimationFrame(function(){p.scrollIntoView({block:'start'});});}}
document.addEventListener('DOMContentLoaded',function(){
 document.querySelectorAll('.part').forEach(function(p,i){setPart(p,i===0);});
 var first=document.querySelector('.reader-nav a[href^="#"]');if(first&&!location.hash)first.classList.add('active');openHash();
});window.addEventListener('hashchange',openHash);
