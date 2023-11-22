"use strict";

const bikes = [
  {
    bikeName: "Atala",
    weight: "35",
  },
  {
    bikeName: "Kona",
    weight: "14",
  },
  {
    bikeName: "Giant",
    weight: "20",
  },
  {
    bikeName: "Scott",
    weight: "16",
  },
  {
    bikeName: "Nakamura",
    weight: "13",
  },
  {
    bikeName: "Cube",
    weight: "13",
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
  container.innerHTML = `<li>La bici più leggera è <span style="color: salmon;">${lightBike.lightBikeName}</span> e pesa ${lightBike.lightBikeWeight} kg.</li>`;
} else {
  container.innerHTML = `<li>Le bici più leggere sono <span style="color: purple;">${lightBike.lightBikeName}</span> e il loro peso è di ${lightBike.lightBikeWeight} kg.</li>`;
}
