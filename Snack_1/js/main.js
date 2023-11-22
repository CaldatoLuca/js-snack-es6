// 1. Creare un file html con un container in cui inserire i dati
// 2. Creare un array di oggetti
// 3. 'Selezionare' gli elementi dell' array con `.forEach`
// 4. Estrarre tutti i valori degli oggetti utilizzando destructuring
// 5. Tramite un if (o `.filter`?) stampare l' oggetto bici con peso minore

// NB Usare i template literals `` per inserire l' Html

"use strict";

const bikes = [
  {
    bikeName: "atala",
    weight: "15",
  },
  {
    bikeName: "Kona",
    weight: "20",
  },
  {
    bikeName: "Giant",
    weight: "30",
  },
  {
    bikeName: "Scott",
    weight: "10",
  },
  {
    bikeName: "Nakamura",
    weight: "13",
  },
  {
    bikeName: "Cube",
    weight: "18",
  },
];

//*forEach sull' array
bikes.forEach((bike) => {
  console.log(bike);
});
