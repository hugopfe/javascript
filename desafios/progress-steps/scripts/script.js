const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const progressBar = document.getElementById('progress-bar')
const circles = document.querySelectorAll('.circle')

var actualProgress = 0

prevButton.addEventListener('click', () => {
    if (actualProgress > 0) {
        actualProgress--
    }

    update()
})

nextButton.addEventListener('click', () => {
    if (actualProgress < circles.length-1) {
        actualProgress++
    }

    update()
})

function update() {
    let activatedCircles = document.getElementsByClassName('active')
    
    if (actualProgress > activatedCircles.length-1) {
        circles[actualProgress].classList.add('active')
    }

    if (actualProgress < activatedCircles.length-1) {
        circles[actualProgress].classList.remove('active')
    }
}