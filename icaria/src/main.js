const carouselField = document.querySelector('.carousel_items'),
      carousels = document.querySelectorAll('.carousel_item'),
      rightArrow = document.querySelector('.right_arrow'),
      leftArrow = document.querySelector('.left_arrow'),
      ballsContainer = document.querySelector('.purple_balls_container'),
      balls = document.querySelectorAll('.ball')

let counter = window.screen.width > 768 ? 1 : 0

function resetBallStyle() {
    balls.forEach(item => {
       item.className = 'ball'        
    })
}

function setBallStyle() {
    resetBallStyle()
    switch (counter){
        case 1:
            balls[0].classList.add('xs')
            balls[balls.length-1].classList.add('s')
            balls[1].classList.add('xs')
            balls[balls.length-2].classList.add('s')
            balls[2].classList.add('m')
            balls[balls.length-3].classList.add('m')
            balls[3].classList.add('l')
            break
        case 2:
            balls[0].classList.add('xs')
            balls[1].classList.add('xs')
            balls[2].classList.add('s')
            balls[3].classList.add('s')
            balls[balls.length-3].classList.add('m')
            balls[balls.length-2].classList.add('m')
            balls[balls.length-1].classList.add('l')
            break
        case 0:
            balls[0].classList.add('l')
            balls[1].classList.add('m')
            balls[2].classList.add('m')
            balls[3].classList.add('s')
            balls[balls.length-3].classList.add('s')
            balls[balls.length-2].classList.add('xs')
            balls[balls.length-1].classList.add('xs')
            break
    }
}

function changeImages() {
    if (counter > 2){
        counter = 0
    } else if (counter < 0){
        counter = 2
    }
    setBallStyle()

    let factor = 1
    const windowWidth = window.screen.width
    if (windowWidth > 769) {
        if (windowWidth < 1250 && windowWidth > 1200) {
            factor = 1.1
        } else if (windowWidth > 1155 && windowWidth <= 1200) {
            factor = 1.19
        } else if (windowWidth > 1100 && windowWidth <= 1155) {
            factor = 1.265
        } else if (windowWidth > 1050 && windowWidth <= 1100) {
            factor = 1.33
        } else if (windowWidth >= 990 && windowWidth <= 1040) {
            factor = 1.42
        } else if (windowWidth > 900 && windowWidth < 990) {
            factor = 1.52
        } else if (windowWidth > 769 && windowWidth <= 990) {
            factor = 1.71
        }
    }
     

    carouselField.style.transform = `translateX(-${counter*350*factor}px)`
}

rightArrow.addEventListener('click', () => {
    counter++
    changeImages()
})

leftArrow.addEventListener('click', () => {
    counter--
    changeImages()
})

/*Validation*/

const namme = document.querySelector('#name'),
      email = document.querySelector('#email'),
      dot = document.querySelector('#dot'),
      msg = document.querySelector('#msg')


function resetStyleInput(item) {
    item.className = ''
}

namme.addEventListener('blur', () => {
    resetStyleInput(namme)
    nammeValue = namme.value
    if (nammeValue.search(/\d/) !== -1 || nammeValue.length < 2){
        namme.value = ''
        namme.placeholder = 'The name should contain at least 2 letters and shouldn\'t contain numbers!'
        namme.classList.add('wrong')
    } else {
        namme.classList.add('filed')
    }
})

email.addEventListener('blur', () => {
    resetStyleInput(email)
    const re = /\S+@\S+\.\S+/
    if (re.test(email.value.toLowerCase())){
        email.classList.add('filed')
    } else {
        email.value = ''
        email.placeholder = 'Please enter the correct email!'
        email.classList.add('wrong')
    }
})

dot.addEventListener('blur', () => {
    resetStyleInput(dot)
    const values = dot.value.split('.').map(item => +item)
    if (!(values[0] < 32 && values[0] > 0 && values[1] < 13 && values[1] > 0 && values[2] < 2021 && values[2] > 1900)){
        dot.value = ''
        dot.placeholder = 'Please enter the Date of Birth in format dd.mm.yyyy!'
        dot.classList.add('wrong')
    } else {
        dot.classList.add('filed')
    }
})

msg.addEventListener('blur', () => {
    msg.className = 'msg'
    if (msg.value.length < 11){
        msg.value = ''
        msg.placeholder = 'The message length should be at least 10 symbols!'
        msg.classList.add('wrong')
    } else {
        msg.classList.add('filed')
    }
})

/*Directory Balls*/
const directory = document.querySelector('.directory_carousel_wrapper'),
      dBalls = document.querySelectorAll('.d_ball')

function resetStyleDBalls() {
    dBalls.forEach(item => item.classList.remove('d_active'))
}

directory.addEventListener('scroll', () => {
    const scrollLeft = directory.scrollLeft,
          windowWidth = window.screen.width
    if (scrollLeft > windowWidth/1.5 && scrollLeft < windowWidth*1.5) {
        resetStyleDBalls()
        dBalls[1].classList.add('d_active')
    } else if (scrollLeft > windowWidth*1.5) {
        resetStyleDBalls()
        dBalls[2].classList.add('d_active')
    } else {
        resetStyleDBalls()
        dBalls[0].classList.add('d_active')
    }
})

const carousel = document.querySelector('.carousel')

carousel.addEventListener('scroll', () => {
    const scrollLeft = carousel.scrollLeft,
          windowWidth = window.screen.width
    if (scrollLeft > windowWidth/1.7 && scrollLeft < windowWidth*1.1) {
        counter = 1
    } else if (scrollLeft > windowWidth*1.1) {
        counter = 2
    } else {
        counter = 0
    }
    setBallStyle()
})
setBallStyle()