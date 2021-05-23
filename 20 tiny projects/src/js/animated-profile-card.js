const apcImg = document.querySelector('.apc_wrapper img'),
      apcIcons = document.querySelector('.apc_icons')

apcImg.addEventListener('click', () => {
    apcImg.classList.toggle('apc_active')
    apcIcons.classList.toggle('apc_active')
})
