const t=document.querySelector('.menu'),n=document.querySelector('nav');
t&&t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
const f=document.getElementById('inquiry');
if(f){f.addEventListener('submit',async e=>{e.preventDefault();const m=document.getElementById('msg'),b=f.querySelector('button');
if(f._gotcha.value)return;b.disabled=true;b.textContent='Sending…';m.className='';
try{const r=await fetch(f.dataset.ajax,{method:'POST',headers:{Accept:'application/json'},body:new FormData(f)});
if(!r.ok)throw 0;f.reset();m.className='ok';m.textContent='Thank you. We received your inquiry and will reply within one business day.'}
catch(x){m.className='err';m.textContent='Your message could not be sent. Please call us or email directly.'}
b.disabled=false;b.textContent='Send inquiry'})}
