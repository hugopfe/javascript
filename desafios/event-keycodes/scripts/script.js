var verse;

const divWaitingInput = document.getElementById('waiting-input')
const divInputDetails = document.getElementsByClassName('input-details')
const divKey = document.getElementById('event-key')
const divKeyCode = document.getElementById('event-keycode')
const divCode = document.getElementById('event-code')
const divVerse = document.getElementById('verse')

window.addEventListener('keydown', (ev) => {
    console.log(ev.key)
    switch (ev.key) {
        case 'a':
            verse = 'A quem tenho eu no céu além de ti?'
            break;
        case 'b':
            verse = 'Bem diga, ó minha alma ao Senhor'
            break
        case 'c':
            verse = 'Certamente a bondade e a misericórdia do Senhor me seguirão'
            break
        case 'd':
            verse = 'Digno é o Cordeiro que foi morto e reviveu'
            break
        case 'e':
            verse = 'Ele enxugará do rosto toda a lágrima'
            break
        case 'f':
            verse = 'Ficai em Jerusálem, até que do alto sejais revestidos de poder'
            break
        case 'g':
            verse = 'Grande é o Senhor e mui digno de louvor'
            break
        case 't':
            verse = 'Tudo que tem fôlego, louve ao Senhor'
            break
        case 'j':
            verse = 'Jesus Cristo é o mesmo ontem, e hoje, e eternamente'
            break
        default:
            verse = 'Façais tudo para a glória de Deus'
            break;
    }
    
    divKey.innerHTML = ev.key
    divKeyCode.innerHTML = ev.keyCode
    divCode.innerHTML = ev.code
    divVerse.innerHTML = verse
    
    divWaitingInput.style.display = 'none'
    for (let i = 0; i <= divInputDetails.length-1; i++) {
        divInputDetails.item(i).style.display = 'flex'
    }
})