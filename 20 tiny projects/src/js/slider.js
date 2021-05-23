const wrap = document.querySelector('.slider'),
      slidesField = document.querySelector('.slider_items'),
      slides = document.querySelectorAll('.slider_item'),
      rightArrows = document.querySelectorAll('.arrow2'),
      leftArrows = document.querySelectorAll('.arrow1'),
      lines = document.querySelectorAll('.slider-lines_item'),
	  width = parseInt(window.getComputedStyle(wrap).width, 10)




let slideIndex = 1,
 	offset = 0

let sliderInterval = setInterval(run, 2000)

function changeSlideIndex () {
    if (slideIndex > slides.length){
        slideIndex = 1
    } else if (slideIndex < 1) {
        slideIndex = slides.length
    }
}

function run() {
    slideIndex++
    changeImage()
}

function changeImage() {
    changeSlideIndex()
    slidesField.style.transform = `translateX(${-(slideIndex-1)*width}px)`
    changeLine()
}

function changeLine() {
    changeSlideIndex ()

     lines.forEach((item) => {
        item.classList.remove('active_line')
    })
    lines[slideIndex-1].classList.add('active_line')
}

changeLine()

function resetInterval() {
    clearInterval(sliderInterval)
    sliderInterval = setInterval(run, 2000)
}

function multiCall(arg) {
    arg ? slideIndex++ : slideIndex--
    changeSlideIndex ()
    resetInterval()
    changeImage()
}

rightArrows.forEach(item => item.addEventListener('click', () => {
    multiCall(true)
}))

leftArrows.forEach(item => item.addEventListener('click', () => {
    multiCall(false)
}))