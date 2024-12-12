class Curso {
  constructor(readonly id: number, public nome?: string){
    if(id < 1 ) throw new Error('Id Inválido')  
  }
}

const c1 = new Curso(123)
c1.nome = 'Java'
console.log(c1)

const c2 = new Curso(456, 'JavaScript')
console.log(c2)

export{}