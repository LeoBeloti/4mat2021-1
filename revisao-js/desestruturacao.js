let numeros= [10,20,30] // vetor
let carro = {
    Marca:'volkswagen',
    Modelo: 'Fusca',
    Ano: 1969,
    Cor: 'Preto'
}// objetoos

//desestruturação de vetor
let [x,y,z]= numeros
console.log(x)
console.log(y)
console.log(z)

//desestruturacao parcial do vetor
//pegar apenas o segundo valor
let[,c, ,]= numeros
console.log(c)

//pegando apenas os dois primeiros valores

let[a,b]=numeros
console.log (a)
console.log(b)

//desestruturação de objetos
let{Ano,Modelo,Cor, Marca}= carro
console.log (Marca)
console.log (Modelo)
console.log (Cor)