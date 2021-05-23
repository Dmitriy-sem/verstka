const resultField = document.querySelector('.result_field span'),
      checkboxes = document.querySelectorAll('.container input[type=checkbox]'),
      btnGener = document.querySelector('.gener_pas'),
      copyBtn = document.querySelector('.result_field i')


const numbersList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
      lettersList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 't', 's', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
                    'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                    'Q', 'R', 'T', 'S', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      symbolsList = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-',
                    '+', '=', '"', '№', ';', ':', '?', '*', '.', ',', "'"]

let resLstPas = []
var password = ''

btnGener.addEventListener('click', (e) => {
    //Animation
    const x = e.clientX,
          y = e.clientY,
          buttonTop = e.target.offsetTop,
          buttonLeft = e.target.offsetLeft
    console.log(e.target.offsetTop, e.target.offsetLeft);

    const xInside = (x - buttonTop)/10,
          yInside = (y - buttonLeft)/10

    const circleGen = document.createElement('span')
    circleGen.classList.add('gen_pas_circle')
    circleGen.style.top = yInside + 'px'
    circleGen.style.left = xInside + 'px'
    btnGener.append(circleGen)

    setTimeout(() => circleGen.remove(), 500)
        
    //Logic
    password = ''
    if (checkboxes[0].checked){
        resLstPas = resLstPas.concat(numbersList)
    }

    if (checkboxes[1].checked){
        resLstPas = resLstPas.concat(lettersList)
    }

    if (checkboxes[2].checked){
        resLstPas = resLstPas.concat(symbolsList)
    }

    const len = document.querySelector('#pas_range').value
    
    for (let i = 0; i < len; i++) {
        password += resLstPas[Math.floor(Math.random()*resLstPas.length)]
    }
    
    resultField.innerHTML = password
    resLstPas = []
})

copyBtn.addEventListener('click', () => {
    if (!password){
        return
    }
    const textarea = document.createElement('textarea')
    textarea.value = password
    document.body.append(textarea)
    textarea.select()
    document.execCommand('copy')
})

const range = document.querySelector('#pas_range'),
      span = document.querySelector('.slider_value span')

range.addEventListener('input', () => {
    span.innerHTML = range.value
    span.style.left = range.value * 5 + '%'
})


