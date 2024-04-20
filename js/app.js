

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
    quantidade = document.getElementById('qtd');quantidade.value = "";
    quantidade = document.getElementById('qtd').focus();
    
}
//function para comprar cadeira inferior
function comprarInferior(quantidade) {
    let inferior = parseInt(document.getElementById('qtd-inferior').innerHTML);
    if (quantidade <= inferior) {
        diminuirInferior = inferior - quantidade;
        inferior = document.getElementById('qtd-inferior');inferior.innerHTML = diminuirInferior;
        alert('Ingresso "Cadeira inferior" comprado com sucesso!')
    } else {
        alert('Falha na compra do ingresso "Cadeira inferior". Quantidade indisponível.');
    }
}

//function para comprar cadeira superior
function comprarSuperior(quantidade) {
    let superior = parseInt(document.getElementById('qtd-superior').innerHTML);
    if (quantidade <= superior) {
        diminuirSuperior = superior - quantidade;
        superior = document.getElementById('qtd-superior');superior.innerHTML = diminuirSuperior;
        alert('Ingresso "Cadeira superior" comprado com sucesso!')
    } else {
        alert('Falha na compra do ingresso "Cadeira superior". Quantidade indisponível.');
    }
    
}

//function para comprar pista
function comprarPista(quantidade) {
    let pista = parseInt(document.getElementById('qtd-pista').innerHTML);
    if (quantidade <= pista) {
        diminuirPista = pista - quantidade;
        pista = document.getElementById('qtd-pista');pista.innerHTML = diminuirPista;
        alert('Ingresso "Pista" comprado com sucesso!')
    } else {
        alert('Falha na compra do ingresso "Pista". Quantidade indisponível.');
    }
    
}


// condições para realizar a compra da cadeira inferio
