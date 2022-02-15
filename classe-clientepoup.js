class Cliente {
  constructor(nome, email, cpf, saldo) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.saldo = saldo
  }
  depositar(valor) {
    this.saldo += valor
  }

  exibirSaldo() {
    console.log(this.saldo)
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, email, cpf, saldo, saldoPoupanca) {
    super(nome, email, cpf, saldo)
    this.saldoPoupanca = saldoPoupanca
  }

  depositarPoupanca(valor) {
    this.saldoPoupanca += valor
  }
}

const leandro = new ClientePoupanca('Leandro', 'leandro@gmail.com', '12312312399', 100, 200)

console.log(leandro)
leandro.depositar(50)
leandro.depositarPoupanca(100)
console.log(leandro)