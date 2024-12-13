class Produto{
constructor(readonly id: number, readonly nome: string, readonly preco: number, readonly desc: number = 0){
  if(id <= 0 ) throw new Error('id inválido')
  if(nome.length < 0 ) throw new Error('Nome pequeno')
  if(nome.length > 250 ) throw new Error('Nome grande')
  if(preco <= 0 ) throw new Error('preço inválido')
  if(desc < 0 || desc > 0.8) throw new Error('Desconto inválido')
}
  get precoFinal(){
    return this.preco * (1 - this.desc)
  }
}

const p1 = new Produto(1,'Caneta',12.5,0.1)
console.log(p1.precoFinal)
console.log(p1)

export {}