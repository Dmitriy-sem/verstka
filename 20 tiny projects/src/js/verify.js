const codes = document.querySelectorAll('.password_verify_item')

codes.forEach((item, index) => {
    item.addEventListener('keydown', (e) => {
        if (e.key >= 0 && e.key <= 9) {
            setTimeout(() => codes[index+1].focus())
        } else if (e.key === 'ArrowLeft') {
            try{
                codes[index-1].focus()
            }
            catch {}
            
        } else if (e.key === 'ArrowRight') {
            try{
                codes[index+1].focus()
            }
            catch {}
            
        }
    })
})