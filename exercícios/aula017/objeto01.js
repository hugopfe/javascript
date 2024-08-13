let amigo = {nome: 'James', sexo: 'M', peso: 84.5, engordar(p) {
    console.log('Engordou!')
    this.peso += p
}}

amigo.engordar(8)

console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)