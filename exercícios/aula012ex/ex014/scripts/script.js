const body = window.document.body
const divTime = document.querySelector('#div-time')
const img = document.querySelector('#div-image > img')
const divGreeting = document.querySelector('#div-greeting')
var sysTime = 18//Number(new Date().getHours())

divTime.innerHTML = `Agora são ${sysTime} horas`

if (sysTime >= 12 && sysTime < 18) {
    img.src = 'images/afternoon.png'
    body.style.backgroundColor = 'var(--collor-afternoon)'
    divGreeting.innerHTML = 'Boa tarde! Leve Jesus para onde for no seu dia &#x1F604;'
} else if (sysTime >= 18 || sysTime < 6) {
    img.src = 'images/night.png'
    body.style.backgroundColor = 'var(--collor-night)'
    divGreeting.innerHTML = 'Boa noite! Deite-se em paz pois é Deus quem guarda sua casa &#x1F6E1;&#xFE0F;'
}
