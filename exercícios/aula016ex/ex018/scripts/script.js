function addNumber() {    
    if (divResultOutput.childNodes.length > 0) {
        divResultOutput.removeChild(divResultOutput.childNodes[0])
    }
    
   let n = Number(inputNumber.value)
   
   if (inputNumber.value.length == 0 || n <= 0 || n > 100) {
        alert('Número informado inválido \nTente novamente')
   } else {
        appendNumberToArray(n)
   }
    
}

function analyseNumbers() {
    if (numbers.length == 0) {   
        alert('Adicione números e tente novamente!')
    } else {
        let ulResultOutput = document.createElement('ul')
        
        // Total numbers
        ulResultOutput.innerHTML = `<li>Foram informado(s) ${numbers.length} número(s)</li>`
        // Highest number
        ulResultOutput.innerHTML += `<li>O maior número da lista é ${getHighestNumber(numbers)}</li>`
        // Lowest number
        ulResultOutput.innerHTML += `<li>O menor número da lista é ${getLowestNumber(numbers)}</li>`
        // Sum
        ulResultOutput.innerHTML += `<li>O total da soma é ${numbers.reduce((total, value) => total += value)}</li>`
        // Average
        ulResultOutput.innerHTML += `<li>A média do(s) número(s) é ${numbers.reduce((total, value) => total + value) / numbers.length}`
        
        divResultOutput.appendChild(ulResultOutput)
    }
}

function appendNumberToArray(n) {
    let optionFeedback = document.createElement('option')
    numbers.push(n) 
    optionFeedback.innerText = `O número ${n} foi adicionado.`
    selectNumbersList.appendChild(optionFeedback)
}

function getHighestNumber(nArray) {
    let highestNumber = 0
    
    for (var i = 0; i <= nArray.length; i++) {
        if (nArray[i] > highestNumber) {
            highestNumber = nArray[i]
        }
    }

    return highestNumber
}

function getLowestNumber(nArray) {
    let lowestNumber = nArray[0]
    
    for (var i = 0; i <= nArray.length; i++) {
        if (nArray[i] < lowestNumber) {
            lowestNumber = nArray[i]
        }
    }

    return lowestNumber
}

function sum(nArray) {
    let totalSum = 0
    
    for (i in nArray) {
        totalSum += nArray[i]
    }

    return totalSum
}

// Getting DOM elements
const inputNumber = document.querySelector('#id-number')
const selectNumbersList = document.querySelector('#id-numbers-list')
const divFeedbackOutput = document.querySelector('#feedback-output')
const divResultOutput = document.querySelector('#result-output')

// Getting user data
var numbers = []
