const cliente = {
  nome: 'Leandro',
  idade: 29,
  cpf: '123123123123',
  email: 'leandro@gmail.com',
  fones: ['55999234234', '5512312312331']
}

cliente.dependentes = {
  nome: 'Sara',
  parentesco: 'filha',
  dataNascimento: '20/03/2011'
}

console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)