const leftBlock = document.querySelector('.sl_split.sl_left'),
      rightBlock = document.querySelector('.sl_split.sl_right'),
      container = document.querySelector('.sl_container')

leftBlock.addEventListener('mouseenter', () => {
    container.classList.remove('sl_hover-right')
    container.classList.add('sl_hover-left')
})

leftBlock.addEventListener('mouseleave', () => {
    container.classList.remove('sl_hover-left')
})

rightBlock.addEventListener('mouseenter', () => {
    container.classList.remove('sl_hover-left')
    container.classList.add('sl_hover-right')
})

rightBlock.addEventListener('mouseleave', () => {
    container.classList.remove('sl_hover-right')
})