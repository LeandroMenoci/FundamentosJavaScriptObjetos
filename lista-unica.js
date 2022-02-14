const clientes = [
  {
    nome: 'Leandro',
    idade: 29,
    cpf: '123123123123',
    email: 'leandro@gmail.com',
    fones: ['55999234234', '5512312312331'],
    dependentes: [
      {
        nome: 'Sara Silva',
        parentesco: 'filha',
        dataNascimento: '20/03/2011'
      },
      {
        nome: 'Samia Maria',
        parentesco: 'filha',
        dataNascimento: '04/01/2014'
      }
    ],
  },
  {
    nome: 'Juliana',
    cpf: '12391239123',
    dependentes: [{
      nome: 'Sophia',
      parentesco: 'filha',
      dataNascimento: '30/08/2020'
    }]
  }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];

console.table(listaDependentes)