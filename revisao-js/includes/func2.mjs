export default function dobraVet(vet) {
    //cria um novo vetor cujos elementos equivalem ao dorbo
    // dos elemtos do vetor original
    let res = []
    for(let n of vet)res.push(n * 2)
    return res
}