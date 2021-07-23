function solucao(numeros) {
    let soma = 0;
   for(let i = 0; i < numeros.length; i++) {
       soma += numeros[i];
   }
   if (soma%numeros.length>0) {
       console.log(soma%numeros.length);
   } else {
       console.log(numeros.length);
   }
}