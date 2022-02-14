const cliente = {
  nome: 'Leandro',
  idade: 29,
  cpf: '123123123123',
  email: 'leandro@gmail.com',
  fones: ['55999234234', '5512312312331'],
  dependentes: [{
    nome: 'Sara Silva',
    parentesco: 'filha',
    dataNascimento: '20/03/2011'
  }]
}

cliente.dependentes.push({
  nome: 'Samia Maria',
  parentesco: 'filha',
  dataNascimento: '04/01/2014'
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNascimento === '04/01/2014')

console.log(filhaMaisNova[0].nome)