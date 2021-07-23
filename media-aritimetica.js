function solucao(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    let mediaDeAcumulacao = soma / lista.length ;
    console.log(mediaDeAcumulacao);
  
}