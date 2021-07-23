function solucao(min, km) {
    let valorAPagar;
    if (km <= 10) {
        if (min <= 20) {
            valorAPagar = 50*min + 70*km ;
            console.log(valorAPagar);    
        } else {
            valorAPagar =  50*20 + 70*km + (min-20)*30;
            console.log(valorAPagar);
        }
    } else {
        if (min<=20) {
          valorAPagar = 50*min + 70*10 + (km-10)*50;
            console.log(valorAPagar);
        } else {
            valorAPagar = 50*20 + 70*10 + (min-20)*30 + (km-10)*50;
            console.log(valorAPagar);
        }
    } 
}