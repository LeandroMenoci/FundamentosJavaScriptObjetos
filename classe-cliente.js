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

const leandro = new Cliente('Leandro Romano', 'leandro@gmail.com', '12312312399', 100)

console.log(leandro)