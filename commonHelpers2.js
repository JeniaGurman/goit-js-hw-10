import{a as i}from"./assets/alertOptions-5eb72339.js";import{i as n}from"./assets/vendor-651d7991.js";const m=document.querySelector(".form"),u=document.querySelectorAll('input[name="state"]'),a=document.querySelector("fieldset"),l="pressed",r="checked",f="fulfilled";function h(s){const t=document.querySelector(".checked");a.classList.value.includes(l)||a.classList.add(l),t&&t.classList.remove(r);const o=document.querySelector('input[name="state"]:checked');if(o){const e=o.closest("label");e&&e.classList.add(r)}}const p=s=>{s.preventDefault();const t=Number(s.target.elements.delay.value),c=s.target.elements.state.value===f;new Promise((e,d)=>{setTimeout(()=>{c?e(`Fulfilled promise in ${t}ms`):d(`Rejected promise in ${t}ms`)},t)}).then(e=>{n.show({...i.success,message:e})}).catch(e=>{n.show({...i.error,message:e})})};m.addEventListener("submit",p);u.forEach(s=>{s.addEventListener("change",h)});
//# sourceMappingURL=commonHelpers2.js.map
