/**
 * at 01
 * Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
 */

let contador = 1;
while ( contador <= 10){
    console.log(`Contador atual ${contador}`);
    contador++;
};

/**
 * at 02
 * Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
 */

let contadorNegativo = 10;

while ( contadorNegativo >= 0 ){
    console.log(`Contador atual ${contadorNegativo}`)
    contadorNegativo--;
}

/**
 * at 03
 * Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, 
 * usando um loop while no console do navegador.
 */

let entradaUsuario = prompt('Digite um valor acima de 0(zero)')

while ( entradaUsuario >= 0 ){
    alert(`Contagem regressiva (${entradaUsuario})`);
    entradaUsuario--;
}


/**
 * at 04
 * Crie um programa de contagem progressiva. Peça um número e conte de 0 
 * até esse número, usando um loop while no console do navegador.
 */


let entradaUsuarioProgressiva = prompt('Digite um valor acima de 0')
let count = 0;

while (count <= entradaUsuarioProgressiva){
    console.log(`Entrada progressiva ${count}`);
    count++;
}

