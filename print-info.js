const cliente = {
  nome: 'Leandro',
  idade: 29,
  cpf: '123123123123',
  email: 'leandro@gmail.com'
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`)
console.log(`Os 5 primeiros digitos do seu cpf é: ${cliente.cpf.substring(0, 5)}`)