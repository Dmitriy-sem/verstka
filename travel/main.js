const slides = document.querySelectorAll('.slide'),
      switcher = document.querySelector('.switcher'),
      glass = document.querySelectorAll('.glass'),
      other_sides = document.querySelectorAll('.another_side'),
      partOfTitles = document.querySelectorAll('.part_of_title')
      titles = document.querySelectorAll('.title'),
      menuBtn = document.querySelector('.hamburger_container'),
      line1 = document.querySelector('.hamburger1'),
      line2 = document.querySelector('.hamburger2'),
      menu = document.querySelector('.menu'),
      menuItems = document.querySelectorAll('.menu_item'),
      contact = document.querySelector('.contact'),
      modalWrapper = document.querySelector('.modal_wrapper'),
      modal = document.querySelector('.modal'),
      closeModal = document.querySelector('.modal .fa-times')

let slideIndex = 1

switcher.addEventListener('click', () => {
    if (slideIndex === slides.length){
        slideIndex = 0
    }
    slides.forEach(item => {
        item.style.transform = `translateY(-${slideIndex*100}%)`
    })
    slideIndex++
    moveItems()
})

function moveItems() {
    const userWidth = document.documentElement.clientWidth
    if (slideIndex === 1) {
        zeroing()
    }
    if (slideIndex % 2 === 0){
        glass[slideIndex-1].style.transform = `translateX(${userWidth < 1441 ? 100 : 150}%)`
        other_sides[slideIndex-1].style.transform = `translateX(${userWidth < 1441 ? -100 : -67}%)`
        partOfTitles[slideIndex-1].style.margin = '-140px 0 0'
        titles[slideIndex-1].style.marginTop = '200px'
    } else{
        glass[slideIndex-1].style.transform = 'translateX(0%)'
    }
}

function zeroing() {
    for (let i = 1; i < glass.length + 1; i++){
        if (i % 2 === 0){
            glass[i-1].style.transform = 'translateX(0%)'
        } else {
            glass[i-1].style.transform = 'translateX(150%)'
        }
    }  
}

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active_menu')
    line1.classList.toggle('hamburger1_active')
    line2.classList.toggle('hamburger2_active')
})

function closeMenu() {
    menu.classList.remove('active_menu')
    line1.classList.remove('hamburger1_active')
    line2.classList.remove('hamburger2_active')
}

menuItems.forEach((item, index) => item.addEventListener('click', () => {
    const how = 6 - slideIndex + index 
    for (let i = 0; i < how; i++) {
        switcher.click()
    }
    closeMenu()
}))

contact.addEventListener('click', () => {
    modalWrapper.classList.add('modal_wrapper-active')
    modal.classList.add('modal-active')
    closeMenu()
    window.addEventListener('click', (e) => {
        if (e.target.className == 'modal_wrapper modal_wrapper-active') {
            closeModalWindow()
        }
    })
})

function closeModalWindow() {
    modalWrapper.classList.remove('modal_wrapper-active')
    modal.classList.remove('modal-active')
}

closeModal.addEventListener('click', () => {
    closeModalWindow()
})

