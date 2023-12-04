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