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
        circles[actualProgress+1].classList.remove('active')
    }

    progressBar.style.width = actualProgress / (circles.length - 1) * 100 + '%'

    if (actualProgress === 0) {
        prevButton.disabled = true
    } else {
        prevButton.disabled = false
    }

    if (actualProgress === circles.length-1) {
        nextButton.disabled = true
    } else {
        nextButton.disabled = false
    }
}