function esParONo(numero){
    if(numero===0){
        console.log('Debes ingresar un numero distincto');
    }
    return numero % 2 === 0 ? "El numero es par": "El numero es impar";
}
 console.log(esParONo(3));