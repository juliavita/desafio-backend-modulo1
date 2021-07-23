function solucao(jogadores) {
    let contadorDe1 = 0;
    let contadorDe0 = 0;
    let indiceDo1;
    let indiceDo0;

    for (let i = 0; i < jogadores.length; i++) {
        if (jogadores[i].jogada === 1) {
          contadorDe1 += 1;
          indiceDo1 = i;
      } else {
          contadorDe0 += 1;
          indiceDo0 = i;
      }
    }
    
    if (contadorDe1 ===1) {
      console.log(jogadores[indiceDo1].nome);
    } else if (contadorDe0 === 1) {
      console.log(jogadores[indiceDo0].nome);
    } else {
      console.log("NINGUEM");
    }
}