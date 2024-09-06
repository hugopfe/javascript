const divVerse = document.querySelector('div#verse')
const button = document.querySelector('button')
const arrVerse = ['efesios 2:8', 'filipenses 2:5-11', 'hebreus 4:12', 'apocalipse 19:11-16', 'proverbios 4:18', 'galatas 5:16', '2co 12:9', 'romanos 8:28', 'joão 6:68', 'salmos 42:1', 'salmos 16:11']

button.addEventListener ('click', () => {
    requestBibleApi(getRandomVerse())
})

window.addEventListener('load', () => {requestBibleApi(getRandomVerse())})

function getRandomVerse() {
    return arrVerse[Math.floor(Math.random()*arrVerse.length)]
}

async function requestBibleApi (ref='john 3:16') {
    fetch(`https://bible-api.com/${ref}?translation=almeida`).then(res => {
        return res.json()
    }).then(verse => divVerse.innerHTML = `<p>${verse.text}<br><b>${verse.reference}</b></p>`)
}
