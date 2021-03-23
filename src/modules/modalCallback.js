const callback =() =>{
  const
        callbackBtn = document.querySelectorAll('.callback-btn')[1],
        modalOverlay = document.querySelector('.modal-overlay'),
        modalCallback = document.querySelector('.modal-callback'),
        modalClose = document.querySelector('.modal-close');

 const close = () => {
   modalOverlay.style.display = 'none';
   modalCallback.style.display = 'none';
 }

 callbackBtn.addEventListener('click', () => {
    modalOverlay.style.display = 'block';
    modalCallback.style.display = 'block';
  
 });

 modalClose.addEventListener('click', close);
 modalOverlay.addEventListener('click', close);
 
};

callback();