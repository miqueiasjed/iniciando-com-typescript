class DesafioEstatico {
  nota: number = 5.2
  static notaInstancia: number = 7.8

  static executar(){
    const instacia = new DesafioEstatico()
    console.log(instacia.nota)
    console.log(DesafioEstatico.notaInstancia)
  }
}

DesafioEstatico.executar()

const outraInstancia = new DesafioEstatico()
console.log(outraInstancia.nota)