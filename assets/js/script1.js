let tl = gsap.timeline();
let touchStartY = 0;
let touchEndY = 0;
let index = 0;

function getScrollDirection(startY, endY) {
  return endY > startY ? "up" : "down";
}

const ANIMATION_DURATION = 1;
const DIV_TEST_SELECTORS = [".divTest1", ".divTest2", ".divTest3", ".divTest4"];
const CONTAINER_SOUS_ACCUEIL = ".containerSousAccueil";

function updateIndexAndScrolling(newIndex, allowScrollingDirection, value) {
  index = newIndex;
  fullpage_api.setAllowScrolling(value, allowScrollingDirection);
}

let isAnimating = false; // Drapeau pour suivre l'état de l'animation

function animateElementY(selector,{y,x, opacity},delay =0, onCompleteAction) {
  isAnimating = true; // Définir isAnimating à true au début de l'animation
  gsap.to(selector, {
    duration: ANIMATION_DURATION,
    x, y, opacity, delay,
    ease: "power2.out",
    onComplete: () => {
      isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
      if (onCompleteAction) onCompleteAction(); console.log('okhi')
    },
  });
}

function animateElement(selector, y, opacity, onCompleteAction) {
  isAnimating = true; // Définir isAnimating à true au début de l'animation
  gsap.to(selector, {
    duration: ANIMATION_DURATION,
    y,
    opacity,
    ease: 'power2.out',
    onComplete: () => {
      isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
      if (onCompleteAction) onCompleteAction(); console.log('ok')
    }
  });
}

function handleScrollEvent(startY, endY) {
  const scrollDirection = getScrollDirection(startY, endY);

  if (isAnimating) return;
  if (scrollDirection === "down") {

    console.log(index)
    if(window.innerWidth <= 1024){
      console.log('ok')
    if (index === 0) {
      fullpage_api.setAllowScrolling(false, "up");
      animateElementY('#containerDiv', {opacity: 1  });
     
      animateElementY(DIV_TEST_SELECTORS[0],  {  y: '0%', opacity: 1 }, () => {
        updateIndexAndScrolling(1, "up", false);
      });
      animateElementY(CONTAINER_SOUS_ACCUEIL, {  y: '-55%', opacity: 1 });
      
      //animateElementY('#containerDiv', {opacity: 1  });
    } else if (index === 1) {
      animateElementY(DIV_TEST_SELECTORS[1],{  y: '0', opacity: 1 }, () => {
        updateIndexAndScrolling(2, "up", false);
      });
      
      animateElementY(DIV_TEST_SELECTORS[0], {  y: '100%', opacity: 1 });
    } else if (index === 2) {
      animateElementY(DIV_TEST_SELECTORS[2], {  y: '0', opacity: 1 }, () => {
        updateIndexAndScrolling(3, "down", false);
      });
      animateElementY(DIV_TEST_SELECTORS[1], {  y: '100%', opacity: 1 });
    } else if (index === 3) {
     

      gsap.to('.titreSection2', {                      //DESKTOP
        duration: 1,
        transform: 'translateX(-50%)',
        opacity:0,
        ease: 'power2.out'
      });
  
      gsap.to('.textSection2', {                       //DESKTOP
        duration: 1,
        transform: 'translateX(-50%)',
        opacity:0,
        delay:0.2,
        ease: 'power2.out'
      });

      animateElementY(DIV_TEST_SELECTORS[1], {  y: '100%', opacity: 1 });
      animateElementY(DIV_TEST_SELECTORS[3],  {  y: '0', opacity: 1 },0, () => {
        updateIndexAndScrolling(4, "down", true);
      });
     /* gsap.to(".ligneVertical1", {
        duration: 1,
        y: "100%",
        opacity: 1,
        ease: "power2.out",
        scaleY: 0,
        onComplete: () => {
          animateElementY(DIV_TEST_SELECTORS[3], { y: '0', opacity: 1 });
        },
      });

      animateElementY(".ligneVertical1", {  y: '100%', opacity: 1 }, () => {
        animateElementY(DIV_TEST_SELECTORS[3],  {  y: '0', opacity: 1 });
      });*/

      animateElementY(DIV_TEST_SELECTORS[2], {  y: '100%', opacity: 1 });
    } 
  }else{
    console.log('teste')
    if (index === 0) {
      fullpage_api.setAllowScrolling(false, 'up');
      animateElement(DIV_TEST_SELECTORS[1], '0%', 1, () => {
        updateIndexAndScrolling(1, 'up',false);
      });
      animateElement(DIV_TEST_SELECTORS[0], '100%', 1)


      
    } else if (index === 1) {
      animateElement(DIV_TEST_SELECTORS[2], '0%', 1, () => {
        updateIndexAndScrolling(2, 'down',true);
      });
      animateElement(DIV_TEST_SELECTORS[1], '100%', 1);

      animateElement('.texteBtn1', '0%', 1)
    } else if (index === 2) {
     
      //animateElement(DIV_TEST_SELECTORS[1], '100%', 1);*/
    }
    else if (index === 3) {
     
     /* animateElement(DIV_TEST_SELECTORS[2], '100%', 1, () => {
        updateIndexAndScrolling(4, 'down',true);
      });
      gsap.to('.containerSousAccueil', {
        duration: 1,
        x: '-100%',
        opacity: 0,
        ease: 'power2.out'
      });

      gsap.to('.ligneVertical1', {
        duration: 1,
        y: '100%',
        opacity: 1,
        ease: 'power2.out',
        scaleY:0,
        onComplete: () => {
          animateElement(DIV_TEST_SELECTORS[3], '0', 1);
        }
      });*/


     /* animateElement('.ligneVertical', '100%', 1, () => {
        animateElement(DIV_TEST_SELECTORS[3], '0', 1);
        gsap.to('.ligneVertical2', {
          duration: 0.9, // durée en secondes
          y: '40%', // déplace la ligne vers le haut
          ease: 'power2.out', // effet d'accélération pour l'animation
         scaleY: 0.3, //
    });
   
  })*/

     

     
    }}

  } else if (scrollDirection === "up") {
    console.log(index)
    if(window.innerWidth <= 1024){
    if (index === 0) {
      fullpage_api.setAllowScrolling(true, "up");
      animateElementY(DIV_TEST_SELECTORS[0], {y: '100%', opacity: 0 }, () => {
        updateIndexAndScrolling(0, "up", true);
      });
      animateElementY(CONTAINER_SOUS_ACCUEIL,{ y: '0', opacity: 1 });
    } else if (index === 1) {
        
      animateElementY(DIV_TEST_SELECTORS[0], {  y: '100%', opacity: 0 }, () => {
        updateIndexAndScrolling(0, "up", false);
      });
      animateElementY(CONTAINER_SOUS_ACCUEIL, {  y: '0%', opacity: 1 });
    } else if (index === 2) {
      animateElementY(DIV_TEST_SELECTORS[1], {  y: '100%', opacity: 0 }, () => {
        updateIndexAndScrolling(1, "up", false);
      });
      animateElementY(DIV_TEST_SELECTORS[0], {  y: '0%', opacity: 1 });
    } else if (index === 3) {
      animateElementY(DIV_TEST_SELECTORS[2], {  y: '100%', opacity: 0 }, () => {
        updateIndexAndScrolling(2, "down", false);
      });
      animateElementY(DIV_TEST_SELECTORS[1], {  y: '0%', opacity: 1 });
    } else if (index === 4) {
      animateElementY(DIV_TEST_SELECTORS[3], {  y: '100%', opacity: 1 });

      animateElementY(DIV_TEST_SELECTORS[2], {  y: '0%', opacity: 1 }, () => {
        updateIndexAndScrolling(3, "down", false);
      });

      gsap.to('.titreSection2', {                      //DESKTOP
        duration: 1,
        transform: 'translateX(0%)',
        opacity:1,
        ease: 'power2.out'
      });
  
      gsap.to('.textSection2', {                       //DESKTOP
        duration: 1,
        transform: 'translateX(0%)',
        opacity:1,
        delay:0.2,
        ease: 'power2.out'
      });


      gsap.to(".ligneVertical1", {
        duration: 0.9, // durée en secondes
        y: "-85%", // déplace la ligne vers le haut
        ease: "power2.out",
        scaleY: 1, // effet d'accélération pour l'animation
      });
    }
  }
else{
  if(index === 0){
    fullpage_api.setAllowScrolling(true, 'up');
    animateElement(DIV_TEST_SELECTORS[1], '100%', 0, () => {
      updateIndexAndScrolling(0, 'up',true);
    });
    //animateElement(CONTAINER_SOUS_ACCUEIL, '0%', 1);
  }
  else if (index === 1) {

    animateElement(DIV_TEST_SELECTORS[1], '100%', 0, () => {
      updateIndexAndScrolling(0, 'up',true);
    });
    animateElement(DIV_TEST_SELECTORS[0], '0%', 1);
  } else if (index === 2) {
    animateElement(DIV_TEST_SELECTORS[2], '100%', 0, () => {
      updateIndexAndScrolling(1, 'down',false);
    });
    animateElement(DIV_TEST_SELECTORS[1], '0%', 1);
    //animateElement(DIV_TEST_SELECTORS[0], '0%', 1);
    animateElement('.texteBtn1', '100%', 1)
    fullpage_api.setAllowScrolling(false, 'down');
  } else if (index === 3 ) {
  
  }
}
}}

