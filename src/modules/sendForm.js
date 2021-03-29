const sendForm = function(){
const errorMessage = 'Что-то пошло не так...',
         loadMessage = 'Загрузка...',
         successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
// const modalCallback = document.querySelector('.modal-callback');
 const form = document.forms[0],
        formName = form.querySelectorAll('.form-control')[0],
        formPhone = form.querySelectorAll('.form-control')[1];

  formName.addEventListener('input', () =>formName.value = formName.value.replace(/\w/g, ''));
  formPhone.addEventListener('input', () => formPhone.value = formPhone.value.replace(/\D[^()-]/g, ''));
  formName.value = formName.value.replace(/^[а-я]/g, (match) => match.toUpperCase());


  const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem';

  form.addEventListener('submit', (event) => {
       event.preventDefault();
       form.appendChild(statusMessage);

      const request = new XMLHttpRequest();
       request.addEventListener('readystatechange', () =>{
        statusMessage.textContent = loadMessage;
          if(request.readyState !== 4) {
                return;
            }
            if(request.status === 200) {
              statusMessage.textContent = successMessage;
            }else{
              statusMessage.textContent = errorMessage; 
              
        }
      });
       request.open('POST', './server.php');
       request.setRequestHeader('Content-Type', 'application/json');
       const formData = new FormData(form);
       let body = {};

   formData.forEach((val, key) =>{
      body[key] = val;
   });
    request.send(JSON.stringify(body));
       form.reset();

});

}

export default sendForm;