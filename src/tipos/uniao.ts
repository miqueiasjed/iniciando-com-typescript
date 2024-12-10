let nota: number | String = 10
nota = 'A+'

console.log(nota)

type NotaouConceito = number | 'A' | 'B' | 'C' | 'D' 

let n1: NotaouConceito = 7

n1 = 'A'

console.log(n1)

function imprimirNota(nota: NotaouConceito){
  if(typeof nota === 'number'){
    console.log(`Nota ${nota}`)
  }else{
    console.log(`Conceito ${nota}`)
  }
}

console.log(imprimirNota(n1))