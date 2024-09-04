const inpEmail  = document.querySelector('#inp-email')
const lblEmail = document.querySelector('#lbl-email')
const inpPass = document.querySelector('#inp-password')
const lblPass = document.querySelector('#lbl-password')

inpEmail.addEventListener('focus', () => {
    lblEmail.className = 'focus'
})

inpEmail.addEventListener('blur', () => {
    lblEmail.className = ''
})

inpPass.addEventListener('focus', () => {
    lblPass.className = 'focus'
})

inpPass.addEventListener('blur', () => {
    lblPass.className = ''
})