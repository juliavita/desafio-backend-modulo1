function solucao(lista) {
    let listaMaioresDeIdade = [];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] >= 18) {
            listaMaioresDeIdade.push(lista[i]);
        }
    }
    
    if (listaMaioresDeIdade.length >=1){
        let menorIdade = listaMaioresDeIdade[0];
        for (idade of listaMaioresDeIdade) {
            if (menorIdade>idade) {
                menorIdade = idade;
            }
        }
    console.log(menorIdade)
    } else {
        console.log("CRESCA E APARECA")
    }  
}
