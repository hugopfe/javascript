var harmonicField;

const notesArr = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const degree = [0, 2, 4, 5, 7, 9, 11]
const setHarmonicField = (tone) => {
        return degree.map((v, i) => {
        return [2, 4, 9, 11].includes(v)?notesArr[(v + notesArr.indexOf(tone))%12]+'m':notesArr[(v + notesArr.indexOf(tone))%12]
    })
}

console.log(harmonicField)

const inputsArr = Array.from(document.getElementsByTagName('input'))
const labelsArr = Array.from(document.getElementsByTagName('label'))
const td = Array.from(document.querySelectorAll('td'))


for (let ni in notesArr) {
    inputsArr[ni].id = notesArr[ni]
    labelsArr[ni].setAttribute('for', notesArr[ni])
    labelsArr[ni].innerText = notesArr[ni]
}

inputsArr.forEach(() => {addEventListener('click', selectedNote)})


function selectedNote() {
    inputsArr.forEach((lbl) => {
        if (lbl.checked) {
            harmonicField = setHarmonicField(lbl.id)
            updateTable()
        }
    })
}

function updateTable() {
    td.forEach((c, i) => {
        c.innerText = harmonicField[i]
    })
}