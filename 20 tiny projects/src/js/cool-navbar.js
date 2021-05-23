const toggleLiTheme = document.querySelector('#themeButton'),
      svgsTheme = toggleLiTheme.querySelectorAll('svg'),
      section = document.querySelector('.cool_navbar'),
      sectionMain = document.querySelector('.cool_navbar main')

svgsTheme[1].style.display = 'none'
let flagTheme = true
toggleLiTheme.addEventListener('click' ,() => {
    if (flagTheme) {
        svgsTheme[0].style.display = 'none'
        svgsTheme[1].style.display = 'block'
        section.style.background = '#fff'
        sectionMain.style.color = '#23232e' 
        flagTheme = false
    } else {
        /*Dark*/
        svgsTheme[1].style.display = 'none'
        svgsTheme[0].style.display = 'block'
        section.style.background = '#373741'   
        sectionMain.style.color = '#c9c9c9'   
        flagTheme = true
    }
})