function Cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function (valor) {
    this.saldo += valor
  }
}

const leandro = new Cliente('Leandro', '12312312399', 'leandro@gmail.com', 100)

console.log(leandro)