// Scrivi un programma che stampi i numeri da 1 a 100



// creazione CICLO FOR per far stampare i numeri da 1 a 100 
for (i = 0; i < 101; i++) {

    // stampa FizzBuzz per i multipli di 3 e 5 
    if( (i % 3 === 0 ) && ( i % 5 === 0 ) && (i !== 0) ) {
        var multi_3_5 = console.log("FizzBuzz")

    // stampa Fizz per i multipli di 3
    } else if( i % 3 === 0 ) {
        var multi_3 = console.log("Fizz")

    // Stampa Buzz per i multipli di 5 
    } else if ( i % 5 === 0) {
        var multi_5 = console.log("Buzz")

    // Stampa il numero (i) assoluto 
    } else {
        console.log(i)
    }
}
