const questions = () => {
const  accordeon = document.querySelector('.accordeon'),
       element = accordeon.querySelectorAll('.element'),
       elementContent = accordeon.querySelectorAll('.element-content'),
       title = document.querySelectorAll('.title');

// console.log(title[0].closest('.element'));
//  console.log(elementContent[0]);

const activeElem =() => {
  elementContent.forEach((item) =>{
  if(item.closest('.element').classList.contains('active')){
    item.style.display = 'block';
  }else{
    item.style.display = 'none';
  };
});
};

title.forEach((item) =>{
  item.addEventListener('click', function(){
    element.forEach((item) =>{
     if((item.classList.contains('active'))){
       item.classList.remove('active');
     }; 
    })
    item.closest('.element').classList.add('active');
    activeElem();
  });
});
};

export default questions;

