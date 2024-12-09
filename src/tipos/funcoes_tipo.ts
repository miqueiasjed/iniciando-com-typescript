type OperacaoFN = (a: number, n2: number) => number

let operacao: OperacaoFN

function somar (n1: number, n2: number): number{
  return n1 + n2
}

function multiplicar (n1: number, n2: number): number{
  return n1 * n2
}

operacao = somar
console.log(operacao(5,6))

operacao = multiplicar
console.log(operacao(5,6))