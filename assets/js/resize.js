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