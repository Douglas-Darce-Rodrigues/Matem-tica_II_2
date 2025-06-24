const botaoMotraPalavras = document.querySelector('#botao-palavrachave');

botaoMotraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave (){
    const texto = document.querySelector('entrada-de-texto').Value;   
    const campoResultado = document.querySelector('resultado-palavrachave');

    campoResultado.textContent = texto;
}