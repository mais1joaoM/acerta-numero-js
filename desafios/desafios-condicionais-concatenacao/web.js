/**
 * at 01
 * Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou 
 * "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
 */

let entradaUsuarioDiaDaSemanha = prompt('Digite qual é o dia da semana');
if (entradaUsuarioDiaDaSemanha === 'Sábado'){
    alert('Bom fim de semana!');
}else if (entradaUsuarioDiaDaSemanha === 'Domingo'){
    alert('Bom fim de semana!')
}else{
    alert('Boa semana!');
}

/**
 * at 02
 * Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
 */

let entradaNumeroUsuario = prompt('Digite um valor para saber se é positivo ou negativo');
if (entradaNumeroUsuario >= 0){
    alert(`O numero digitado (${entradaNumeroUsuario}) é positivo!`)
}else{
    alert(`O numero digitado (${entradaNumeroUsuario}) é negativo!`)
}

/**
 * at 03
 * Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100,
 *  mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
 */

let pontuacao = 150;
if(pontuacao >= 100){
    alert('Parabens! voce venceu!');
}else{
    alert('tente novamente para ganhar!');
}

/**
 * at 04
 * Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
 */

let nomeUsuarioConta = prompt('Digite seu nome')
let saldo = 2500;

alert(`Bem vindo, ${nomeUsuarioConta}. seu saldo é ${saldo}`)


/**
 * at 05
 * Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
 */

let nome = prompt('Entre com seu nome')
alert(`Boas-vindas, ${nome}!`)
