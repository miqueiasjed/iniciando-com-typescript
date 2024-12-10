type TipoUsuario = { nome: string, email: string }

const usuarios: TipoUsuario[] = [
  {nome: 'Usuário 1', email: 'usuario1@email'},
  {nome: 'Usuário 2', email: 'usuario2@email'}
]

function buscaPorEmail(email: string): TipoUsuario | null {
  return usuarios.find(u => u.email === email) ?? null
}

console.log(buscaPorEmail('usuario3@email'))
