

//trouxe a função 'comprar()' do HTML e recuperei todos os valores e textos que eu precisava.
function comprar() {

    //valores e textos dos elementos do HTML.
    let quantidade = parseInt(document.getElementById('qtd').value);
    let tipoIngresso = document.getElementById('tipo-ingresso').value;

    // condições para realizar as compras.
    if (tipoIngresso == 'Cadeira inferior') {
        comprarInferior(quantidade);
    } else if (tipoIngresso == 'Cadeira superior') {
        comprarSuperior(quantidade)
    } else {
        comprarPista(quantidade);
    }
    zerarCampoQuantidade(quantidade);
}

//function para comprar cadeira inferior
function comprarInferior(quantidade) {
    let inferior = parseInt(document.getElementById('qtd-inferior').innerHTML);
    if (quantidade <= inferior && quantidade >= 1) {
        diminuirInferior = inferior - quantidade;
        inferior = document.getElementById('qtd-inferior');inferior.innerHTML = diminuirInferior;
        fraseCorreta(quantidade);
    } else if (quantidade > inferior) {
        alert('Quantidade indisponível');
    } else {
        fraseCorreta(quantidade);
    }
    
}

//function para comprar cadeira superior
function comprarSuperior(quantidade) {
    let superior = parseInt(document.getElementById('qtd-superior').innerHTML);
    if (quantidade <= superior && quantidade >= 1) {
        diminuirSuperior = superior - quantidade;
        superior = document.getElementById('qtd-superior');superior.innerHTML = diminuirSuperior;
        fraseCorreta(quantidade);
    } else if (quantidade > superior) {
        alert('Quantidade indisponível');
    } else {
        fraseCorreta(quantidade);
    }
    
}

//function para comprar pista
function comprarPista(quantidade) {
    let pista = parseInt(document.getElementById('qtd-pista').innerHTML);
    if (quantidade <= pista && quantidade >= 1) {
        diminuirPista = pista - quantidade;
        pista = document.getElementById('qtd-pista');pista.innerHTML = diminuirPista;
        fraseCorreta(quantidade);
    } else if (quantidade > pista) {
        alert('Quantidade indisponível');
    } else {
        fraseCorreta(quantidade);
    }
    
}

// zerar o campo quantidade e focar nele.
function zerarCampoQuantidade (quantidade) {
    quantidade = document.getElementById('qtd');quantidade.value = "";
    quantidade = document.getElementById('qtd').focus();
}

//função pra escrever a frase correta quando clicar em 'comprar'.
function fraseCorreta (quantidade) {
    if (quantidade > 1) {
        alert('Ingressos comprados com sucesso!')
    } else if (quantidade == 1) {
        alert('Ingresso comprado com sucesso!')
        zerarCampoQuantidade();
    } else {
        alert('Falha na compra do ingresso. Certifique-se que haja "Quantidade disponível" suficiente e que digitou a "Quantidade" correta.');
        zerarCampoQuantidade();
    }
}

document.addEventListener('keypress', function(teclar) {
    if (teclar.key === 'Enter')
    comprar();
})




//Exercicios complementares
// verificarNumeroParOuImpar();
// function verificarNumeroParOuImpar() {
//     let numeroDigitado = parseFloat(prompt('Digite um número'));
//     // alert(`O número é ${numeroDigitado}`);
//     if (numeroDigitado % 2 === 0){
//          console.log(`O número ${numeroDigitado} é um número par.`);
// } else { 
//         console.log(`O número ${numeroDigitado} é um número impar.`);
//     }
// }