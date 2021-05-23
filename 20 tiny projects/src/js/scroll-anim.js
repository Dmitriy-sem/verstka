const boxes = document.querySelectorAll('.sa_box')

window.addEventListener('scroll', showBoxes)

function showBoxes(){
    const triggerBottom = 5 * window.innerHeight / 6

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

showBoxes()