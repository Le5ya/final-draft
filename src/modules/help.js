const help = () => {
 const buttonServices=document.querySelector('.button-services'),
 modalOverlay = document.querySelector('.modal-overlay'),
 modalCallback = document.querySelector('.modal-callback'),
 modalClose = document.querySelector('.modal-close');

   const open = () => {
   modalOverlay.style.display = 'block';
   modalCallback.style.display = 'block';  
   };

   const close = () => {
   modalOverlay.style.display = 'none';
   modalCallback.style.display = 'none';
 };
 buttonServices.addEventListener('click', open);
 modalClose.addEventListener('click', close);
 modalOverlay.addEventListener('click', close);
 

}

export default help;