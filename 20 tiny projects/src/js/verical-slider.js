const sliderContainer = document.querySelector('.vertical-slider_container'),
      rightSlide = document.querySelector('.vs_right-slide'),
      leftSlide = document.querySelector('.vs_left-slide'),
      upButton = document.querySelector('.vs_up-btn'),
      downButton = document.querySelector('.vs_down-btn'),
      slidesLength = rightSlide.querySelectorAll('div').length

let activeSlideIndex = 1

leftSlide.style.top = `-${(slidesLength - 1)*100}vh`

upButton.addEventListener('click', () => vsChangeSlide('up'))
downButton.addEventListener('click', () => vsChangeSlide('down'))

function vsChangeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight

    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex > slidesLength)  {
            activeSlideIndex = 1
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 1)  {
            activeSlideIndex = slidesLength 
        }
    }

    rightSlide.style.transform = `translateY(-${(activeSlideIndex - 1) * sliderHeight}px)`
    leftSlide.style.transform = `translateY(${(activeSlideIndex - 1) * sliderHeight}px)`

}