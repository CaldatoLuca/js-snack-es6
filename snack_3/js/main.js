"use strict";
//!funzioni
const newArray = (array, a, b) => {
  if (isNaN(a) || isNaN(b))
    return console.log("i valori accettati sono numeri"); //controllo se a e b siano numeri e che a<b
  if (a > b) return console.log("a non può essere maggiore di b"); //controllo che a<b
  if (a > myArray.length || b > myArray.length)
    return console.log("hai superato la lunghezza dell' array"); // controllo se a e b superano la lunghezza dell' array

  //filtro l' array e creo un nuovo array con gli elementi compresi tra a e b
  const filterArray = array.filter((element, index) => {
    //elementi compresi tra a e b
    if (index > a && index < b) {
      return true;
    } else {
      return false;
    }
  });
  return console.log("Il nuovo array è: " + filterArray);
};

//!progrmma
//il mio array
const myArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l"];

//eseguo la funzione
newArray(myArray, 2, 8);
