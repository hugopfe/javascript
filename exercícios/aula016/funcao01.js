function buyProduct(value=5) {
    var response = ''
    
    if (value < 10) {
        response = 'uma caixa de leite.'
    } else if (value < 50) {
        response = 'um fone bluetooth.'
    } else if (value < 100) {
        response = 'um tênis.'
    } else if (value < 5000) {
        response = 'um smartphone.'
    } else if (value < 10000) {
        response = 'uma Biz.'
    }

    return `Com ${value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}, você consegue comprar ${response}`
}


console.log(buyProduct())