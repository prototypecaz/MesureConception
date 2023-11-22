const DIV_TEST_SELECTORS = ['.divTest1', '.divTest2', '.divTest3', '.divTest4'];
const CONTAINER_SOUS_ACCUEIL = '.containerSousAccueil';
const ANIMATION_DURATION = 1;
let index = 0;
let touchStartY = 0;
let touchEndY = 0;
let isAnimating = false;

// Fonctions utilitaires
function getScrollDirection(startY, endY) {
    return endY > startY ? 'up' : 'down';
}

function updateIndexAndScrolling(newIndex, allowScrollingDirection, value) {
    index = newIndex;
    fullpage_api.setAllowScrolling(value, allowScrollingDirection);
}

function animateElement({ selector, y, opacity, onComplete }) {
    gsap.to(selector, {
        duration: ANIMATION_DURATION,
        y, opacity,
        ease: 'power2.out',
        onComplete: () => {
            isAnimating = false;
            if (onComplete) onComplete();
        }
    });
}

// Gestion du défilement
function handleScrollEvent(startY, endY) {
    const direction = getScrollDirection(startY, endY);
    if (isAnimating) return;

    const animationSettings = getAnimationSettings(direction);
  
        isAnimating = true;
        animateElement(animationSettings);
    
}

function getAnimationSettings(direction) {
    const settings = {
        'up': [
            // Paramètres pour la direction "up" à l'index 0
            {
                selector: DIV_TEST_SELECTORS[0],
                y: '100%',
                opacity: 0,
                onComplete: () => updateIndexAndScrolling(0, 'up', true)
            },
            // Paramètres pour l'index 1
            {
                selector: DIV_TEST_SELECTORS[1],
                y: '-100%',
                opacity: 0,
                onComplete: () => updateIndexAndScrolling(1, 'up', false)
            },
            // Paramètres pour l'index 2
            {
                selector: DIV_TEST_SELECTORS[2],
                y: '-200%',
                opacity: 0,
                onComplete: () => updateIndexAndScrolling(2, 'up', false)
            },
            // Paramètres pour l'index 3
            {
                selector: DIV_TEST_SELECTORS[3],
                y: '-300%',
                opacity: 0,
                onComplete: () => updateIndexAndScrolling(3, 'down', false)
            }
        ],
        'down': [
            // Paramètres pour la direction "down" à l'index 0
            {
                selector: DIV_TEST_SELECTORS[0],
                y: '0%',
                opacity: 1,
                onComplete: () => updateIndexAndScrolling(1, 'up', false)
            },
            // Paramètres pour l'index 1
            {
                selector: DIV_TEST_SELECTORS[1],
                y: '0%',
                opacity: 1,
                onComplete: () => updateIndexAndScrolling(2, 'up', false)
            },
            // Paramètres pour l'index 2
            {
                selector: DIV_TEST_SELECTORS[2],
                y: '0%',
                opacity: 1,
                onComplete: () => updateIndexAndScrolling(3, 'down', false)
            },
            // Paramètres pour l'index 3
            {
                selector: DIV_TEST_SELECTORS[3],
                y: '0%',
                opacity: 1,
                onComplete: () => updateIndexAndScrolling(4, 'down', true)
            }
        ]
    };
    return settings[direction][index] || [];
}


function handleWheel(event) {
    const startY = event.deltaY > 0 ? 1 : -1;
    const endY = 0;
    handleScrollEvent(startY, endY);
    event.preventDefault();
}

function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY;
}

function handleTouchMove(event) {
    touchEndY = event.touches[0].clientY;
}

function handleTouchEnd() {
    handleScrollEvent(touchStartY, touchEndY);
    event.preventDefault();
}


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
  
  
      gsap.to('.containerSousAccueil', {
        duration: 2,
        y: '0',
        opacity: 1,
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
  
      
      gsap.to('.containerSousAccueil', {
        duration: 1,
        y: '100%',
        opacity: 0,
        ease: 'power2.out'
      });
  
  
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
        duration: 1.5, // durée en secondes
        y: '40%', // déplace la ligne vers le haut
        ease: 'power2.out',
     // effet d'accélération pour l'animation
  });
  
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
  
       fullpage_api.setAllowScrolling(false, 'up');
       fullpage_api.setAllowScrolling(true, 'down');
     }
   
     else if (origin.index === 1 && destination.index === 2) {
     
      console.log('ok')
      gsap.to('.divTest4', {
        duration: 1,
        opacity: 0,
        ease: 'power2.out'
      });
  
      gsap.to('.ligneVertical1', {
        duration: 1.5, // durée en secondes
        y: '-40%', // déplace la ligne vers le haut
        ease: 'power2.out',
     // effet d'accélération pour l'animation
  });
  
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
  
      document.removeEventListener('wheel', handleWheel, { passive: false });
      document.removeEventListener('touchstart', handleTouchStart, { passive: false });
      document.removeEventListener('touchmove', handleTouchMove, { passive: false });
      document.removeEventListener('touchend', handleTouchEnd, { passive: false });
      fullpage_api.setAllowScrolling(true, 'up,down');
    }else if(origin.index === 2 && destination.index === 3){
      fullpage_api.setAllowScrolling(false, 'down');
      gsap.to('.titleDriven', {
        duration: 1.5,
        x: '-100%',
        ease: 'power2.out',
        opacity:0
      });
      console.log('yes')
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
  
  
     
  
      gsap.to('path', {
        duration: 2.5, // durée en secondes
        strokeDashoffset: 0,// déplace la ligne vers le haut
        ease: 'power2.out'
      // effet d'accélération pour l'animation
      });
  
  
      gsap.to('.titleSpiral', {
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
      });
  
  
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
  
  
      gsap.to('path', {
        duration: 2.5, // durée en secondes
        strokeDashoffset: 1000,// déplace la ligne vers le haut
        ease: 'power2.out'
      // effet d'accélération pour l'animation
      });
  
  
      gsap.to('.textSpiral', {
        duration: 1.5, // durée en secondes
        y:'100%',// déplace la ligne vers le haut
        ease: 'power2.out'
      // effet d'accélération pour l'animation
      });
  
      gsap.to('.titleSpiral', {
        duration: 1, // durée en secondes
        y:'100%',// déplace la ligne vers le haut
        ease: 'power2.out',
        opacity:0
  
      // effet d'accélération pour l'animation
      });
      fullpage_api.setAllowScrolling(true, 'down');
    }
    },
    afterLoad: function(origin, destination, direction) {
      // ... Votre logique existante ici ...
  console.log(destination.index)
  
  if(destination.index == 3){
    document.addEventListener('wheel', handleWheelCircle, { passive: false });
    document.addEventListener('touchstart', handleTouchStartCircle, { passive: false });
    document.addEventListener('touchmove', handleTouchMoveCircle, { passive: false });
    document.addEventListener('touchend', handleTouchEndCircle, { passive: false });
  }
      if(destination.index == 1){
       
        fullpage_api.setAllowScrolling(false, 'down');
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
  