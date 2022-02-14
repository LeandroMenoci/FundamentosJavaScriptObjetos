function Cliente(nome, cpf, email, saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo
  this.depositar = function (valor) {
    this.saldo += valor
  }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo)
  this.saldoPoup = saldoPoup;
}

const leandro = new ClientePoupanca('Leandro', '12312312399', 'leandro@gmail.com', 100, 200);

console.log(leandro)

ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor
}

leandro.depositarPoup(30)
console.log(leandro.saldoPoup)

// const catalogo = {
//   "editora": "Casa do Código",
//   "catalogo": [
//     {
//       "id": 50,
//       "titulo": "Primeiros Passos com NodeJS",
//       "autor": "João Rubens",
//       "categoria": "programação",
//       "versoes": ["ebook", "impresso"]
//     }
//   ]
// }

// console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))