let num = [5, 8, 2, 9, 3]

num.push(1) // vai adicionar um novo elemento com o valor 1

num.sort() // é um método interno de todo elemento que é um vetor (vai colocar em ordem)

console.log(num)

console.log(`Nosso vetor tem ${num.length} elementos`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(9)
if ( pos == -1 ) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}

