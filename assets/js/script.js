let tl = gsap.timeline();
let touchStartY = 0;
let touchEndY = 0;
let index = 0

// Cette fonction détermine la direction du défilement ou du swipe
function getScrollDirection(startY, endY) {
  return endY > startY ? 'up' : 'down';
}

// Cette fonction gère à la fois le défilement et le swipe
// Constantes pour les sélecteurs et les durées
const ANIMATION_DURATION = 1;
const DIV_TEST_SELECTORS = ['.divTest1', '.divTest2', '.divTest3', '.divTest4'];
const CONTAINER_SOUS_ACCUEIL = '.containerSousAccueil';


function updateIndexAndScrolling(newIndex, allowScrollingDirection,value) {
 
  index = newIndex;
    

  fullpage_api.setAllowScrolling(value, allowScrollingDirection);
}

let isAnimating = false; // Drapeau pour suivre l'état de l'animation

function animateElement(selector, y, opacity, onCompleteAction) {
  isAnimating = true; // Définir isAnimating à true au début de l'animation
  gsap.to(selector, {
    duration: ANIMATION_DURATION,
    y,
    opacity,
    ease: 'power2.out',
    onComplete: () => {
      isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
      if (onCompleteAction) onCompleteAction();
    }
  });
}
function handleScrollEvent(startY, endY) {
  const scrollDirection = getScrollDirection(startY, endY);
  
  if (isAnimating) return;


    if (scrollDirection === 'down') {
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

       

       
      }
    } else if (scrollDirection === 'up') {
      console.log(index)
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

  
}

let indexCircle = 0


function updateIndexAndScrollingCircle(newIndex, allowScrollingDirection,value) {
 
  indexCircle = newIndex;
    

  fullpage_api.setAllowScrolling(value, allowScrollingDirection);
}


