const openButton = document.querySelector('#open')
const closeButton = document.querySelector('#close')
const page = document.querySelector('#page')

openButton.addEventListener('click', () => {
    page.classList.add('open')
})

closeButton.addEventListener('click', () => {
    page.classList.remove('open')
})