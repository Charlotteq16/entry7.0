

/*function startAnimations() {
   
    document.querySelector('.emoji1').style.opacity = 0;
    document.querySelector('.emoji2').style.opacity = 1;
  
 
    document.querySelector('.emoji1').classList.add('animate-emoji1');
    document.querySelector('.emoji2').classList.add('animate-emoji2');
  
   
    setTimeout(() => {
      document.querySelector('.emoji1').classList.remove('animate-emoji1');
      document.querySelector('.emoji2').classList.remove('animate-emoji2');
    }, 1000);
  }*/

  function startAnimations() {
    // Remove the initial styles
    document.querySelector('.emoji1').style.opacity = 0;
    document.querySelector('.emoji2').style.opacity = 1;

    // Add the class to trigger the animations
    document.querySelector('.emoji1').classList.add('animate-emoji1');
    document.querySelector('.emoji2').classList.add('animate-emoji2');

    // Remove the class after the animation is complete
    setTimeout(() => {
        document.querySelector('.emoji1').classList.remove('animate-emoji1');
        document.querySelector('.emoji2').classList.remove('animate-emoji2');
    }, 10000); // Adjust the timeout value to match the total animation duration (10s) multiplied by the iteration count (10)
}

  
  

