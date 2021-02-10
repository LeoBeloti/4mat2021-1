//Parâmetros opcionais devem sempre ser os ultimos

function calcularArea(base, altura, forma){
    switch(forma){
        case 'Q': //quadrilatero
        return base * altura
        break

        case 'T': //triangulo
            return base*altura / 2
        case 'E' //elipse
             return (base / 2) * (altura / 2) * Math.PI
    }
}
console.log(calcularArea(2, 3, 'Q'))
console.log(calcularArea(2, 3, 'Q')

