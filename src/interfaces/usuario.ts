interface Usuario {
  id: number
  nome: string
  email: string
}

const usuarioLogado: Usuario = {
  id: 1,
  nome: "Usuário 1",
  email: "usuario1@email.com"
}

console.log(usuarioLogado.id)
console.log(usuarioLogado.nome)
console.log(usuarioLogado.email)

export {}