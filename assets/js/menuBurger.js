let menu = document.querySelector('.menu');
let btnBurger = document.querySelector('#menuBurger');
let ancres = document.querySelectorAll('.ancre')



btnBurger.onclick = function(){
    menu.classList.toggle('menuOpen')
    this.classList.toggle('burger')
}



