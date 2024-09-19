const cards = document.getElementsByClassName('card')

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', toggleCard)
}

function toggleCard() {
    let expandIcon = this.children[0].children[0]
    
    if (this.classList.contains('hidden')) {
        expandIcon.style.rotate = '180deg'
        this.classList.remove('hidden')
    } else {
        expandIcon.style.rotate = '360deg'
        this.classList.add('hidden')
    }
}