function handleScrollEventCircle(startY, endY){
  const scrollDirection = getScrollDirection(startY, endY);

  if (isAnimating) return;
  if (scrollDirection === 'down') {

    fullpage_api.setAllowScrolling(false, 'up');

    if(indexCircle == 0){
      isAnimating = true;
      gsap.to("#cover", {duration: 1, attr:{r:'110%'}, onComplete: () => {
        isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
        updateIndexAndScrollingCircle(1, 'up',false);
        gsap.set('.pathBurger', { stroke: `#727272` });
      
         //gsap.to('.imageElement', { y: 0, duration: 0.7 });
         //gsap.to('.titleElement', { x: 0, duration: 0.7 });
      }});

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

  


 
   
  } else if (scrollDirection === 'up'){


    if(indexCircle == 1){
      isAnimating = true
      gsap.to("#cover", {duration: 1, attr:{r:'7%'}, onComplete: () => {
        isAnimating = false; // Réinitialiser isAnimating à false une fois l'animation terminée
        updateIndexAndScrollingCircle(0, 'up',true);
        gsap.set('.pathBurger', { stroke: `#fff` });
     
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

function handleWheelCircle (event) {
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
document.addEventListener('touchstart', handleTouchStart, { passive: false });
document.addEventListener('touchmove', handleTouchMove, { passive: false });
document.addEventListener('touchend', handleTouchEnd, { passive: false });

// Ajout de l'écouteur d'événement pour le défilement de la souris
document.addEventListener('wheel', handleWheel, { passive: false });
let animationTextPath1, animationTextPath2;
// Configuration de fullpage.js avec les événements de scroll et de swipe
new fullpage('#fullPage', {
  autoScrolling: true,
  scrollingSpeed: 1500,
  onLeave: function(origin, destination, direction) {
     // Vérifiez si vous passez de la section 1 à la section 2
     if (origin.index === 0 && destination.index === 1) {
   
      // Réactiver fullPage.js autoScrolling
     
  
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
      x: '50%',
      opacity:1,
      ease: 'power2.out'
    });

    gsap.to('.textSection2', {                       //DESKTOP
      duration: 1,
      x: '50%',
      opacity:1,
      delay:0.2,
      ease: 'power2.out'
    });

    
    gsap.to('#containerDiv', {                       //DESKTOP
      duration: 1,
      x: '0',
      opacity:1,
      ease: 'power2.out'
    });
   
  }
  // Vérifiez si vous revenez à la section 1 depuis la section 2
  else if (origin.index === 1 && destination.index === 0) {
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
      x: '-50%',
      ease: 'power2.out'
    });

    gsap.to('.textSection2', {                           //DESKTOP
      duration: 1,
      x: '-50%',
      opacity:0,
      delay:0.2,
      ease: 'power2.out'
    });

    gsap.to('#containerDiv', {                       //DESKTOP
      duration: 1,
      opacity:0,
      x: '50%',
      ease: 'power2.out'
    });
    fullpage_api.setAllowScrolling(true, 'down');
    document.removeEventListener('wheel', handleWheel, { passive: false });
    document.removeEventListener('touchstart', handleTouchStart, { passive: false });
    document.removeEventListener('touchmove', handleTouchMove, { passive: false });
    document.removeEventListener('touchend', handleTouchEnd, { passive: false });
  
  }else if (origin.index === 2 && destination.index === 1) {
   
     gsap.to('.divTest4', {
      duration: 1,
      opacity: 1,
      ease: 'power2.out'
    });

    gsap.to('.ligneVertical1', {
      duration: 1.3, // durée en secondes
      y: '-85%', // déplace la ligne vers le haut
      ease: 'power2.out',
   // effet d'accélération pour l'animation
});

gsap.to('.titreSection2', {                      //DESKTOP
  duration: 1,
  x: '50%',
  opacity:1,
  ease: 'power2.out'
});

gsap.to('.textSection2', {                       //DESKTOP
  duration: 1,
  x: '50%',
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


gsap.to('#containerDiv', {                       //DESKTOP
  duration: 1,
  x: '0',
  opacity:1,
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
 
   else if (origin.index === 1 && destination.index === 2) {
   

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


gsap.to('.titreSection2', {                          //DESKTOP
  duration: 1,  
  x: '-50%',
  opacity:0,
  ease: 'power2.out'
});

gsap.to('.textSection2', {                           //DESKTOP
  duration: 1,
  x: '-50%',
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

gsap.to('#containerDiv', {                       //DESKTOP
  duration: 1,
  opacity:0,
  x: '50%',
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
    fullpage_api.setAllowScrolling(false, 'down');
  }else if(origin.index === 2 && destination.index === 3){
    fullpage_api.setAllowScrolling(false, 'down');
    gsap.to('.titleDriven', {
      duration: 1.5,
      x: '-100%',
      ease: 'power2.out',
      opacity:0
    });
  
    gsap.to('.textDriven', {
      duration: 1.5, // durée en secondes
      x: '-100%', // déplace la ligne vers le haut
      ease: 'power2.out',
      delay: 0.1,
      opacity:0
    // effet d'accélération pour l'animation
    });
    
    gsap.to('.spanDriven', {
      duration: 1.5,
      x: '-100%',
      ease: 'power2.out',
      delay: 0.2,
      opacity:0
    });
    
    gsap.to('.ancreDriven', {
      duration: 1.5, // durée en secondes
      x: '-100%', // déplace la ligne vers le haut
      ease: 'power2.out',
      delay: 0.3,
      opacity:0
    // effet d'accélération pour l'animation
    });


   
    document.removeEventListener('wheel', handleWheelCircle, { passive: false });
    document.removeEventListener('touchstart', handleTouchStartCircle, { passive: false });
    document.removeEventListener('touchmove', handleTouchMoveCircle, { passive: false });
    document.removeEventListener('touchend', handleTouchEndCircle, { passive: false });

    /*gsap.to('.titleSpiral', {
      duration: 1, // durée en secondes
      y:0,// déplace la ligne vers le haut
      ease: 'power2.out',
      opacity:1,
      delay:0.5
    // effet d'accélération pour l'animation
    });

    
    gsap.to('.textSpiral', {
      duration: 1.5, // durée en secondes
      y:0,// déplace la ligne vers le haut
      ease: 'power2.out'
    // effet d'accélération pour l'animation
    });*/



  }else if(origin.index === 3 && destination.index === 2){
    gsap.to('.titleDriven', {
      duration: 1.5,
      x: 0,
      ease: 'power2.out',
      opacity:1
    });
    
    gsap.to('.textDriven', {
      duration: 1.5, // durée en secondes
      x: 0, // déplace la ligne vers le haut
      ease: 'power2.out',
      delay: 0.1,
      opacity:1
    // effet d'accélération pour l'animation
    });
    
    gsap.to('.spanDriven', {
      duration: 1.5,
      x: 0,
      ease: 'power2.out',
      delay: 0.2,
      opacity:1
    });
    
    gsap.to('.ancreDriven', {
      duration: 1.5, // durée en secondes
      x: 0, // déplace la ligne vers le haut
      ease: 'power2.out',
      delay: 0.3,
      opacity:1
    // effet d'accélération pour l'animation
    });




   /* gsap.to('.textSpiral', {
      duration: 1.5, // durée en secondes
      y:'100%',// déplace la ligne vers le haut
      ease: 'power2.out'
    // effet d'accélération pour l'animation
    });

    var svgHeight = document.getElementById('demo').getBoundingClientRect().height;

    // Calculer la position finale (par exemple, hauteur du SVG moins 30px)
    var finalYPosition = (svgHeight - 30) / 2;
    
    // Créer une animation avec GSAP
    gsap.to('.titleSpiral', {
        duration: 1,
        ease: 'power2.out',
        y: finalYPosition 
    });*/
   
    fullpage_api.setAllowScrolling(true, 'down');

    document.removeEventListener('wheel', handleWheelCircle, { passive: false });
    document.removeEventListener('touchstart', handleTouchStartCircle, { passive: false });
    document.removeEventListener('touchmove', handleTouchMoveCircle, { passive: false });
    document.removeEventListener('touchend', handleTouchEndCircle, { passive: false });
  } else if(origin.index === 3 && destination.index === 4){
    document.removeEventListener('wheel', handleWheelCircle, { passive: false });
  document.removeEventListener('touchstart', handleTouchStartCircle, { passive: false });
  document.removeEventListener('touchmove', handleTouchMoveCircle, { passive: false });
  document.removeEventListener('touchend', handleTouchEndCircle, { passive: false });
 // Animation pour le premier textPath
 if (!animationTextPath1) {
  animationTextPath1 = gsap.to("#textPath1", {
      attr: { startOffset: '-100%' },
      duration: 25,
      repeat: -1,
      ease: "none"
  });
} else {
  animationTextPath1.resume();
}

// Initialiser ou reprendre l'animation pour le second textPath
if (!animationTextPath2) {
  animationTextPath2 = gsap.to("#textPath2", {
      attr: { startOffset: '-100%' },
      duration: 25,
      repeat: -1,
      ease: "none",
      delay: 12.5
  });
} else {
  animationTextPath2.resume();
}

  }else if(origin.index === 4 && destination.index === 3){
   
    if (animationTextPath1) {
      animationTextPath1.pause();
  }
  if (animationTextPath2) {
      animationTextPath2.pause();
  }
  }
  },
  afterLoad: function(origin, destination, direction) {
    // ... Votre logique existante ici ...


if(destination.index == 3){
 
  fullpage_api.setAllowScrolling(true, 'up');
}

if(destination.index == 2){
  
  document.addEventListener('wheel', handleWheelCircle, { passive: false });
  document.addEventListener('touchstart', handleTouchStartCircle, { passive: false });
  document.addEventListener('touchmove', handleTouchMoveCircle, { passive: false });
  document.addEventListener('touchend', handleTouchEndCircle, { passive: false });


  if(origin.index == 3){
    fullpage_api.setAllowScrolling(false, 'up');
  }
}
    if(destination.index == 1){
     
     
      document.addEventListener('wheel', handleWheel, { passive: false });
      document.addEventListener('touchstart', handleTouchStart, { passive: false });
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleTouchEnd, { passive: false });
    } else {
      //fullpage_api.setAllowScrolling(true, 'down');
      document.removeEventListener('wheel', handleWheel, { passive: false });
      document.removeEventListener('touchstart', handleTouchStart, { passive: false });
      document.removeEventListener('touchmove', handleTouchMove, { passive: false });
      document.removeEventListener('touchend', handleTouchEnd, { passive: false });
    }
  }
});
