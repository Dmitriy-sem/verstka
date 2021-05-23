/*Scroll*/
const sections = document.querySelectorAll('section'),
      scrollSign = document.querySelectorAll('.scroll_down'),
      images = document.querySelectorAll('.image img'),
      titleProject = document.querySelectorAll('.image p span')

function scroll(what) {
    what.forEach((item, index) => item.addEventListener('click', () =>{
        sections[index+1].scrollIntoView({behavior: 'smooth',})
    }))
}

[scrollSign, images, titleProject].forEach(arr => scroll(arr))