function generateMultiTable() {
    // Getting HTML elements
    const formFactor = document.getElementById('id-number')
    const slctMultiTable = document.querySelector('#id-multi-table')

    // Processing data
    if (formFactor.value.length == 0) {
        alert('Impossível gerar tabuada. \nCheque os dados e tente novamente.')
    } else {
        // Generating result
        let factor = Number(formFactor.value)

        slctMultiTable.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let optCalc = document.createElement('option')
            let txtCalc = document.createTextNode(`${factor} x ${c} = ${factor * c}`)

            optCalc.appendChild(txtCalc)
            slctMultiTable.appendChild(optCalc)
        }
    }
}