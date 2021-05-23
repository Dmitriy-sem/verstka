const textEl = document.querySelector('.auto_text_effect h1'),
      speedEl = document.querySelector('.speed_block input'),
      text = 'Cool animated text effect'

let index = 1,
    speed = 300 / speedEl.value

writeText()

function writeText() {
    textEl.innerText = text.slice(0, index)
    index++

    if (index > text.length) {
        index = 1
    } 

    setTimeout(writeText, speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)