let indexCircle = 0;

function updateIndexAndScrollingCircle(
  newIndex,
  allowScrollingDirection,
  value
) {
  indexCircle = newIndex;
  fullpage_api.setAllowScrolling(value, allowScrollingDirection);
}

function handleScrollEventCircle(startY, endY) {
  const scrollDirection = getScrollDirection(startY, endY);

  if (isAnimating) return;
  if (scrollDirection === "down") {

    if(window.innerWidth <= 1024){
    fullpage_api.setAllowScrolling(false, "up");

    if (indexCircle == 0) {
      isAnimating = true;

      gsap.to('#circleLogo', {
        opacity: 0,
        ease: 'power2.out',
        duration:0.3,
       onComplete: () => { gsap.to('.containerTitleSpiral1', {
        x:'50%',
      opacity:1,
        duration:1,
       
        ease: 'power2.out',
       
      });}
      });
      
      gsap.to("#cover", {
        duration: 1,
        r:'130%',
        onComplete: () => {
          isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
          updateIndexAndScrollingCircle(1, "up", false);
          gsap.set(".pathBurger", { stroke: `black` });
         
        },
      });

      gsap.to('.containerDriven', {
        opacity: 0,
        duration:1,
        x:'100%',
        ease: 'power2.out',
       
      });
    } else if (indexCircle == 1) {
      animateElementY(".containerTexteSpiral", { x: '-100%', y: '', opacity: 1 }, () => {
        updateIndexAndScrollingCircle(2, "up", false);
      });
    } else if (indexCircle == 2) {
      animateElementY(".containerTexteSpiral", { x: '-200%', y: '', opacity: 1 },0, () => {
        updateIndexAndScrollingCircle(3, "down", true);
      });
    }

  }else{
    fullpage_api.setAllowScrolling(false, 'up');

    if(indexCircle == 0){
      isAnimating = true;
      gsap.to("#cover", {duration: 1, r:'103%', onComplete: () => {
        isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
        updateIndexAndScrollingCircle(1, 'up',false);
        gsap.set('.pathBurger', { stroke: `black` });
      
         //gsap.to('.imageElement', { y: 0, duration: 0.7 });
         //gsap.to('.titleElement', { x: 0, duration: 0.7 });
        
      }});

      gsap.to('#circleLogo', {
        opacity: 0,
        ease: 'power2.out',
        duration:0.3,
       onComplete: () => { gsap.to('.containerTitleSpiral1', {
        x:'50%',
      opacity:1,
        duration:1,
       
        ease: 'power2.out',
       
      });}
      });

      gsap.to('.containerDriven', {
        opacity: 0,
        duration:1,
        x:'100%',
        ease: 'power2.out',
       
      });
     /* gsap.to('', {
        duration: 0.8,
        ease: 'power2.out',
        clipPath:"circle(100%)",
        /*onUpdate: function () {
          gsap.set('.circle', { clipPath: `circle(${7 + (this.progress() * 93)}% at center)` });
          if (this.progress() >= 0.3 && !this.midAnimationTriggered) {
            this.midAnimationTriggered = true; // Empêcher que l'animation se déclenche plus d'une fois

            // Votre logique d'animation supplémentaire ici
            // Par exemple, changer la couleur ou effectuer une autre transformation
           // gsap.to('.imageElement', { y: 0, duration: 0.7 });
           // gsap.to('.titleElement', { x: 0, duration: 0.7 });
            
        }
        
        onComplete: () => {
          isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
          updateIndexAndScrollingCircle(1, 'up',false);
          gsap.set('.circle', { clipPath: `none` });
          gsap.set('.pathBurger', { stroke: `#727272` });
           //gsap.to('.imageElement', { y: 0, duration: 0.7 });
           //gsap.to('.titleElement', { x: 0, duration: 0.7 });
        }
      });*/
    } else if (indexCircle == 1){
      isAnimating = true;
      gsap.to('.containerTexteSpiral', {
        duration: 1,
        x:'-100%',
        ease: 'power2.out',
        onComplete: () => {
          isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
          updateIndexAndScrollingCircle(2, 'up',false);
         
          
        }
      });

 
    }
    else if (indexCircle == 2){
      
      isAnimating = true;
      gsap.to('.containerTexteSpiral', {
        duration: 1,
        x:'-200%',
        ease: 'power2.out',
        onComplete: () => {
          isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
          updateIndexAndScrollingCircle(3, 'down',true);
       
        }
      });


 
    }

  }
  } else if (scrollDirection === "up") {
    console.log("sisis tu scroll au debut")
    if(window.innerWidth <= 1024){
    if (indexCircle == 1) {
      gsap.to('.containerTitleSpiral', {
        x:'-50%',
      opacity:0,
        duration:1,
       
        ease: 'power2.out',
    });
      isAnimating = true;
      gsap.to("#cover", {
        duration: 1,
        r: "7%" ,
        onComplete: () => {
          isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
          updateIndexAndScrollingCircle(0, "up", true);
          gsap.set(".pathBurger", { stroke: `white` });
          gsap.to('#circleLogo', {
            opacity: 1,
            ease: 'power2.out',
           duration:0.5
          });
        },
      });

      gsap.to('.containerDriven', {
        opacity: 1,
        duration:1,
        x:'0',
        ease: 'power2.out',
       
      });
    } else if (indexCircle == 2) {
      animateElementY(".containerTexteSpiral", { x: '0', y: '', opacity: 1 }, () => {
        updateIndexAndScrollingCircle(1, "up", false);
      });
    } else if (indexCircle == 3) {
      fullpage_api.setAllowScrolling(false, "down");

      animateElementY(".containerTexteSpiral", { x: '-100%', y: '', opacity: 1 }, () => {
        updateIndexAndScrollingCircle(2, "up", false);
      });
    }
  }else{

    console.log("sisis tu scroll ")
    if(indexCircle == 1){
      isAnimating = true
  
    
   
        // desktop setup code here...
        gsap.to('.containerTitleSpiral', {
          x:'-50%',
        opacity:0,
          duration:1,
         
          ease: 'power2.out',
      });
      
      gsap.to("#cover", {duration: 1, r:'7%', onComplete: () => {
        isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
        updateIndexAndScrollingCircle(0, 'up',true);
        gsap.set('.pathBurger', { stroke: `white` });
        gsap.to('#circleLogo', {
          opacity: 1,
          ease: 'power2.out',
         duration:0.5
        });
        
      }});
      gsap.to('.containerDriven', {
        opacity: 1,
        duration:1.3,
        x:'0',
        ease: 'power2.out',
       
      });

     
      /*gsap.set('', { clipPath: `circle(100% at center)` });
      isAnimating = true;
      gsap.to('', {
        duration: 0.8,
        ease: 'power2.out',
        clipPath:"circle(7% at center)",
        /*onUpdate: function () {
     
          gsap.set('.circle', { clipPath: `circle(${7 + 93 * (1 - this.progress())}% at center)` });

            // Condition pour déclencher une animation supplémentaire au milieu de l'animation
            if (this.progress() >= 0.2 && !this.midAnimationTriggered) {
              this.midAnimationTriggered = true; // Empêcher que l'animation se déclenche plus d'une fois
  
              // Votre logique d'animation supplémentaire ici
              // Par exemple, changer la couleur ou effectuer une autre transformation
              //gsap.to('.imageElement', { y: '100%', duration: 0.7 });
              //gsap.to('.titleElement', { x: '150%', duration: 0.7 });
              gsap.set('.pathBurger', { stroke: `#fff` });
          }
        },
        onComplete: () => {
          isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
          updateIndexAndScrollingCircle(0, 'up',true);
         
        }
      });*/
    } else if(indexCircle == 2){
      isAnimating = true;
      gsap.to('.containerTexteSpiral', {
        duration: 1,
        x:'0',
        ease: 'power2.out',
        onComplete: () => {
          isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
          updateIndexAndScrollingCircle(1, 'up',false);
          
        }
      });

     
    }
    
    else if(indexCircle == 3){
      fullpage_api.setAllowScrolling(false, 'down');
      isAnimating = true;
      gsap.to('.containerTexteSpiral', {
        duration: 1,
        x:'-100%',
        ease: 'power2.out',
        onComplete: () => {
          isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
          updateIndexAndScrollingCircle(2, 'up',false);
          
        }
      });

    
    }
  }
  }
}

