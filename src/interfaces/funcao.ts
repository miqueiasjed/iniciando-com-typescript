interface OperacaoMatematicaObj {
  fn: (n1: number, n2: number) => number
}

const somaObj: OperacaoMatematicaObj = {
  fn(n1, n2) {
    return n1 + n2
  }
}

console.log(somaObj.fn(1,2))

interface OperacaoMatematica{
  (n1: number, n2: number): number
}

const soma: OperacaoMatematica = (a: number, b: number) => {
  return a + b
}

console.log(soma(3,4))