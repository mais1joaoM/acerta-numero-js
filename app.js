alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto;
let numeroMaximoJogo = 10;
numeroSecreto = parseInt(Math.random() * (numeroMaximoJogo - 1) + 1 )
console.log(numeroSecreto)
let chute;
let tentativa = 1;

while (numeroSecreto != chute){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximoJogo}: `);

    // se o chute for igual ao numero secreto voce acerta
    if (chute == numeroSecreto){
        break;
    }else{
        if (numeroSecreto > chute){
            alert(`O numero secreto é maior que o chute ${chute}`);
        }else{
            alert(`O numero secreto é menor que o ${chute}`);
        }
        
    }
    tentativa++;
}

//exemplo de operador ternario
let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
alert(`Voce descobriu o numero secreto (${numeroSecreto}), com ${tentativa} ${palavraTentativa}`);

/**
if ( tentativa > 1){
    alert(`Voce descobriu o numero secreto (${numeroSecreto}), com ${tentativa} tentativas`);
}else{
    alert(`Voce descobriu o numero secreto (${numeroSecreto}), com ${tentativa} tentativa`);
}
 */


