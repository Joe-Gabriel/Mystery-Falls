let listaDeNumeroSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
// ID = identificador unico
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do número secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Advinhe número  entre 1 e 10';

//Função com parametros
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate:1.2});

}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Bem vindos a Cabana do Mistério!');
    exibirTextoNaTela('p', 'Você precisa advinhar qual número entre 1 e 10 está escondido!');
}
exibirMensagemInicial();

function verificarChute() {
    //Boolean é o valor que define se e verdadeiro ou falso.
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'É isso ai! Foi molezinha!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu qual era o número com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto) {
            exibirTextoNaTela('p', 'Quase lá, o número é menor');
        } else {
            exibirTextoNaTela('p', 'Não, não, não, o número é maior');
        }
        // tentativas = tentativa =1;
tentativas++;
limparCampo();
    }
   
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite +1);
    let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSorteados = [];
    }

    if (listaDeNumeroSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
        } else {
            listaDeNumeroSorteados.push(numeroEscolhido);
            console.log(listaDeNumeroSorteados);
            return numeroEscolhido;
        }
    
    }


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
numeroSecreto = gerarNumeroAleatorio();
limparCampo();
tentativas = 1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true);
}