'use strict';
/*Dropdown menu*/
const drop = document.querySelector('.dropdown'),
      content = document.querySelector('.dropdown-content'),
      angle = document.querySelector('.fa-angle-down')


document.addEventListener('click', (e) =>{
    if (content.classList.contains('active') && e.target.tagName != 'P') {
        content.classList.remove('active')
        angle.classList.remove('anim')
    }
})

drop.addEventListener('click', () => {
    content.classList.toggle('active')
    angle.classList.toggle('anim')
})

/*Anchors*/
const menuItems = document.querySelectorAll('.anchor'),
      scrollTo = document.querySelectorAll('section'),
      footerItems = document.querySelectorAll('.anchor2')

menuItems.forEach((item, i) => {
    item.addEventListener('click', () =>{
        scrollTo[i].scrollIntoView({behavior: 'smooth',});
    })
})

footerItems.forEach((item, i) => {
    item.addEventListener('click', () =>{
        scrollTo[i].scrollIntoView({behavior: 'smooth',});
    })
})


/*Scroll*/

const secondSection = document.querySelector('.second'),
      scroll = document.querySelector('.scroll_down')


scroll.addEventListener('click', () =>{
    secondSection.scrollIntoView({behavior: 'smooth',});
})


/*Slider*/

const switcher = document.querySelector('.slider_btn img'),
      wrap = document.querySelector('.slider'),
      slidesField = document.querySelector('.slider_items'),
      slides = document.querySelectorAll('.slider_item'),
      width = parseInt(window.getComputedStyle(wrap).width, 10)

let slideIndex = 1

switcher.addEventListener('click', () =>{
    slideIndex++
    if (slideIndex > slides.length){
        slideIndex = 1
    } else if (slideIndex < 1) {
        slideIndex = slides.length
    }
    slidesField.style.transform = `translateX(${-(slideIndex-1)*width}px)`
})

/*Accordion*/

const titles = document.querySelectorAll('.accordion_title'),
    dotsAccord = document.querySelectorAll('.accordion_title .dot_item'),
    contentAccord = document.querySelectorAll('.accordion_content')

function adding(item, i){
    if (item == contentAccord){
        item[i].classList.add('accordion_content_active')
    } else if (item == dotsAccord){
        item[i].classList.add('active_dot')
    }
    
}

function removing(item, i){
    if (item == contentAccord){
        item[i].classList.remove('accordion_content_active')
    } else if (item == dotsAccord){
        item[i].classList.remove('active_dot')
    }
}

const line = document.querySelector('.vertical_line')

function animation(n){

    if (n == 1 && contentAccord[1].classList.contains('accordion_content_active')){
        line.style.top = '34px'
    } else if (n == 1 && contentAccord[2].classList.contains('accordion_content_active')){
        line.style.height = '114px'
        line.style.top = '34px'
    } else if (n == 2 && contentAccord[0].classList.contains('accordion_content_active')){
        line.style.top = '95px'
    } else if (n == 2 && contentAccord[2].classList.contains('accordion_content_active')){
        line.style.height = '114px'
        line.style.top = '95px'
    } else if (n == 3 && contentAccord[1].classList.contains('accordion_content_active')){
        line.style.height = '48px'
        line.style.top = '95px'
    } else if (n == 3 && contentAccord[0].classList.contains('accordion_content_active')){
        line.style.height = '48px'
        line.style.top = '95px'
    } 
}

function ownEventListener(element, i){
    element.addEventListener('click', () => {
        switch (i){
            case 0:
                animation(1, 0)

                adding(dotsAccord, 0)
                removing(dotsAccord, 1)
                removing(dotsAccord, 2)

                adding(contentAccord, 0)
                removing(contentAccord, 1)
                removing(contentAccord, 2)
                break
            case 1:
                animation(2)

                adding(dotsAccord, 1)
                removing(dotsAccord, 0)
                removing(dotsAccord, 2)

                adding(contentAccord, 1)
                removing(contentAccord, 0)
                removing(contentAccord, 2)
                break
            case 2:
                animation(3)

                adding(dotsAccord, 2)
                removing(dotsAccord, 0)
                removing(dotsAccord, 1)

                adding(contentAccord, 2)
                removing(contentAccord, 0)
                removing(contentAccord, 1)
                break
        }
    })
        
}

titles.forEach((item, i) =>{
    ownEventListener(item, i)
})

dotsAccord.forEach((item, i) =>{
    ownEventListener(item, i)
})