// Gestionnaire pour le défilement de la souris
function handleWheel(event) {
  var startY = event.deltaY > 0 ? 1 : -1; // Simplifié pour l'exemple
  var endY = 0;
  handleScrollEvent(startY, endY);
  event.preventDefault();
}

// Gestionnaires pour les événements tactiles
function handleTouchStart(event) {
  touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
  touchEndY = event.touches[0].clientY;
}

function handleTouchEnd(event) {
  handleScrollEvent(touchStartY, touchEndY);
  event.preventDefault();
}

function handleWheelCircle(event) {
  var startY = event.deltaY > 0 ? 1 : -1; // Simplifié pour l'exemple
  var endY = 0;
  handleScrollEventCircle(startY, endY);
  event.preventDefault();
}

function handleTouchStartCircle(event) {
  touchStartY = event.touches[0].clientY;
}

function handleTouchMoveCircle(event) {
  touchEndY = event.touches[0].clientY;
}

function handleTouchEndCircle(event) {
  handleScrollEventCircle(touchStartY, touchEndY);
  event.preventDefault();
}

// Ajout des écouteurs d'événements pour le tactile
document.addEventListener("touchstart", handleTouchStart, { passive: false });
document.addEventListener("touchmove", handleTouchMove, { passive: false });
document.addEventListener("touchend", handleTouchEnd, { passive: false });

