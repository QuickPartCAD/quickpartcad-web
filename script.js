const toggle=document.querySelector('.mobile-toggle');const nav=document.querySelector('.navlinks');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close menu':'Open menu')});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')))}
// Preselect package from the link query; leave FormSubmit POST to the browser.
const enquiryForm=document.querySelector('form[name="website-enquiry"]');
if(enquiryForm){
 const choice=enquiryForm.querySelector('[name="package"]');
 const params=new URLSearchParams(window.location.search);
 if(params.get('package')==='search-ready') choice.value='Search-Ready Website ($149)';
 if(params.get('package')==='starter') choice.value='Starter Website ($99)';
}
