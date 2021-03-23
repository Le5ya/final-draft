const scroll =() => {
 const topMenu = document.querySelector('.top-menu'),
       topItems = topMenu.querySelectorAll('ul>li'),
       a = topMenu.querySelectorAll('li>a');  

  for(let i = 0; i < topItems.length; i++){
    topItems[i].addEventListener('click', (event) => {
      event.preventDefault();
      console.log(a[i].getAttribute('href'));

      let sectionID = a[i].getAttribute('href');
         console.log(sectionID);

      document.querySelector(sectionID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
          });

    })
  }

};
scroll();