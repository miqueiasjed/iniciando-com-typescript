import { multiplicar, multiplicarPerigosa, saudacao } from "../../src/tipos/funcoes"

test('Deve retornar Boa tarde', () =>{
  const s = saudacao('João')
  expect(s).toBe('Olá João! Passar bem!')
})

test('Deve multiplicar dois numeros', () =>{
  const resultado = multiplicar(3,3)
  expect(resultado).toBe(9)
})

test('Deve retornar um NAN com parametro do tipo string', () =>{
  const resultado = multiplicarPerigosa("a",3)
  expect(resultado).toBeNaN()
})