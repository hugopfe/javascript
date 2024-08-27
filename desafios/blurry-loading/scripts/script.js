const img = document.querySelector('#img')
const porcent = document.querySelector('#porcent')

var loadPorc = 0

var inter = setInterval(loadPage, 30)

function loadPage() {
    if (loadPorc < 100) {
        loadPorc++
        porcent.innerText = loadPorc + '%'
        porcent.style.opacity = 1-loadPorc/100
        img.style.filter = `blur(${10-loadPorc/10}px)`
    } else {
        clearInterval(inter)
    }
}