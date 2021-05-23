const nOpenBtn = document.querySelector('.n_btn-open'),
      nCloseBtn = document.querySelector('.n_btn-close'),
      netflixNavs = document.querySelectorAll('.n_nav')

nOpenBtn.addEventListener('click', () => {
    netflixNavs.forEach(item => {
        item.classList.add('n_visible')
    })
})

nCloseBtn.addEventListener('click', () => {
    netflixNavs.forEach(item => {
        item.classList.remove('n_visible')
    })
})

