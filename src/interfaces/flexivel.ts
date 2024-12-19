interface Flexivel {
  nome: string
  [atributo: string]: string | number
}

const p1: Flexivel = {
  nome: 'Teste',
  idade: 13,
  salario: 1234
}

console.log(p1.nome)
console.log(p1.idade)
console.log(p1.salario)