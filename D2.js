/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let numero1 = 2;
let numero2 = 4;

if (numero1 > numero2) {
  document.getElementById("esercizio1").innerHTML =
    "il numero maggiore è " + numero1;
} else if (numero1 == numero2) {
  document.getElementById("esercizio1").innerHTML = "il numeri sono uguali";
} else {
  document.getElementById("esercizio1").innerHTML =
    "il numero maggiore è " + numero2;
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 8;

if (x != 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 20;

if (y % 5 == 0) {
  console.log("divisibile per 5");
}

/*let a = 100
console.log(a + ' diviso ' + 9 + ' da il resto di =' + a % 9) il modulo è il resto della divisione */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let pippo = 8;
let pluto = 16;
if (
  pippo == 8 ||
  pluto == 8 ||
  pippo + pluto == 8 ||
  pippo - pluto ||
  pluto + pippo ||
  pluto - pippo
) { 
  document.getElementById('esercizio4').innerHTML = 'uno dei numeri è uguale a 8 oppure la loro addizione/sottrazione è uguale a 8'
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = 50;

if ( totalShoppingCart > 50) {
  document.getElementById('esercizio5').innerHTML = 'Congratulazioni! hai diritto alla spedizione gratutita! il totale da pagare è: '+ totalShoppingCart;
} else {
let totaleConSpedizione = totalShoppingCart+10;
  document.getElementById('esercizio5').innerHTML = ' il totale non supera i 50 euro, verrà aggiunta la spediazione al totale.. il totale da pagare è: ' + totaleConSpedizione; 
}


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let blackfridaycart = 600;
blackfridaycart = blackfridaycart - (blackfridaycart / 100*20) // trovo il 20% del carrello e lo sottraggo ad esso
if ( blackfridaycart > 50) {
  document.getElementById('esercizio6').innerHTML = 'Congratulazioni! hai diritto alla spedizione gratutita! il totale da pagare è: '+ blackfridaycart;
} else {
let totaleConSpedizione = blackfridaycart+10;
  document.getElementById('esercizio6').innerHTML = ' il totale non supera i 50 euro, verrà aggiunta la spediazione al totale.. il totale da pagare è: ' + totaleConSpedizione; 
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primo = 10;
let secondo = 80;
let terzo = 45;


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

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

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
