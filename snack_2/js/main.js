// 1. Creo array di oggetti per le squadre (nome, punti fatti = 0, falli subiti = 0)
// 2. Creo una funzione di numeri random da inserire in punti fatti e falli subiti
//    - NB per preferenza personale terrò i valori in un range tra 0 e 100 per i punti e tra 0 e 10 per i falli subiti (entrabi interi)
// 3. Creo un nuvo array con nome e falli subit (.filter) e stampo in console

"use strict";
//! funzioni

const grandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//! programma
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
