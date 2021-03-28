const chevronUp = function() {
  const up = document.querySelector('.up'),
   services  =  document.getElementById('services'), 
   topSlider = document.querySelector('.top-slider');
   
   up.addEventListener('click', ()=> {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      up.style.zIndex = -1;

   });
   window.addEventListener('scroll', function(){
     
  });

    }  
  
 
  
  
  




export default chevronUp;