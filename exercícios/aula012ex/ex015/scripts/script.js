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
    let imageName = ''

    if (birthYear == 0 || birthYear > sysYear) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        if (genre == 'Homem') {
            if (age < 12) {
                imageName = 'child-man.png'
            } else if (age < 30) {
                imageName = 'young-man.png'
            } else if (age < 50) {
                imageName = 'adult-man.png'
            } else {
                imageName = 'old-man.png'
            }
        } else if (genre == 'Mulher') {
            if (age < 12) {
                imageName = 'child-woman.png'
            } else if (age < 30) {
                imageName = 'young-woman.png'
            } else if (age < 50) {
                imageName = 'adult-woman.png'
            } else {
                imageName = 'old-woman.png'
            }
        }

    divResult.innerHTML = `<p>${genre == 'Homem'?'Um':'Uma'} ${genre} de ${age} anos.</p>`
    let imageNode = document.createElement('img')
    imageNode.src = 'images/' + imageName
    divResult.appendChild(imageNode)
    }
    
}