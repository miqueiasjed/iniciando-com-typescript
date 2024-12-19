interface Usuario {
  id?: number
  nome: string
  email: string
  senha?: string
}

const usuarioLogado: Usuario = {
  id: 1,
  nome: "Usuário 1",
  email: "usuario1@email.com"
}

console.log(usuarioLogado.id)
console.log(usuarioLogado.nome)
console.log(usuarioLogado.email)

//Só uma parte é requerida
const usuarioOpcional: Partial<Usuario> = {
  id: 1,
  senha: "senha",
}

console.log(usuarioOpcional.id)
console.log(usuarioOpcional.nome)
console.log(usuarioOpcional.email)

//Todos os campos são requeridos
const usuarioCompleto: Required<Usuario> = {
  id: 1,
  nome: "Usuário Completo",
  email: "usuariocompleto@email.com",
  senha: 'masjas'
}

console.log(usuarioCompleto.id)
console.log(usuarioCompleto.nome)
console.log(usuarioCompleto.email)

export {}