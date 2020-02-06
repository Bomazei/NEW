const slider = document.querySelector('.slider'),
        slides = slider.querySelectorAll('.slide'),
        horSlider = document.querySelector('.hor-slider'),
        horSlides = horSlider.querySelectorAll('.slide'),
        input = document.querySelector('.input-range'),
        progress = document.querySelector('.range-progress'),
        slideWidth = 1024,
        slideHeight = 768,
        links = document.querySelectorAll('.nav-link'),
        scrollDown = document.querySelector('.scroll-down')


slides.forEach(slide => {
    slide.addEventListener('touchstart', function(e){
        let startY = e.changedTouches[0].clientY  
        
        slide.addEventListener('touchend', function(e){
            
            let endY = e.changedTouches[0].clientY
            let resY = startY - endY
            if(Math.abs(resY) > slideHeight * 0.1) {
                
                if(startY > endY){
                    window.scrollBy(0, slideHeight)
                } else if (startY < endY){
                    window.scrollBy(0, -slideHeight)
                }  
            }
            
        }, {once: true})
    },false)

    
})

input.addEventListener('touchstart', function(){
    input.addEventListener('touchmove', function(){
        horSlides.forEach(x => {
            if((input.value > 66)){
                x.style.transform = "translate(0,0)"
            }  else if(input.value < 33){
                x.style.transform = `translate(${slideWidth*2}px,0)`
            } else {
                x.style.transform = `translate(${slideWidth}px,0)`
            }
        })
        if(input.value>=50){
            input.style.background = `-webkit-linear-gradient(left, #d1eaff ${input.value}%, #87898a9d ${100-input.value}%)`;
        } else {
            input.style.background = `-webkit-linear-gradient(left, #d1eaff ${input.value}%, #87898a9d ${input.value}%)`;
        }
        
        
    })
    input.addEventListener('touchend', function(){
        if(input.value > 66){
            input.value = 100
        }  else if(input.value < 33){
            input.value = 0
        } else {
            input.value = 50
        }
        if(input.value>=50){
            input.style.background = `-webkit-linear-gradient(left, #d1eaff ${input.value}%, #87898a9d ${100-input.value}%)`;
        } else {
            input.style.background = `-webkit-linear-gradient(left, #d1eaff ${input.value}%, #87898a9d ${input.value}%)`;
        }
    }, {once: true})
    
})

window.addEventListener('scroll', function(){
    if(window.scrollY > 768) {
        scrollDown.style.opacity = 0
    } else {
        scrollDown.style.opacity = 1
        
    }

    let fromTop = window.scrollY;

    links.forEach(link => {
        let section = document.querySelector(link.hash);

        if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
        ) {
        link.classList.add("active");
        } else {
        link.classList.remove("active");
        }
    });
});