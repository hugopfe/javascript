function startCounting() {
    //Getting HTML elements
    const divResult = document.querySelector('#result')
    
    // Getting form data
    let formStart = document.getElementById('id-start')
    let formEnd = document.getElementById('id-end')
    let formStep = document.getElementById('id-step')

    let counterStart = Number(formStart.value)
    let counterEnd = Number(formEnd.value)
    let counterStep = Number(formStep.value)
    
    // Validating data
    
    if (counterStart == counterEnd || formStart.value.length == 0 || formEnd.value.length == 0) {
        divResult.innerHTML = 'Impossível contar!'
    } else {
        if (counterStep <= 0) {
            alert('Passo não pode ser menor ou igual a 0, considerando passo 1.')
            counterStep = 1
        }
        
        // Generating result
        divResult.innerHTML = ''


        if (counterStart < counterEnd){
            for (let c = counterStart; c <= counterEnd; c += counterStep) {
                divResult.innerHTML += `${c} \u{1F449}`
            }
        } else {
            for (let c = counterStart; c >= counterEnd; c-= counterStep)
                divResult.innerHTML += `${c} \u{1F449}`
        }
        divResult.innerHTML += '&#x1F3C1;'
    }

}