var hour = new Date().getHours()
var response = ''

console.log(`Horário atual: ${hour}hr`)

if (hour < 12) {
    response = 'Iom Tov!'
} else if (hour < 18) {
    response = 'Tarde Tov!'
} else {
    response = 'Lailah Tov!'
}

console.log(response)