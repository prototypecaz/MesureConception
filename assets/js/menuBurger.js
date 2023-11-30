let menu = document.querySelector('#menu')
let btnBurger = document.querySelector('#menuBurger')
let anim1, anim2, anim3, anim4;
let menuAnimation = gsap.to('#menu', {
    paused: true, // Commence l'animation en pause
    duration: 0.3,
    transform: 'translateX(0)',
    ease: 'power2.out',
    reversed: true
});


let burgerRotation = gsap.to('#menuBurger', {
    paused: true,
    duration: 0.3,
    rotate: 90, // Ou 'rotate(90deg)'
    ease: 'power2.out',
    reversed: true,
    onComplete:()=>{
       // Créer et stocker les animations
       console.log('toto')
        anim1 = gsap.to(".containerAncre div a:nth-child(1)", { duration: 0.5, opacity: 1, y:0 });
        anim2 = gsap.to(".containerAncre div a:nth-child(2)", { duration: 0.5, opacity: 1, delay: 0.1, y:0 });
        anim3 = gsap.to(".containerAncre div a:nth-child(3)", { duration: 0.5, opacity: 1, delay: 0.2, y:0 });
        anim4 = gsap.to(".containerAncre div a:nth-child(4)", { duration: 0.5, opacity: 1, delay: 0.3,reversed:false, y:0,onComplete:()=>{    btnBurger.style.pointerEvents = 'initial'},onReverseComplete:()=>{menuAnimation.reverse();burgerRotation.reverse() } });
       

       // Inverser les animations lors du prochain clic
       
    },
 // Commence dans l'état inversé
});


btnBurger.onclick = function() {




    if( menuAnimation.reversed() ){
        this.style.pointerEvents = 'none'
        menuAnimation.play() 
        burgerRotation.play() 
    }else{
        anim1.reverse();
        anim2.reverse();
        anim3.reverse();
       anim4.reverse()
    }
    
    
}