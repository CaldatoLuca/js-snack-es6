// 1. Creare un file html con un container in cui inserire i dati
// 2. Creare un array di oggetti
// 3. 'Selezionare' gli elementi dell' array con `.forEach`
// 4. Estrarre tutti i valori degli oggetti utilizzando destructuring
// 5. Tramite un if (o `.filter`?) stampare l' oggetto bici con peso minore

// NB Usare i template literals `` per inserire l' Html

"use strict";

const bikes = [
  {
    bikeName: "Atala",
    weight: "35",
  },
  {
    bikeName: "Kona",
    weight: "10",
  },
  {
    bikeName: "Giant",
    weight: "10",
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
const lightBike = {
  lightBikeName: bikes[0].bikeName,
  lightBikeWeight: bikes[0].weight,
};
const container = document.querySelector("ul");
let plural = false;

//*forEach sull' array
bikes.forEach((bike, index) => {
  const { bikeName, weight } = bike;

  if (+lightBike.lightBikeWeight > +weight) {
    lightBike.lightBikeWeight = weight;
    lightBike.lightBikeName = bikeName;
  } else if (+lightBike.lightBikeWeight === +weight && index > 0) {
    lightBike.lightBikeName += ` - ${bikeName}`;
    plural = true;
  }
});

if (plural === false) {
  container.innerHTML = `<li>La bici più leggera è ${lightBike.lightBikeName} e pesa: ${lightBike.lightBikeWeight} kg.</li>`;
} else {
  container.innerHTML = `<li>Le bici più leggere sono ${lightBike.lightBikeName} e il loro peso è: ${lightBike.lightBikeWeight} kg.</li>`;
}
