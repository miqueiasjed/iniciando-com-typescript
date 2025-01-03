//Classe abstrada
abstract class Celular{
  ligar(){
    console.log('Em ligação')
  }

  abstract acessarRedeMovel(): void
} 

//Classe Concreta
class Iphone23Pro extends Celular{
  acessarRedeMovel(): void {
    console.log('Usando rede 7.5G')
  }
}

class GalaxyS23 extends Celular{
  acessarRedeMovel(): void {
    console.log('Usando rede 15G')
  }
}

let c1 = new GalaxyS23()
c1.ligar()
c1.acessarRedeMovel()

c1 = new Iphone23Pro()
c1.ligar()
c1.acessarRedeMovel()

export {}
