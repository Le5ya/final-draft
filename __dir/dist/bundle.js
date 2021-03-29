(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function t(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}var n,o,r,i,l,s,c,a,d,u;s=document.querySelectorAll(".callback-btn")[1],c=document.querySelector(".modal-overlay"),a=document.querySelector(".modal-callback"),d=document.querySelector(".modal-close"),u=function(){c.style.display="none",a.style.display="none"},s.addEventListener("click",(function(){c.style.display="block",a.style.display="block"})),d.addEventListener("click",u),c.addEventListener("click",u),function(){for(var e=document.querySelector(".top-menu"),t=e.querySelectorAll("ul>li"),n=e.querySelectorAll("li>a"),o=function(e){t[e].addEventListener("click",(function(t){t.preventDefault();var o=n[e].getAttribute("href");document.querySelector(o).scrollIntoView({behavior:"smooth",block:"start"})}))},r=0;r<t.length;r++)o(r)}(),function(){document.querySelector(".slider-top"),document.querySelectorAll(".text");var e=document.querySelectorAll(".item");document.querySelectorAll(".table"),setInterval((function(){setTimeout((function(){e[0].setAttribute("style","background: url(images/slide2.jpg) 50% 50% no-repeat; background-size: cover;"),setTimeout((function(){e[0].setAttribute("style","background: url(images/slide3.jpg) 50% 50% no-repeat; background-size: cover;"),setTimeout((function(){e[0].setAttribute("style","background: url(images/slide1.jpg) 50% 50% no-repeat; background-size: cover;")}),5e3)}),5e3)}),2e3)}),12e3)}(),function(){var n=document.querySelector(".services-elements"),o=(n.querySelectorAll(".element"),n.querySelectorAll(".img-wrapper")),r=document.querySelector(".modal-overlay"),i=document.querySelector(".modal-callback"),l=document.querySelector(".modal-close");document.querySelector(".arrow-right"),document.querySelector(".arrow-left"),new(function(){function n(e){var t=e.main,o=e.wrap,r=e.next,i=e.prev,l=e.position,s=void 0===l?0:l,c=e.slidesToShow,a=void 0===c?3:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),this.main=document.querySelector(t),this.wrap=document.querySelector(o),this.slides=document.querySelector(o).children,this.next=document.querySelector(r),this.prev=document.querySelector(i),this.slidesToShow=a,this.options={position:s,widthSlide:Math.floor(100/this.slidesToShow)}}var o,r;return o=n,(r=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var t,n=function(t,n){var o;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(o=function(t,n){if(t){if("string"==typeof t)return e(t,n);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){o&&(t=o);var r=0,i=function(){};return{s:i,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,c=!1;return{s:function(){o=t[Symbol.iterator]()},n:function(){var e=o.next();return s=e.done,e},e:function(e){c=!0,l=e},f:function(){try{s||null==o.return||o.return()}finally{if(c)throw l}}}}(this.slides);try{for(n.s();!(t=n.n()).done;)t.value.classList.add("glo-slider__item")}catch(e){n.e(e)}finally{n.f()}}},{key:"addStyle",value:function(){var e=document.createElement("style");e.id="slideCarousel-style",e.textContent="\n         .glo-slider {\n            overflow: hidden;\n         }\n         .glo-slider__wrap {\n            display: flex !important;\n            transition: transform 0.5s !important;\n            will-change: transform !important;\n         }\n\n         .glo-slider__item{\n            flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n          margin: auto 0 !important;  \n         }\n         "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"nextSlider",value:function(){this.options.position>0&&(--this.options.position,this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"prevSlider",value:function(){this.options.position<this.slides.length-this.slidesToShow&&(++this.options.position,this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"))}},{key:"addArrow",value:function(){}}])&&t(o.prototype,r),n}())({main:".services-elements",wrap:".services-carousel",prev:".arrow-right",next:".arrow-left",slidesToShow:3}).init();var s=function(){r.style.display="none",i.style.display="none"},c=function(){r.style.display="block",i.style.display="block"};n.addEventListener("mouseover",(function(e){var t=e.target;t.style.zIndex=100,t.addEventListener("click",c)})),o.forEach((function(e){e.addEventListener("click",c)})),l.addEventListener("click",s),r.addEventListener("click",s)}(),function(){var e=document.querySelector(".button-services"),t=document.querySelector(".modal-overlay"),n=document.querySelector(".modal-callback"),o=document.querySelector(".modal-close"),r=function(){t.style.display="none",n.style.display="none"};e.addEventListener("click",(function(){t.style.display="block",n.style.display="block"})),o.addEventListener("click",r),t.addEventListener("click",r)}(),r=document.querySelector(".accordeon"),i=r.querySelectorAll(".element"),l=r.querySelectorAll(".element-content"),document.querySelectorAll(".title").forEach((function(e){e.addEventListener("click",(function(){i.forEach((function(e){e.classList.contains("active")&&e.classList.remove("active")})),e.closest(".element").classList.add("active"),l.forEach((function(e){e.closest(".element").classList.contains("active")?e.style.display="block":e.style.display="none"}))}))})),n=document.querySelector(".up"),o=document.getElementById("services"),document.querySelector(".top-slider"),n.addEventListener("click",(function(){n.style.zIndex=-1,window.scrollTo({top:0,left:0,behavior:"smooth"})})),window.addEventListener("scroll",(function(){o.getBoundingClientRect().top<0?n.style.zIndex=300:n.style.zIndex=-1})),function(){var e="Загрузка...",t=document.querySelector(".modal-callback"),n=document.forms[0],o=n.querySelectorAll(".form-control")[0],r=n.querySelectorAll(".form-control")[1];o.addEventListener("input",(function(){return o.value=o.value.replace(/\w/g,"")})),r.addEventListener("input",(function(){return r.value=r.value.replace(/\D[^()-]/g,"")})),o.value=o.value.replace(/^[а-я]/g,(function(e){return e.toUpperCase()}));var i=document.createElement("div");i.style.cssText="font-size: 2rem",n.addEventListener("submit",(function(o){o.preventDefault(),n.appendChild(i);var r=new XMLHttpRequest;r.addEventListener("readystatechange",(function(){i.textContent=e,4===r.readyState&&(200===r.status?i.textContent="Спасибо! Мы скоро с вами свяжемся!":i.textContent="Что-то пошло не так...")})),function(e){throw new TypeError('"loadMessage" is read-only')}(),e="",r.open("POST","./server.php"),r.setRequestHeader("Content-Type","application/json");var l=new FormData(n),s={};l.forEach((function(e,t){s[t]=e})),r.send(JSON.stringify(s)),n.reset(),t.style.display=none}))}()})();