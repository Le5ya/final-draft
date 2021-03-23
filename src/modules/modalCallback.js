const callback =() =>{
  const
        callbackBtn = document.querySelectorAll('.callback-btn')[1],
        modalOverlay = document.querySelector('.modal-overlay'),
        modalCallback = document.querySelector('.modal-callback'),
        modalClose = document.querySelector('.modal-close');

 callbackBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    modalCallback.style.display = 'block';
  
 });
 
};

callback();