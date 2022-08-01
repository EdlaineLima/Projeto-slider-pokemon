/*
OBJETIVO 2 - quando clicarmos na seta de voltr temos que mostrar o anterior cartão da lista
- passo 1 - dar um jeito de pegar o elemento de HTML  da seta voltar
- passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
- passo 3 - fazer aparecer o cartão anterior da lista
-passo 4 - buscar o cartão que estar selecionado e esconder
*/

//OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista

//passo 1 - dar um jeito de pegar o elemento de HTML  da seta avançar
const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
     //passo 4 - buscar o cartão que estar selecionado e esconder
     const cartaoSelecionado = document.querySelector('.selecionado');
     cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
     cartoes[indiceCartao].classList.add('selecionado');
}

//passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.
btnAvancar.addEventListener('click', function () {
 if(cartaoAtual === cartoes.length - 1) return;

 //passo 4
 esconderCartaoSelecionado();

//passo 3 - fazer aparecer o próximo cartão da lista
   cartaoAtual++;
   mostrarCartao(cartaoAtual);

});

//OBJETIVO 2 - quando clicarmos na seta de voltr temos que mostrar o anterior cartão da lista.
 
btnVoltar.addEventListener('click', function () {

     if(cartaoAtual === 0) return;
     
     esconderCartaoSelecionado();

cartaoAtual--;
mostrarCartao(cartaoAtual);

 });