import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as s}from"./assets/vendor-651d7991.js";const o=document.querySelector(".form"),u=document.querySelector(".input-delay");let r;u.addEventListener("input",t=>{r=t.currentTarget.value});o.addEventListener("submit",t=>{t.preventDefault();function i(e,n){return new Promise((m,l)=>{setTimeout(()=>{n==="fulfilled"?m(e):l(e)},e)})}i(r,o.elements.state.value).then(e=>{s.show({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"#59A10D",messageColor:"#FFFFFF"})}).catch(e=>{s.show({message:`❌ Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"})}),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map
