const botaoMotraPalavras = document.querySelector('#botao-palavrachave');

botaoMotraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave (){
    const texto = document.querySelector('entrada-de-texto').Value;   
    const campoResultado = document.querySelector('resultado-palavrachave');
    const palavras = texto.split(" ");

    campoResultado.textContent = palavras.join(", ");
}