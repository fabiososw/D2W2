/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 8;
let num2 = 10;

if (num1 > num2) {
    console.log(num1 + " è maggiore di " + num2);
} else if (num1 < num2) {
    console.log(num2 + " è maggiore di " + num1);
} else {
    console.log(num1 + " e " + num2 + " sono uguali");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un num3 intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num3 = 4
if (num3 === 5) {
  console.log("equal");
} else {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un num3 fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

  if (num3 % 5 === 0) {
      console.log("divisibile per 5");
  } else {
      console.log("non divisibile per 5");
  }
  
  num3 = 5
  
  if (num3 % 5 === 0) {
      console.log("divisibile per 5");
  } else {
      console.log("non divisibile per 5");
  }

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

if (num1 + num2 === 8 || num1 === 8 || num2 === 8 || num1 - num2 === 8) {
  console.log("Il valore di uno di questi è 8 oppure la loro addizione/sottrazione è uguale a 8. ")
} else {
  console.log("Il valore di nessuno di questi è 8 e la loro addizione/sottrazione è diversa da 8. ")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let totalShoppingCart= 50
if (totalShoppingCart > 50) {
  console.log("Complimenti, hai diritto alla spedizione gratuita!")
} else {
  console.log("Il tuo totale è" + " " + (totalShoppingCart + 10) + ".")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let newTotalShoppingCart = (totalShoppingCart - (totalShoppingCart * 0.2))
if (newTotalShoppingCart > 50) {
  console.log("Complimenti, hai diritto alla spedizione gratuita!")
} else {
  console.log("Il tuo totale è" + " " + (newTotalShoppingCart + 10) + ".")
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un num3 oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let verificaNumero=("ddds") 
  if (typeof verificaNumero === "number") {
      console.log("Il valore fornito è un numero.");
  } else {
      console.log("Il valore fornito non è un numero.");
  }


/* ESERCIZIO 9
  Crea un algoritmo per controllare se un num3 fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
num3= 7
if (num3 % 2 === 0) {
  console.log("Pari");
} else {
  console.log("Dispari");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 10) {
    console.log("Meno di 10");
if (val < 5) {
    console.log("Meno di 5");
    console.log("Uguale a 10 o maggiore");
  }
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

delete me.skills.pop()
console.log(me)
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
