
    
    var swiper = new Swiper(".mySwiper", {
      effect: "cube",
      grabCursor: true,
      loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 10,
        shadowScale: 0.5,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
    const photos=["./images/gallery/1.jpeg",
                "./images/gallery/2.jpeg",
                "./images/gallery/3.jpeg",
                "./images/gallery/4.jpeg",
                "./images/gallery/5.jpeg",
                "./images/gallery/6.jpeg",
                "./images/gallery/7.jpeg",
                "./images/gallery/8.jpeg",
                "./images/gallery/9.jpeg",
                "./images/gallery/10.jpeg",
                "./images/gallery/11.jpeg",
                "./images/gallery/12.jpeg",
                "./images/gallery/13.jpeg",
                "./images/gallery/14.jpeg",
                "./images/gallery/15.jpeg",
                "./images/gallery/16.jpeg",
                "./images/gallery/17.jpeg",
                "./images/gallery/18.jpeg",
                "./images/gallery/19.jpeg",
                  ]
    const gallery=document.querySelector('.swiper-wrapper');

    window.addEventListener("DOMContentLoaded",function(){
        displayGallery(photos)
      })

      function  displayGallery(photo){

        let displayGallery=photo.map(function(item){
            //  console.log(item)
            return `<div class="swiper-slide">
            <img src=${item}>
          </div>`
    
        });
        displayGallery=displayGallery.join("")
        gallery.innerHTML=displayGallery
    
    }
