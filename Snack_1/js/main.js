"use strict";
//array di oggetti bici
const bikes = [
  {
    bikeName: "Atala",
    weight: 2,
  },
  {
    bikeName: "Kona",
    weight: 14,
  },
  {
    bikeName: "Giant",
    weight: 2,
  },
  {
    bikeName: "Scott",
    weight: 16,
  },
  {
    bikeName: "Nakamura",
    weight: 2,
  },
  {
    bikeName: "Cube",
    weight: 12,
  },
];

//oggetto bici leggera
const lightBike = {
  lightBikeName: bikes[0].bikeName,
  lightBikeWeight: Number.MAX_VALUE,
};

//elemento html
const elementUl = document.getElementById("light-bike");

//variabile di controllo per il plurale
let plural = false;

//*forEach sull' array
bikes.forEach((bike, index) => {
  const { bikeName, weight } = bike; //destrutturazione

  //condizione per trovare la bici più leggera e else if per bici con stesso peso
  if (lightBike.lightBikeWeight > weight) {
    lightBike.lightBikeWeight = weight;
    lightBike.lightBikeName = bikeName;
  } else if (lightBike.lightBikeWeight === weight && index > 0) {
    lightBike.lightBikeName += ` - ${bikeName}`;
    plural = true;
  }
});

//stampa del risultato in base a plural
if (plural === false) {
  elementUl.innerHTML = `<li>La bici più leggera è <span style="color: salmon;">${lightBike.lightBikeName}</span> e pesa ${lightBike.lightBikeWeight} kg.</li>`;
} else {
  elementUl.innerHTML = `<li>Le bici più leggere sono <span style="color: purple;">${lightBike.lightBikeName}</span> e il loro peso è di ${lightBike.lightBikeWeight} kg.</li>`;
}

//!ricorda che nelle key si possono mettere i numeri (ci pensi ma non lo fai)
//! usa MX.VALUE come primo valore di comparazione, cosi se il primo eleemto non ha peso non confronto con undefined. Sono meno dipendende dai dati inseriti
//!per il nome della bici dipendiamo per forza dai dati inseriti
//! soluzione alternativa (fare dopo il ciclo un filter che cre un array, sempre di obj, con le bici più leggere(peso = lightweight return true))
