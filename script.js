const botaoMotraPalavras = document.querySelector('#botao-palavrachave');

botaoMotraPalavras.addEventListener('click', mostraPalavrasChave);

function mostraPalavrasChave (){
    const texto = document.querySelector('entrada-de-texto').Value;   
    const campoResultado = document.querySelector('resultado-palavrachave');
    const palavras = processaTexto(texto);

    campoResultado.textContent = palavrasChave.join(", ");
}

function processaTexto() {
  
    let palavras = texto.split(/\P{L}+/u); 
  
    let frequencias = [];
    for(let i in palavras){
       frequencias[i] = 0;
    for (let j in palavras){
       if (palavras[i] == palavras[j]){
             frequencias[i]++;
            }

        }
    }
   
    console.log(frequencias);

    return palavras;
 
}