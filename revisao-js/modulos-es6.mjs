// importando modulos es6

import {numeros} from './includes/dados.mjs'

import {somavET, quadradoVet} from './includes/func1.mjs'

//quando o arquivo exporta alog com 'export default' o import nao usa chaves

import dobraVet from'./includes/func2.mjs'

console.log(somaVet(numeros))
console.log(quadradoVet(numeros))
console.log(dobraVet(numeros))