// Ajout de l'écouteur d'événement pour le défilement de la souris
document.addEventListener("wheel", handleWheel, { passive: false });
let animationTextPath1, animationTextPath2;
// Configuration de fullpage.js avec les événements de scroll et de swipe
new fullpage("#fullPage", {
  autoScrolling: true,
  scrollingSpeed: 1500,
  onLeave: function (origin, destination, direction) {
    // Vérifiez si vous passez de la section 1 à la section 2
    if (origin.index === 0 && destination.index === 1) {
      // Réactiver fullPage.js autoScrolling

      if(window.innerWidth <= 1024){
        
        fullpage_api.setAllowScrolling(false, "down");
       
        animateElementY(".ligneVertical1", { x: '', y: '-85%'});
        animateElementY("#containerDiv", {  x:0, y:'55%' });
        gsap.to(".ligneHorizontal", {
          scaleX: 0.1, // Multiplier l'échelle en X par 2
          duration: 2,
          transformOrigin: "left", // La durée de l'animation en secondes, ici alignée avec fullPage.js
          ease: "power2.inOut", // Le type d'effet d'accélération pour l'animation
        });

        gsap.to('.titreSection2', {                      //DESKTOP
            duration: 1,
            transform: 'translateX(0%)',
            opacity:1,
            ease: 'power2.out'
          });
      
          gsap.to('.textSection2', {                       //DESKTOP
            duration: 1,
            transform: 'translateX(0%)',
            opacity:1,
            delay:0.2,
            ease: 'power2.out'
          });
  
        
      }else{
        fullpage_api.setAllowScrolling(false, 'down');
       
        // Animer la ligne verticale avec GSAP
        gsap.to('.ligneVertical1', {
          duration: 2, // durée en secondes
          y: '-85%', // déplace la ligne vers le haut
          ease: 'power2.out' // effet d'accélération pour l'animation
        });
    
        gsap.to('.ligneHorizontal', {
          scaleX: 0.1, // Multiplier l'échelle en X par 2
          duration: 2,
          transformOrigin: 'left', // La durée de l'animation en secondes, ici alignée avec fullPage.js
          ease: 'power2.inOut' // Le type d'effet d'accélération pour l'animation
        });
    
    
        gsap.to('.titreSection2', {                      //DESKTOP
          duration: 1,
          transform: 'translateX(0%)',
          opacity:1,
          ease: 'power2.out'
        });
    
        gsap.to('.textSection2', {                       //DESKTOP
          duration: 1,
          transform: 'translateX(0%)',
          opacity:1,
          delay:0.2,
          ease: 'power2.out'
        });
    
        
        gsap.to('.divTest1', {                       //DESKTOP
            duration: 1,
            y: '0',
            opacity:1,
            delay:0.2,
            ease: 'power2.out'
          });
     
      }
     
    }
    // Vérifiez si vous revenez à la section 1 depuis la section 2
    else if (origin.index === 1 && destination.index === 0) {

      if(window.innerWidth <= 1024){
        animateElementY(".ligneVertical1", { x: '', y: '0' });
        
        gsap.to(".ligneHorizontal", {
          scaleX: 1, // Multiplier l'échelle en X par 2
          duration: 1.5,
          // La durée de l'animation en secondes, ici alignée avec fullPage.js
          ease: "power2.inOut", // Le type d'effet d'accélération pour l'animation
        });
  
        gsap.to('.titreSection2', {                      //DESKTOP
            duration: 1,
            transform: 'translateX(-50%)',
            opacity:0,
            ease: 'power2.out'
          });
      
          gsap.to('.textSection2', {                       //DESKTOP
            duration: 1,
            transform: 'translateX(-50%)',
            opacity:0,
            delay:0.2,
            ease: 'power2.out'
          });
  
  
        document.removeEventListener("wheel", handleWheel, { passive: false });
        document.removeEventListener("touchstart", handleTouchStart, {
          passive: false,
        });
        document.removeEventListener("touchmove", handleTouchMove, {
          passive: false,
        });
        document.removeEventListener("touchend", handleTouchEnd, {
          passive: false,
        });

        fullpage_api.setAllowScrolling(true, "down");
      }else{
        gsap.to('.ligneVertical1', {
          duration: 2, // durée en secondes
          y: '0', // déplace la ligne vers le haut
          ease: 'power2.out' // effet d'accélération pour l'animation
        });
    
        gsap.to('.ligneHorizontal', {
          scaleX: 1, // Multiplier l'échelle en X par 2
          duration: 1.5,
           // La durée de l'animation en secondes, ici alignée avec fullPage.js
          ease: 'power2.inOut' // Le type d'effet d'accélération pour l'animation
        });
    
        
        gsap.to('.titreSection2', {                          //DESKTOP
          duration: 1,  
          opacity:0,
          transform: 'translateX(-50%)',
          ease: 'power2.out'
        });
    
        gsap.to('.textSection2', {                           //DESKTOP
          duration: 1,
          transform: 'translateX(-50%)',
          opacity:0,
          delay:0.2,
          ease: 'power2.out'
        });
    
        gsap.to('.divTest1', {                       //DESKTOP
            duration: 1,
            y: '100%',
            opacity:1,
            delay:0.2,
            ease: 'power2.out'
          });
        fullpage_api.setAllowScrolling(true, 'down');
        document.removeEventListener('wheel', handleWheel, { passive: false });
        document.removeEventListener('touchstart', handleTouchStart, { passive: false });
        document.removeEventListener('touchmove', handleTouchMove, { passive: false });
        document.removeEventListener('touchend', handleTouchEnd, { passive: false });
      
      }
     
    } else if (origin.index === 2 && destination.index === 1) {
      if(window.innerWidth <= 1024){
      
      gsap.fromTo(".divTest4", { y: '100%' }, { y: '0', duration: 1,ease: 'Power0.easeNone', overwrite: 'auto',opacity:1});

      gsap.to(".ligneVertical1", {
        duration: 1,
        y: "-85%",
        opacity: 1,
        ease: "power2.out",
        
      
      });
      animateElementY(".titleDriven", { x: '65%', y: '', opacity: 0.5 });
      animateElementY(".textDriven", { x: '65%', y: '', opacity: 0.5 }, 0.1);
      animateElementY(".spanDriven", { x: '65%', y: '', opacity: 0.5}, 0.2);
      animateElementY(".ancreDriven", { x: '65%', y: '', opacity: 0.5 }, 0.3);
      fullpage_api.setAllowScrolling(false, "up");
      fullpage_api.setAllowScrolling(true, "down");
      document.removeEventListener('wheel', handleWheelCircle, { passive: false });
      document.removeEventListener('touchstart', handleTouchStartCircle, { passive: false });
      document.removeEventListener('touchmove', handleTouchMoveCircle, { passive: false });
      document.removeEventListener('touchend', handleTouchEndCircle, { passive: false });
    }
      else{
        gsap.to('.divTest4', {
          duration: 1,
          opacity: 1,
          ease: 'power2.out'
        });
        fullpage_api.setAllowScrolling(true, "down");
        gsap.to('.ligneVertical1', {
          duration: 1.3, // durée en secondes
          y: '-85%', // déplace la ligne vers le haut
          ease: 'power2.out',
       // effet d'accélération pour l'animation
    });
    
    gsap.to('.titreSection2', {                      //DESKTOP
      duration: 1,
      transform: 'translateX(0%)',
      opacity:1,
      ease: 'power2.out'
    });
    
    gsap.to('.textSection2', {                       //DESKTOP
      duration: 1,
      transform: 'translateX(0%)',
      opacity:1,
      delay:0.2,
      ease: 'power2.out'
    });
    
    gsap.to('.texteBtn1', {                       //DESKTOP
      duration: 1,
      y: '0%',
      opacity:1,
      delay:0.3,
      ease: 'power2.out'
    });
    
    
    gsap.to('.divTest3', {
      duration: 1,
      opacity: 1,
      y:'0',
      ease: 'power2.out'
    });

    gsap.to('.titleDriven1', {
      duration: 1.2,
      x: '65%',
      ease: 'power2.out',
      opacity:0
    });
    
    gsap.to('.textDriven1', {
      duration: 1.3, // durée en secondes
      x: '40%', // déplace la ligne vers le haut
      ease: 'power2.out',
      delay: 0.2,
      opacity:0
    // effet d'accélération pour l'animation
    });
    
    gsap.to('.spanDriven1', {
      duration: 1.2,
      x: '65%',
      ease: 'power2.out',
      delay: 0.3,
      opacity:0
    });
    
    gsap.to('.ancreDriven1', {
      duration: 1, // durée en secondes
      x: '65%', // déplace la ligne vers le haut
      ease: 'power2.out',
      delay: 0.4,
      opacity:0
    // effet d'accélération pour l'animation
    });
    document.removeEventListener('wheel', handleWheelCircle, { passive: false });
    document.removeEventListener('touchstart', handleTouchStartCircle, { passive: false });
    document.removeEventListener('touchmove', handleTouchMoveCircle, { passive: false });
    document.removeEventListener('touchend', handleTouchEndCircle, { passive: false });
         fullpage_api.setAllowScrolling(false, 'up');
         fullpage_api.setAllowScrolling(true, 'down');
      }
    } else if (origin.index === 1 && destination.index === 2) {
      if(window.innerWidth <= 1024){
      animateElementY(".divTest4", {  opacity: 0,y:'100%' });
      gsap.to(".ligneVertical1", {
        duration: 1,
        y: "200%",
        opacity: 1,
        ease: "power2.out",
        
      
      });
      animateElementY(".titleDriven", { x: '0', y: '', opacity: 1 });
      animateElementY(".textDriven", { x: '0', y: '', opacity: 1 }, 0.1);
      animateElementY(".spanDriven",{ x: '0', y: '', opacity: 1 }, 0.2);
      animateElementY(".ancreDriven", { x: '0', y: '', opacity: 1 }, 0.3);
      document.removeEventListener("wheel", handleWheel, { passive: false });
      document.removeEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.removeEventListener("touchend", handleTouchEnd, {
        passive: false,
      });
      fullpage_api.setAllowScrolling(false, "down");
    }
      else{
        console.log('oui oui')
        fullpage_api.setAllowScrolling(false, 'down')
    gsap.to('.divTest4', {
      duration: 1,
      opacity: 0,
      ease: 'power2.out'
    });

    gsap.to('.ligneVertical1', {
      duration: 1.3, // durée en secondes
      y: '200%', // déplace la ligne vers le haut
      ease: 'power2.out',
      
   // effet d'accélération pour l'animation
});

gsap.to('.divTest3', {
  duration: 1,
  opacity: 0,
  y:'100%',
  ease: 'power2.out'
});

gsap.to('.titreSection2', {                          //DESKTOP
  duration: 1,  
  transform: 'translateX(-50%)',
  opacity:0,
  ease: 'power2.out'
});

gsap.to('.textSection2', {                           //DESKTOP
  duration: 1,
  transform: 'translateX(-50%)',
  opacity:0,
  delay:0.2,
  ease: 'power2.out'
});

gsap.to('.texteBtn1', {                       //DESKTOP
  duration: 1,
  y: '100%',
  opacity:0,
  delay:0.3,
  ease: 'power2.out'
});



gsap.to('.titleDriven', {
  duration: 1,
  x: 0,
  ease: 'power2.out',
  opacity:1
});

gsap.to('.textDriven', {
  duration: 1, // durée en secondes
  x: 0, // déplace la ligne vers le haut
  ease: 'power2.out',
  delay: 0.1,
  opacity:1
// effet d'accélération pour l'animation
});

gsap.to('.spanDriven', {
  duration: 1,
  x: 0,
  ease: 'power2.out',
  delay: 0.2,
  opacity:1
});

gsap.to('.ancreDriven', {
  duration: 1, // durée en secondes
  x: 0, // déplace la ligne vers le haut
  ease: 'power2.out',
  delay: 0.3,
  opacity:1
// effet d'accélération pour l'animation
});

    document.removeEventListener('wheel', handleWheel, { passive: false });
    document.removeEventListener('touchstart', handleTouchStart, { passive: false });
    document.removeEventListener('touchmove', handleTouchMove, { passive: false });
    document.removeEventListener('touchend', handleTouchEnd, { passive: false });
    fullpage_api.setAllowScrolling(true, 'up');
;
  }
    } else if (origin.index === 2 && destination.index === 3) {

      
     document.removeEventListener('wheel', handleWheelCircle, { passive: false });
    document.removeEventListener('touchstart', handleTouchStartCircle, { passive: false });
    document.removeEventListener('touchmove', handleTouchMoveCircle, { passive: false });
    document.removeEventListener('touchend', handleTouchEndCircle, { passive: false });
      gsap.to('.ligneVertical1', {
        duration: 1.5, // durée en secondes
        ease: 'power2.out',
        transform:'translateY(125%)'
      // effet d'accélération pour l'animation
      });

      gsap.to(".anim-container p:nth-child(1)", { duration: 1, opacity: 1, delay: 0, x:0 });
      gsap.to(".anim-container p:nth-child(2)", { duration: 1, opacity: 1, delay: 0.325, x:0 });
      gsap.to(".anim-container p:nth-child(3)", { duration: 1, opacity: 1, delay: 0.625, x:0 });
      gsap.to(".anim-container p:nth-child(4)", { duration: 1, opacity: 1, delay: 0.925, x:0 });


      gsap.to(".titreContact span:nth-of-type(1)", { duration: 1, opacity: 1, transform: "translateY(0)"});
      gsap.to(".titreContact span:nth-of-type(2)", { duration: 1, opacity: 1, transform: "translateX(0)"});

      gsap.to(".containerTitreContact img , .copyright", { 
       // Durée de l'animation
        opacity: 1, // Animation de l'opacité
     // Déplacement en X
        delay: 0.5 // Délai avant le début de l'animation
    });
     /* animateElementY(".titleDriven", { x: '-100%', y: '', opacity: 0 });

      animateElementY(".textDriven", { x: '-100%', y: '', opacity: 0 }, 0.1);
      animateElementY(".spanDriven",{ x: '-100%', y: '', opacity: 0 }, 0.2);
      animateElementY(".ancreDriven", { x: '-100%', y: '', opacity: 0 }, 0.3);*/
    
    } else if (origin.index === 3 && destination.index === 2) {
      /*animateElementY(".titleDriven", { x: '0', y: '', opacity: 1 });
      animateElementY(".textDriven", { x: '0', y: '', opacity: 1 }, 0.1);
      animateElementY(".spanDriven", { x: '0', y: '', opacity: 1 }, 0.2);
      animateElementY(".ancreDriven", { x: '0', y: '', opacity: 1 }, 0.3);*/

      gsap.to('.ligneVertical1', {
        duration: 1, // durée en secondes
        ease: 'power2.out',
        transform:'translateY(220%)'
      // effet d'accélération pour l'animation
      });
      gsap.set(".pathBurger", { stroke: `black` });
      gsap.to(".anim-container p:nth-child(1)", { duration: 1, opacity: 1, delay: 0, x:'-40%' });
      gsap.to(".anim-container p:nth-child(2)", { duration: 1, opacity: 1, delay: 0.325, x:'-40%' });
      gsap.to(".anim-container p:nth-child(3)", { duration: 1, opacity: 1, delay: 0.625, x:'-40%' });
      gsap.to(".anim-container p:nth-child(4)", { duration: 1, opacity: 1, delay: 0.925, x:'-40%' });


      gsap.to(".titreContact span:nth-of-type(1)", { duration: 1, opacity: 1, transform: "translateY(100%)"});
      gsap.to(".titreContact span:nth-of-type(2)", { duration: 1, opacity: 1, transform: "translateX(-100%)"});

    
      fullpage_api.setAllowScrolling(true, "down");
      fullpage_api.setAllowScrolling(false, "up");
     
    } /*else if (origin.index === 3 && destination.index === 4) {
      document.removeEventListener("wheel", handleWheelCircle, {
        passive: false,
      });
      document.removeEventListener("touchstart", handleTouchStartCircle, {
        passive: false,
      });
      document.removeEventListener("touchmove", handleTouchMoveCircle, {
        passive: false,
      });
      document.removeEventListener("touchend", handleTouchEndCircle, {
        passive: false,
      });
      // Animation pour le premier textPath
      if (!animationTextPath1) {
        animationTextPath1 = gsap.to("#textPath1", {
          attr: { startOffset: "-100%" },
          duration: 25,
          repeat: -1,
          ease: "none",
        });
      } else {
        animationTextPath1.resume();
      }

      // Initialiser ou reprendre l'animation pour le second textPath
      if (!animationTextPath2) {
        animationTextPath2 = gsap.to("#textPath2", {
          attr: { startOffset: "-100%" },
          duration: 25,
          repeat: -1,
          ease: "none",
          delay: 12.5,
        });
      } else {
        animationTextPath2.resume();
      }
    } else if (origin.index === 4 && destination.index === 3) {
      if (animationTextPath1) {
        animationTextPath1.pause();
      }
      if (animationTextPath2) {
        animationTextPath2.pause();
      }
    }*/
  },
  afterLoad: function (origin, destination, direction) {
    // ... Votre logique existante ici ...
console.log('oui non',destination.index)
    if (destination.index == 4) {
    
    }

    if (destination.index == 3) {
     
      fullpage_api.setAllowScrolling(true, "up");
     
      gsap.set(".pathBurger", { stroke: `white` });


    
    }
    if (destination.index == 2) {
      document.addEventListener('wheel', handleWheelCircle, { passive: false });
      document.addEventListener('touchstart', handleTouchStartCircle, { passive: false });
      document.addEventListener('touchmove', handleTouchMoveCircle, { passive: false });
      document.addEventListener('touchend', handleTouchEndCircle, { passive: false });
      
    }
    if (destination.index == 1) {
      
      document.addEventListener("wheel", handleWheel, { passive: false });
      document.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.addEventListener("touchend", handleTouchEnd, { passive: false });
    }else {
      console.log('hihi')
     
  
     
      document.removeEventListener("wheel", handleWheel, { passive: false });
      document.removeEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      document.removeEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      document.removeEventListener("touchend", handleTouchEnd, {
        passive: false,
      });
    }
  },
});






