function showResult() {
    // Get sys data
    let sysYear = Number(new Date().getFullYear())

    // Get user data
    let birthYear = Number(document.querySelector('#div-form #id-year').value)
    // let genre = document.querySelector('#genre-m').checked == true?'Homem':'Mulher'
    let genre = document.getElementsByName('genre')
    let divResult = document.querySelector('#div-result')
    
    // Calculate data
    let age = sysYear - birthYear

    // Generating result
    let imageName = ''

    if (birthYear == 0 || birthYear > sysYear) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        if (genre[0].checked) {
            divResult.innerHTML = `<p>Um ${genre[0].value} de ${age} anos.</p>`
            document.body.style.backgroundColor = 'rgb(0, 77, 192)'

            if (age < 12) {
                imageName = 'child-man.png'
            } else if (age < 21) {
                imageName = 'young-man.png'
            } else if (age < 50) {
                imageName = 'adult-man.png'
            } else {
                imageName = 'old-man.png'
            }
        } else if (genre[1].checked) {
            divResult.innerHTML = `<p>Uma ${genre[1].value} de ${age} anos.</p>`
            document.body.style.backgroundColor = 'rgb(255 106 197)'

            if (age < 12) {
                imageName = 'child-woman.png'
            } else if (age < 21) {
                imageName = 'young-woman.png'
            } else if (age < 50) {
                imageName = 'adult-woman.png'
            } else {
                imageName = 'old-woman.png'
            }
        }

    let imageNode = document.createElement('img')
    imageNode.setAttribute('src', 'images/' + imageName)
    divResult.appendChild(imageNode)
    }
    
}