const liSteps = document.getElementsByTagName('li')
const prevButton = document.getElementById('prev-btn')
const nextButton = document.getElementById('next-btn')

function nextStep() {
    let liActivatedSteps = document.getElementsByClassName('actual-step')

    for (let c in liSteps) {
        if (liSteps[c].classList[0] != 'actual-step') {
            liSteps[c].classList.add('actual-step')
            
            if (liActivatedSteps.length > 1 && prevButton.classList.contains('inactive')) {
                prevButton.classList.remove('inactive')
            } else if (liActivatedSteps.length == 4) {
                nextButton.classList.add('inactive')
            }
            break
        }
    }
}

function prevStep() {
    let liActivatedSteps = document.getElementsByClassName('actual-step')

    liActivatedSteps[liActivatedSteps.length-1].classList.remove('actual-step')

    if (liActivatedSteps.length == 1) {
        prevButton.classList.add('inactive')
    }

    if (liActivatedSteps.length < 4) {
        nextButton.classList.remove('inactive')
    }
}