let currentState = {
  isMobileView: window.innerWidth <= 1024
};

function hasViewTypeChanged(newIsMobileView) {
  return currentState.isMobileView !== newIsMobileView;
}

function getIndexForViewChange(isMobileView, currentIndex) {
  // Logique de correspondance d'index entre les vues mobile et desktop
  if (isMobileView) {
    
   
    animateElementY('#containerDiv', {  y: '55%', opacity: 1 });
    animateElementY(CONTAINER_SOUS_ACCUEIL, {  y: '-55%', opacity: 1 });
    animateElementY('.divTest4', {  y: '100%' });
   
    if(currentIndex === 0 ){
        fullpage_api.setAllowScrolling(false, "up");
        animateElementY(DIV_TEST_SELECTORS[0], {  y: '0%', opacity: 1 });
        
      index = 1
      return 1
    }

    if(currentIndex === 1){

    
      index = 2
      return 2
    }

    if(currentIndex === 2){
      fullpage_api.setAllowScrolling(false, "up, down");
     
    

      index = 3
      return 4
    }

  } else {
   
 
    animateElementY('#containerDiv', {  y: '0%', opacity: 1 });
    animateElementY(CONTAINER_SOUS_ACCUEIL, {  y: '0%', opacity: 1 });
   
    if(currentIndex === 0 ){
      
        animateElementY('.divTest1', {  y: '0%', opacity: 1 });
  
      index = 0
      return 0
    }

    if(currentIndex === 1 ){
      animateElementY('.texteBtn1', {  y: '100%' });
     index = 0
      return 0
    }

    if(currentIndex === 2){
     
      animateElementY('.texteBtn1', {  y: '100%' });
    index = 1
      return 1
    }

    if(currentIndex === 3 ){

   console.log('ok')
     
   animateElementY('.texteBtn1', {  y: '0%' });
  
    index = 2
      return 2
    }

    if(currentIndex === 4 ){

      animateElementY('.divTest3', {  y: '0%', opacity: 1 });
      animateElementY('.texteBtn1', {  y: '0%',opacity:1 });
   gsap.to('.titreSection2', {                      //DESKTOP
    duration: 1,
    transform: 'translateX(0%)',
    opacity:1,
    ease: 'power2.out'
  });

  gsap.to('.textSection2', {                       //DESKTOP
    duration: 1,
    transform: 'translateX(0%)',
    opacity:1,
    delay:0.2,
    ease: 'power2.out'
  });
  
    index = 2
      return 2
    }
  }


 
}




