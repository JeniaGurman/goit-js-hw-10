import"./assets/modulepreload-polyfill-ec808ebb.js";const o=document.querySelector(".form"),u=document.querySelector(".input-delay");let s;u.addEventListener("input",t=>{s=t.currentTarget.value});o.addEventListener("submit",t=>{t.preventDefault();function i(e,r){return new Promise((n,l)=>{setTimeout(()=>{r==="fulfilled"?n(e):l(e)},e)})}i(s,o.elements.state.value).then(e=>{iziToast.show({message:`✅ Fulfilled promise in ${e}ms`,position:"topRight",backgroundColor:"#59A10D",messageColor:"#FFFFFF"})}).catch(e=>{iziToast.show({message:`❌ Rejected promise in ${e}ms`,position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"})}),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map