const botaoMotraPalavras = document.querySelector('#botao-palavrachave');

botaoMotraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave() {
    const texto = document.querySelector('entrada-de-texto').Value;
    const campoResultado = document.querySelector('resultado-palavrachave');
    const palavras = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto() {
    let palavras = texto.split(/\P{L}+/u);
    const frequencias = contaFrequencias(palavras);
    return palavras;

}
function contaFrequencias(palavras){

    let frequencias = {};
    for (let i of palavras) {
        frequencias[i] = 0;
        for (let j of palavras) {
            if (i == j) {
                frequencias[i]++;
            }

        }
    }

    return frequencias;


}