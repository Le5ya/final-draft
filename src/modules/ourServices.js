 const ourServices = () => {

 const servicesElements = document.querySelector('.services-elements'),
       element = servicesElements.querySelectorAll('.element'),
       imgWrapper = servicesElements.querySelectorAll('.img-wrapper'),
       modalOverlay = document.querySelector('.modal-overlay'),
       modalCallback = document.querySelector('.modal-callback'),
       modalClose = document.querySelector('.modal-close'),
       arrowRight = document.querySelector('.arrow-right'),
       arrowLeft = document.querySelector('.arrow-left');

   class sliderCarousel {
      constructor({main, wrap, next, prev, position = 0, slidesToShow = 3}){
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
        position,
        widthSlide: Math.floor(100 / this.slidesToShow)  
        };
      }
      init(){
       this.addGloClass();
       this.addStyle();

       if(this.prev && this.next) {
          this.controlSlider();
       } else {
          this.addArrow();
          this.controlSlider();
       }
       
      }
        addGloClass(){
          this.main.classList.add('glo-slider');
          this.wrap.classList.add('glo-slider__wrap');
          for(const item of this.slides) {
             item.classList.add('glo-slider__item');
          }
       }
       addStyle(){
         const style = document.createElement('style');
         style.id = 'slideCarousel-style';
         style.textContent = `
         .glo-slider {
            overflow: hidden;
         }
         .glo-slider__wrap {
            display: flex !important;
            transition: transform 0.5s !important;
            will-change: transform !important;
         }

         .glo-slider__item{
            flex: 0 0 ${this.options.widthSlide}% !important;
          margin: auto 0 !important;  
         }
         `;

         document.head.appendChild(style);
       }
       controlSlider(){
         this.prev.addEventListener('click', this.prevSlider.bind(this));
         this.next.addEventListener('click', this.nextSlider.bind(this));
       }
       prevSlider(){
          if(this.options.position > 0){
         --this.options.position;
         this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
          }
       }
       nextSlider(){
         if(this.options.position < this.slides.length - this.slidesToShow){
         ++this.options.position;
         this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
         }
       }
      addArrow(){

      }
   }
       
		const carousel = new sliderCarousel({
          main: '.services-elements',
          wrap: '.services-carousel',
          prev: '.arrow-right',
          next: '.arrow-left',
          slidesToShow: 3
       });

      carousel.init();
 
   const close = () => {
   modalOverlay.style.display = 'none';
   modalCallback.style.display = 'none';
 }

   const open = () => {
   modalOverlay.style.display = 'block';
   modalCallback.style.display = 'block';  
   }
servicesElements.addEventListener('mouseover', (event) =>{
  let target = event.target;
      target.style.zIndex = 100;
      target.addEventListener('click', open);
});
 imgWrapper.forEach((elem) =>{
 elem.addEventListener('click', open);
 });


 modalClose.addEventListener('click', close);
 modalOverlay.addEventListener('click', close);
      
};
export default ourServices;



