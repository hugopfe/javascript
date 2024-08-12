function addNumber() {    
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
        // Total numbers
        divResultOutput.innerHTML = `<p>Foram informados ${numbers.length} números no total</p>`

        // Highest number
        divResultOutput.innerHTML += `<p>O maior número da lista é ${getHighestNumber(numbers)}</p>`
        // Lowest number
        divResultOutput.innerHTML += `<p>O menor número da lista é ${getLowestNumber(numbers)}</p>`
        // Sum
        divResultOutput.innerHTML += `<p>Somando os números da lista o total é ${sum(numbers)}</p>`

        // Average
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
        totalSum += nArray
    }

    return nArray
}

// Getting DOM elements
const inputNumber = document.querySelector('#id-number')
const selectNumbersList = document.querySelector('#id-numbers-list')
const divResultOutput = document.querySelector('#result-output')

// Getting user data
var numbers = []
