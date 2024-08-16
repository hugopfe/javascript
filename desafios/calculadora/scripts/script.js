const tdDisplay = document.querySelector('#calc-display')


function pressButton(btn) {
    let displayText = tdDisplay.innerText

    if (btn == 'C') {
        // Clear input
        clearDisplay()
    } else if (btn == 'backspace') {
        // Erase a digit
        setDisplayText(displayText.length == 1?'0':displayText.slice(0, -1))
    } else if (btn == '=') {
        // Calculate
        calculate(displayText)
    } else if (btn == '(') {
        // Check if has a number or a operator before
        if ('0123456789'.search(displayText.slice(-1)) == -1) { // FIX IT!!
            setDisplayText(btn)
        } else {
            setDisplayText('*'+btn)
        }
    } else {
        setDisplayText(btn)
    }
}

function calculate(mathAccount) {
    setDisplayText(eval(mathAccount))
}

function setDisplayText(inputValue) {
    // Insert input in diplay
    if (tdDisplay.innerText == '0') {
        tdDisplay.innerText = inputValue
    } else {
        tdDisplay.innerText += inputValue
    }
}

function clearDisplay() {
    tdDisplay.innerText = '0'
}