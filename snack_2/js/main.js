"use strict";
//! funzioni
// funzione che genera un intero estremi compresi
const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//! programma
//array delle squadre
const teams = [
  {
    teamName: "Inter",
    points: 0,
    againstFouls: 0,
  },
  {
    teamName: "Chelsea",
    points: 0,
    againstFouls: 0,
  },
  {
    teamName: "FC Barcelona",
    points: 0,
    againstFouls: 0,
  },
  {
    teamName: "PSG",
    points: 0,
    againstFouls: 0,
  },
  {
    teamName: "Bayern Monaco",
    points: 0,
    againstFouls: 0,
  },
  {
    teamName: "Galatasaray",
    points: 0,
    againstFouls: 0,
  },
];

//creo un array con i valori aggiornati di punti e falli
// const updatedTeams = teams.map((team) => {
//   let { teamName, points, againstFouls } = team;
//   points = randomInt(0, 100);
//   againstFouls = randomInt(0, 10);
//   return { teamName, points, againstFouls };
// });
// console.log(`Array aggiornato con punti fatti e falli subiti:`);
// console.log(updatedTeams);

teams.forEach((team) => {
  // let { points, againstFouls } = team;
  // points = randomInt(0, 100);
  // againstFouls = randomInt(0, 100);
  team.points = randomInt(0, 100);
  team.againstFouls = randomInt(0, 10);
});

console.log(teams);

//creo un array in cui non considero i punti fatti
const noPointsTeams = teams.map((team) => {
  const { teamName, againstFouls } = team;

  return { teamName, againstFouls };
});
console.log(`Array aggiornato senza punti fatti:`);
console.log(noPointsTeams);

//!non creare un nuovo array ma modifica quello in input
//!se destrutturo le chiavi non si aggiorna il mio array
