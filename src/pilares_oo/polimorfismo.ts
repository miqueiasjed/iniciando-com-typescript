abstract class Animal {
  abstract emitirSom(): string
}

class Gato extends Animal {
  emitirSom(): string {
    return 'miauuuu'
  }
}

class Cachorro extends Animal {
  emitirSom(): string {
    return 'auauauau'
  }
}

function exibir(animal: Animal) {
  console.log(animal.emitirSom())
}

let a: Animal = new Gato()
exibir(a)

let b = new Cachorro()
exibir(b)

export{}
