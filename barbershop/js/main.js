const slides = document.querySelectorAll(".slider__item")


let slideIndex = 1

function plusSlide() {
    showSlides(slideIndex += 1)
}

function minusSlide() {
    showSlides(slideIndex -= 1)
}

function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    slides.forEach((item) => {
        item.style.display = "none"
    })

    slides[slideIndex-1].style.display = "block"
}
showSlides(slideIndex)