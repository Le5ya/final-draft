const slider = ()=> {

 const    slider = document.querySelector('.slider-top'),
          text = document.querySelectorAll('.text'),
          item = document.querySelectorAll('.item'),
          table = document.querySelectorAll('.table');

          console.log(text[0]);
  
      
         
let count = 0;
let idInterval = setInterval(function(){
setTimeout(function(){
  item[0].setAttribute('style', 'background: url(images/slide2.jpg) 50% 50% no-repeat; background-size: cover;');
setTimeout(function(){
  item[0].setAttribute('style', 'background: url(images/slide3.jpg) 50% 50% no-repeat; background-size: cover;');
setTimeout(function(){
  item[0].setAttribute('style', 'background: url(images/slide1.jpg) 50% 50% no-repeat; background-size: cover;');
       }, 5000);
    }, 5000);  
  }, 2000);
 }, 12000);
};
export default slider;