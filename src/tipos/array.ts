let hobbies: string[] = ['Cozinhar', 'Praticar Esportes']
console.log(hobbies[0])
console.log(typeof hobbies)

let endereco: [string, number] = ['Rua A', 99]
endereco = ['Rua B', 999]
console.log(endereco)

//Não aceita
// endereco = [999]
// endereco = ["rua c"]
// endereco = [99, 'rua b']
console.log(endereco[0])
console.log(endereco[1])