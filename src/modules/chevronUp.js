const chevronUp = function() {
  const up = document.querySelector('.up'),
   services  =  document.getElementById('services'), 
   topSlider = document.querySelector('.top-slider');

     up.addEventListener('click', ()=> {
     up.style.zIndex = -1;
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      

   });

   window.addEventListener('scroll', function(){
    let coords = services.getBoundingClientRect();
    if(coords.top < 0){
     up.style.zIndex = 300;
    }else{
      up.style.zIndex = -1;
    };
  });

   
 
  

    }  
  
 
  
  
  




export default chevronUp;