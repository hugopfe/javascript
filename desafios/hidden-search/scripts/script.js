const spnSearchButton = document.querySelector('.material-symbols-outlined')
const spnInputText = document.querySelector('#inpt-text')
const divSearch = document.querySelector('#search')

spnSearchButton.addEventListener('click', () => {
    divSearch.classList.toggle('active')
    spnInputText.focus()
})