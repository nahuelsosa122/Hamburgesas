var swiper = new Swiper(".mySwiper-1",{
    sliderPerView:1,
    spaceBetween:30,
    loopt:true,
    pagination:{
        el:".swiper-pagination",
        clickable:true,
    },
    navegation:{
        nextEl:"swiper-button-next",
        prevEl:"swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper-2",{
    sliderPerView:3,
    spaceBetween:20,
    loop:true,
    loopFillGroupWithBlank:true,
    navegation:{
        nextEl:"swiper-button-next",
        prevEl:"swiper-button-prev",
    },
    breakpoints:{
        0:{
            sliderPerView:1,
        },
        520:{
            sliderPerView:2,
        },
        950:{
            sliderPerView:3,
        }
    }
});

let tabInput =document.querySelectorAll(".tabInput");

tabInput.forEach(function(input){
    input.addEventListener('change',function(){
        let id = input.ariaValueMax;
        let thisSwiper= document.getElementById('swiper' + id);
        thisSwiper.swiper.update();
    })
})