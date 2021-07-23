function solucao(carta) {
    let listaDeCartas = ["Q", "J", "K", "A", "2", "3"];
    let indiceCarta;
    let listaDeManilha = ["J", "K", "A", "2","3", "Q"];
    for (let i = 0; i < listaDeCartas.length; i++) {
        if (carta === listaDeCartas[i]) {
            indiceCarta = i;
        }
    }
    console.log(listaDeManilha[indiceCarta]);
}
