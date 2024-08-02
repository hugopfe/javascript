var age = 66
var finalResponse = String

console.log(`Com ${age} anos de idade...`)

if (age >= 16 && age < 18 || age > 65) {
    finalResponse = 'Voto opcional'
} else if (age < 16) {
    finalResponse = 'Não vota'
} else {
    finalResponse = 'Voto obrigatório'
}

console.log(finalResponse)