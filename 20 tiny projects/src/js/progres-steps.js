const prev = document.querySelector('#ps_prev'),
      next = document.querySelector('#ps_next'),
      circles = document.querySelectorAll('.ps_circle'),
      progress = document.querySelector('.ps_progres')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++
    if (currentActive > circles.length){
        currentActive = 1
    }

    update()
})

prev.addEventListener('click', () => {
    currentActive--
    if (currentActive < 1){
        currentActive = 1
    }

    update()
})


function update() {
    if (currentActive == 1){
        prev.disabled = true
    } else if (currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }

    circles.forEach((item, index) => {
        if (index < currentActive) {
            item.classList.add('ps_active')
        } else {
            item.classList.remove('ps_active')
        }
    })

    const actives = document.querySelectorAll('.ps_active')
    progress.style.width = `${(actives.length - 1) / (circles.length - 1)*100}%`
}