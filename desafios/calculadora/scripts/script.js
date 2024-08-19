const tdDisplay = document.querySelector('#calc-display')


function pressButton(btn) {
    let displayText = tdDisplay.innerText

    if (btn == 'C') {
        // Clear input
        clearDisplay()
    } else if (btn == 'backspace') {
        // Erase a digit
        updateDisplayText(displayText.length == 1?'0':displayText.slice(0, -1), true)
    } else if (btn == '=') {
        // Calculate
        calculate(displayText)
    } else if (btn == '(') {
        if ('0'.search(displayText.slice(-1) == 1) && displayText.length == 1) { // Checking if display is empty
        } else if ('0123456789'.search(displayText.slice(-1)) == -1) { // Check if has a number before
            updateDisplayText(btn)
        } else {
            updateDisplayText('*' + btn)
        }
    } else if (btn == 'sqrt') {
        updateDisplayText(btn + '(')
    } else {
        updateDisplayText(btn)
    }
}

function calculate(mathAccount) {
    if (mathAccount.search('sqrt') != '-1') { // Check if is a square root operation
        let tempMathAccount = 'Math.' + mathAccount
        if (tempMathAccount.slice(-1) != ')') { // Check if parentesis are closed
            tempMathAccount += ')'
        }
        updateDisplayText(eval(tempMathAccount), true)
    } else {
        updateDisplayText(eval(mathAccount), true)
    }
}

function updateDisplayText(inputValue, substitute=false) {
    // Insert or update input in display
    if (tdDisplay.innerText == '0' || substitute) {
        tdDisplay.innerText = inputValue
    } else {
        tdDisplay.innerText += inputValue
    }
}

function clearDisplay() {
    tdDisplay.innerText = '0'
}