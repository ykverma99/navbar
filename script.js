let menu = document.getElementsByClassName('navbar__toggle-img')[0]
let body = document.getElementsByClassName('navbar__btn')[0]
let drp = document.getElementById('navbar__links');
let container = document.getElementsByClassName('container')[0]


menu.addEventListener('click',()=>{
    drp.classList.toggle('active')
    opa.style.opaacity='1'    
})