function handleResize() {
  const newIsMobileView = window.innerWidth <= 1024;
  const SECTION_CIBLE = 'section2';
  const currentIndex = fullpage_api.getActiveSection().item.id

 

  if (currentState.isMobileView !== newIsMobileView && currentIndex === SECTION_CIBLE ) {
    // Ajustez l'index seulement si le type de vue a changé 
   
    getIndexForViewChange(newIsMobileView, index)
  
  }else if(currentState.isMobileView !== newIsMobileView && currentIndex == 'section1'){
    if (newIsMobileView) {
    
      
document.querySelector(".divTest4").style.transform="translateY(100%)"
      index = 0
    
    } else {

        animateElementY('#containerDiv', {  y: '0%', opacity: 1 });
    animateElementY(CONTAINER_SOUS_ACCUEIL, {  y: '0%', opacity: 1 });
      index = 0
    
    }  
  }

  else if(currentState.isMobileView !== newIsMobileView && currentIndex == 'section4'){
    if (newIsMobileView) {
    
      animateElementY('#containerDiv', {  y: '55%', opacity: 1 });
      animateElementY(CONTAINER_SOUS_ACCUEIL, {  y: '-55%', opacity: 1 });
      index = 4

      if(indexCircle == 1 || indexCircle == 2 || indexCircle == 3){
        gsap.to("#cover", {
          duration: 1,
          r:'130%',
        
        });
      }
      
    } else {
     
      animateElementY('#containerDiv', {  y: '0%'});
      animateElementY(CONTAINER_SOUS_ACCUEIL, {  y: '0%', opacity: 1 });
      index = 2

      if(indexCircle == 1 || indexCircle == 2 || indexCircle == 3){
        gsap.to("#cover", {
          duration: 1,
          r:'103%',
        
        });

        gsap.to(".containerTitleSpiral1", {
          duration: 1,
          x:'50%',
          opacity:1
        });

       console.log('okazzzz')
        }
    
    }  
   
    
  } else if(currentState.isMobileView !== newIsMobileView && currentIndex == 'section5'){
    if (newIsMobileView) {
    
   index = 4
   animateElementY('#containerDiv', {  y: '55%', opacity: 1 });
   animateElementY(CONTAINER_SOUS_ACCUEIL, {  y: '-55%', opacity: 1 });

      if(indexCircle == 1 || indexCircle == 2 || indexCircle == 3){
        gsap.to("#cover", {
          duration: 1,
          r:'130%',
        
        });
      }
      
    } else {
     
      index = 2

      animateElementY('#containerDiv', {  y: '0%'});
      animateElementY(CONTAINER_SOUS_ACCUEIL, {  y: '0%', opacity: 1 });
      if(indexCircle == 1 || indexCircle == 2 || indexCircle == 3){
        gsap.to("#cover", {
          duration: 1,
          r:'103%',
        
        });

       

        }
    
    }  
   
    
  } 
 
  // Mise à jour du type de vue actuel
  currentState.isMobileView = newIsMobileView;
}
let resizeTimer;
window.addEventListener('resize', () => {
    // Change la couleur de fond en vert dès le début du redimensionnement
    document.querySelector('.divResize').style.zIndex = '1';

    // Efface le timer précédent
    clearTimeout(resizeTimer);

    // Définit un nouveau timer
    resizeTimer = setTimeout(() => {
        // Redimensionnement terminé, remettre le z-index à 0
        document.querySelector('.divResize').style.zIndex = '0';
    }, 300); 
    handleResize();
});



