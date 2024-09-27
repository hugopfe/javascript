const divVerse = document.querySelector('div#verse')
const button = document.querySelector('button')
const arrVerse = [
    '1ti 4:12',
    'efesios 2:8',
    'filipenses 2:5-11', 
    'hebreus 4:12', 
    'apocalipse 19:11-16',
    'proverbios 4:18',
    'galatas 5:16',
    '2co 12:9',
    'romanos 8:28',
    'joão 6:68',
    'salmos 42:1',
    'salmos 16:11',
    'isaias 43:1-2',
    'isaias 49:15',
    'isaias 55:6'
]

shuffleArray(arrVerse)

button.addEventListener ('click', () => {
    divVerse.className = 'transition-on'
    requestBibleApi(getVerse())
})

window.addEventListener('load', () => {requestBibleApi(getVerse())})

function shuffleArray(arr) {
    let currentIndex = arr.length

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random()*currentIndex)
        currentIndex--
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]]
    }
}

function getVerse() {
    let nextVerse = arrVerse[0]
    arrVerse.push(arrVerse.shift())
    return nextVerse
}

async function requestBibleApi (ref='john 3:16') {
    fetch(`https://bible-api.com/${ref}?translation=almeida`).then(res => {
        return res.json()
    }).then(verse => setVerse(`<p>${verse.text}</p><p id="ref">${verse.reference}</p>`))
}

function setVerse (text) {
    divVerse.innerHTML = text
    divVerse.className = 'transition-off'
}