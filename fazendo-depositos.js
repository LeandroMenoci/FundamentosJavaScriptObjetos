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

console.log(cliente.saldo);
cliente.depositar(30)
console.log(cliente.saldo)