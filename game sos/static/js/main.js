'use strict';

/*Dropdown menu*/
let drop = document.getElementById('dropdown')
let content = document.getElementById('dropdown-content')
let angle = document.getElementsByClassName('fa-angle-down')[0]


document.addEventListener('click', (e) =>{
    if (content.classList.contains('active') && e.target.tagName != 'P') {
        content.classList.remove('active')
        angle.classList.remove('anim')
    }
})

drop.addEventListener('click', function () {
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

const switcher = document.querySelector('.slider_btn img')

const dots = document.querySelectorAll('.dot_item')
let counter = 1




function animation(n, pos=0){
    const line = document.querySelector('.line')
    let id
    if (n == 1){
        id = setInterval(frame1, 1)
    } else if (n == 2){
        id = setInterval(frame2, 1)
    } else {
        id = setInterval(frame3, 1)
    }
    
    function frame1(){
        if (pos == 75){
            clearInterval(id)
        } else {
            pos++
            line.style.left = pos + 'px'
        }
    }

    function frame2(){
        if (pos == 140){
            clearInterval(id)
        } else {
            pos++
            line.style.left = pos + 'px'
        }
    }

    function frame3(){
        if (pos == 5){
            clearInterval(id)
        } else {
            pos--
            line.style.left = pos + 'px'
        }
    }
}


switcher.addEventListener('click', () =>{
    const firstSlide = document.querySelector('.first_item'),
          secondSlide = document.querySelector('.second_item'),
          thirdSlide = document.querySelector('.third_item')

    firstSlide.classList.remove('first_item')
    firstSlide.classList.add('third_item')

    secondSlide.classList.remove('second_item')
    secondSlide.classList.add('first_item')
    
    thirdSlide.classList.remove('third_item')
    thirdSlide.classList.add('second_item')

    if (counter == 0){
        dots[2].classList.remove('active_dot')
        dots[0].classList.add('active_dot')
        ++counter
        animation(3, 140)
        
    } else if (counter == 1){
        dots[0].classList.remove('active_dot')
        dots[1].classList.add('active_dot')
        counter++
        animation(1)
        
    } else{
        dots[1].classList.remove('active_dot')
        dots[2].classList.add('active_dot')
        counter = 0
        animation(2, 75)
    }
   
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

function animation2(n, pos=0){
    const line = document.querySelector('.vertical_line')

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
                animation2(1, 0)

                adding(dotsAccord, 0)
                removing(dotsAccord, 1)
                removing(dotsAccord, 2)

                adding(contentAccord, 0)
                removing(contentAccord, 1)
                removing(contentAccord, 2)
                break
            case 1:
                animation2(2)

                adding(dotsAccord, 1)
                removing(dotsAccord, 0)
                removing(dotsAccord, 2)

                adding(contentAccord, 1)
                removing(contentAccord, 0)
                removing(contentAccord, 2)
                break
            case 2:
                animation2(3)

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







