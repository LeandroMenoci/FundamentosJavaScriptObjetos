const cliente = {
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
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor
  }
}

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(cliente);
  if (propsClientes.includes('dependentes')) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`)
  }
}

console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)