import"./assets/styles-0a898ee7.js";const r=document.querySelector(".form"),d=document.querySelectorAll('input[name="state"]'),i=document.querySelector("fieldset"),n="pressed",l="checked",m="fulfilled";function u(s){const t=document.querySelector(".checked");i.classList.value.includes(n)||i.classList.add(n),t&&t.classList.remove(l);const c=document.querySelector('input[name="state"]:checked');if(c){const e=c.closest("label");e&&e.classList.add(l)}}const f=s=>{s.preventDefault();const t=Number(s.target.elements.delay.value),o=s.target.elements.state.value===m;new Promise((e,a)=>{setTimeout(()=>{o?e(`Fulfilled promise in ${t}ms`):a(`Rejected promise in ${t}ms`)},t)}).then(e=>{iziToast.show({...alertOptions.success,message:e})}).catch(e=>{iziToast.show({...alertOptions.error,message:e})})};r.addEventListener("submit",f);d.forEach(s=>{s.addEventListener("change",u)});
//# sourceMappingURL=commonHelpers2.js.map