window.onload = function() {

  
  let counter = { value: 0 };

  // Cibler l'élément où le décompte sera affiché
  let counterElement = document.querySelector('.spanLoad')

  // Utiliser GSAP pour animer cet objet
  gsap.to(counter, {
    value: 100, // Animer de 0 à 100
    duration: 0.8, // Durée de l'animation en secondes
    onUpdate: () => {
      // À chaque mise à jour de l'animation, mettre à jour le texte de l'élément
      counterElement.textContent = `${Math.round(counter.value)}%`;
    },
    ease: 'power1.inOut' // Type d'accélération, peut être ajusté
  });

  gsap.to('.ligne1', {                      //DESKTOP
    duration: 0.8,
    transform: 'scaleX(0.1)',
    opacity:1,
    ease: 'power1.inOut',
    onComplete:()=>{
      gsap.to('.coordonneesHeader', {                      //DESKTOP
        duration: 1,
        transform: 'translate(0%,0%)',
        opacity:1,
        ease: 'power2.out',
        delay:0.4
      });
      
    
      gsap.to('#menuBurger', {                      //DESKTOP
        duration: 1,
        transform: 'translate(0%,0%)',
        opacity:1,
        ease: 'power2.out',
        delay:0.4
      });

      gsap.to('.ligneVertical1', {                      //DESKTOP
        duration: 1,
        transform: 'scaleY(1)',
        opacity:1,
        ease: 'power2.out',
        delay:0.2
      });



      gsap.to(' .containerMobilierDesktop', {                      //DESKTOP
        duration: 1,
        transform: 'translateY(0%)',
        opacity:1,
        ease: 'power2.out',
        delay:0.3
      });
    
      gsap.to('.rond', {                      //DESKTOP
        duration: 1,
        transform: 'translate(0%,0%)',
        opacity:1,
        ease: 'power2.out',
        delay:0.4
      });
    
      gsap.to('.ligne1', {                      //DESKTOP
        duration: 1,
        transform: 'scaleX(1)',
        opacity:1,
        ease: 'power1.inOut'})

        gsap.to('.titreAccueil', {                      //DESKTOP
          duration: 1,
          transform: 'translateX(0)',
          opacity:1,
          ease: 'power1.inOut',
        })
    
      counterElement.style.display='none'
    }
  });

 
}