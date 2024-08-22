const liSteps = document.getElementsByTagName('li')

function nextStep() {
    for (let c in liSteps) {
        if (liSteps[c].id != 'atual-step') {
            liSteps[c].id = 'actual-step'
            break
        }
    }
}