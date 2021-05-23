const panels = document.querySelectorAll('.ic_panel')


panels.forEach(item => {
    item.addEventListener('click', () => {
        panels.forEach(i => i.classList.remove('ic_active'))
        item.classList.add('ic_active')
    })
        
})

