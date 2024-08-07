function startCounting() {
    //Getting HTML elements
    const divResult = document.querySelector('#result')
    
    // Getting form data
    let formStart = Number(document.getElementById('id-start').value)
    let formEnd = Number(document.getElementById('id-end').value)
    let formStep = Number(document.getElementById('id-step').value)

    // Validating data
    if (formStep <= 0) {
        alert('Passo não pode ser menor ou igual a 0, considerando passo 1.')
        formStep = 1
    }

    if (formStart == formEnd) {
        divResult.innerHTML = 'Impossível contar!'
    } else {
        // Generating result
        divResult.innerHTML = ''


        if (formStart < formEnd){
            for (let c = formStart; c <= formEnd; c += formStep) {
                divResult.innerHTML += `${c} &#x1F449;`
            }
        } else {
            for (let c = formStart; c >= formEnd; c-= formStep)
                divResult.innerHTML += `${c} &#x1F449;`
        }
        divResult.innerHTML += '&#x1F3C1;'
    }

}