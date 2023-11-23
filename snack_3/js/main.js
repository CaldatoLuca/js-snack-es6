"use strict";
//!funzioni
const newArray = (array, a, b) => {
  if (!Array.isArray(array))
    return console.log("non è stato inserito un array");
  if (isNaN(a) || isNaN(b))
    return console.log("i valori accettati sono numeri"); //controllo se a e b siano numeri e che a<b
  if (a > b) return console.log("a non può essere maggiore di b"); //controllo che a<b
  if (b > myArray.length - 1 || a < 0)
    return console.log("sei fuori dalla lunghezza dell' array"); // controllo se a e b superano la lunghezza dell' array

  //filtro l' array e creo un nuovo array con gli elementi compresi tra a e b
  const filterArray = array.filter((element, index) => {
    //elementi compresi tra a e b
    if (index > a && index < b) {
      return true;
    } else {
      return false;
    }
  });
  return console.log(filterArray);
};

//!progrmma
//il mio array
const myArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "l"];

//eseguo la funzione
console.log("Il nuovo array è: ");
newArray(myArray, 2, 8);

/* 
!!era meglio usare lo switch
switch(true){
  case !Array.isArray(array):
  case isNaN(a) || isNaN(b):
  case a > b:
  case b > myArray.length - 1 || a < 0:
    return console.log('error');
  default: 
    const filterArray = array.filter((element, index) => {
    if (index > a && index < b) {
      return true;
    } else {
      return false;
    }
  });
  return console.log(filterArray);
}
*/
