const faqButtons = document.querySelectorAll('.faq-btn')

faqButtons.forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('faq-active')
    })
})