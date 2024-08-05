function showResult() {
    // Get sys data
    let sysYear = Number(new Date().getFullYear())

    // Get user data
    let birthYear = Number(document.querySelector('#div-form #id-year').value)
    let genre = document.querySelector('#genre-m').checked == true?'Homem':'Mulher'
    let divResult = document.querySelector('#div-result')
    
    // Calculate data
    let age = sysYear - birthYear

    // Generating result
    divResult.innerHTML = `<p>${genre == 'Homem'?'Um':'Uma'} ${genre} de ${age} anos.</p>`
    let imageName = ''

    if (genre == 'Homem' && age < 12) {
        imageName = 'child-man.png'
    } else if (genre == 'Mulher' && age < 12) {
        imageName = 'child-woman.png'
    } else if (genre == 'Homem' && age < 50) {
        imageName = 'young-man.png'
    } else if (genre == 'Mulher' && age < 50) {
        imageName = 'young-woman.png'
    } else if (genre == 'Homem' && age >= 50) {
        imageName = 'old-man.png'
    } else if (genre == 'Mulher' && age >= 50) {
        imageName = 'old-woman.png'
    }
    
    let imageNode = document.createElement('img')
    imageNode.src = 'images/' + imageName
    divResult.appendChild(imageNode)
}