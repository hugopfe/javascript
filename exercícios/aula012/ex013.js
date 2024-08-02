var weekDayNumber = new Date().getDay()
var weekDayString = ''

switch (weekDayNumber) {
    case 0:
        weekDayString = 'Domingo'
        break
    case 1:
        weekDayString = 'Segunda-feira'
        break
    case 2:
        weekDayString = 'Terça-feira'
        break
    case 3:
        weekDayString = 'Quarta-feira'
        break
    case 4:
        weekDayString = 'Quinta-feira'
        break
    case 5:
        weekDayString = 'Sexta-feira'
        break
    case 6:
        weekDayString = 'Sábado'
        break
    default:
        weekDayString = '[ERRO] Dia inválido!'
        break
}

console.log(`Hoje é ${weekDayString}.`, weekDayNumber == 5?'\nSextou!!':'')