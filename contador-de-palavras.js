function solucao(texto) {
    const listaDePalavras = texto.trim().split(" ");
    let contadorDeEspacos = 0;
    for (let i = 0; i < listaDePalavras.length; i++) {
        if (listaDePalavras[i] === "") {
            contadorDeEspacos += 1;
        }
    }
    console.log(listaDePalavras.length - contadorDeEspacos);
}