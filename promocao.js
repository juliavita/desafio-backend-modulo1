function solucao(precos) {
    let soma = 0;
    let menorPreco = precos[0];
    for (let i = 0; i < precos.length; i++) {
        soma += precos[i];
    }
    if (precos.length>=3) {
        for (preco of precos) {
            if (menorPreco>preco) {
                menorPreco = preco;
            }
        }
        console.log(soma - menorPreco/2);
    } else {
        console.log(soma);
    }
}