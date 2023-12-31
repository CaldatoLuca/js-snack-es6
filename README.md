# Snack JS

## Indice

- [Snack 1](#snack-1)
- [Snack 2](#snack-2)
- [Snack 3](#snack-3)

## Snack 1

_Consegna_

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

_Procedimento_

1. Creare un file html con un container in cui inserire i dati
2. Creare un array di oggetti
3. 'Selezionare' gli elementi dell' array con `.forEach`
4. Estrarre tutti i valori degli oggetti utilizzando destructuring
5. Tramite un if (o `.filter`?) stampare l' oggetto bici con peso minore

NB Usare i template literals `` per inserire l' Html

_Esecuzione_

Inizializzo un array di oggetti per raggruppare gli elementi 'bici'.

Inizializzo un oggetto `lightBike` che avrà come chiavi il nome e il peso della prima bici del mio array (confrontando i valori nel `.forEach` cambierò il valore delle chiavi, se necessario).

Prendo dall' html l' elemento contenitore `ul`.

Inizializzo una variabile di controllo nel caso in cui ci siano più bici uguali (questa cambirà il tipo di output che avrò a schermo - plurale o singolare).

```js
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
```

Avvio un 'ciclo' `.forEach` sul mio array per confrontare tutti gli elementi.
Attraverso la destrutturazione prendo i valori delle chiavi dei miei oggetti e le uso per confrontarle col i valori dell' oggetto 'lightBike'.
L' else if serve servirà nel caso in cui ci siano più bici leggere con lo stesso peso.

```js
if (plural === false) {
  container.innerHTML = `<li>La bici più leggera è <span style="color: salmon;">${lightBike.lightBikeName}</span> e pesa ${lightBike.lightBikeWeight} kg.</li>`;
} else {
  container.innerHTML = `<li>Le bici più leggere sono <span style="color: purple;">${lightBike.lightBikeName}</span> e il loro peso è di ${lightBike.lightBikeWeight} kg.</li>`;
}
```

Stampo su schermo il risulato con template literal (come da consegna)

NB

Per testare ho applicato dello 'style' all' interno del template literal stesso.

Anche se non specificato ho voluto gestire la casistica delle bici uguali.

## Snack 2

_Consegna_

Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

_Procedimento_

1. Creo array di oggetti per le squadre (nome, punti fatti = 0, falli subiti = 0)
2. Creo una funzione di numeri random da inserire in punti fatti e falli subiti
   - NB per preferenza personale terrò i valori in un range tra 0 e 100 per i punti e tra 0 e 10 per i falli subiti (entrabi interi)
3. Creo un nuvo array con nome e falli subit (.filter) e stampo in console

_Esecuzione_

Inizializzo un array di oggetti per raggruppare gli elementi 'team' (le cui proprità saranno nome/punti/falli subiti).

Creo una funzione che genera numeri random interi (estremi inclusi)

```js
//creo un array con i valori aggiornati di punti e falli
const updatedTeams = teams.map((team) => {
  let { teamName, points, againstFouls } = team;
  points = randomInt(0, 100);
  againstFouls = randomInt(0, 10);
  return { teamName, points, againstFouls };
});
```

Aggiorno l' array coi valori dati dalla funzione (la funzione map mi da come risultato un array identico a quello iniziale ma coi valori aggiornati)

```js
//creo un array in cui non considero i punti fatti
const noPointsTeams = updatedTeams.map((team) => {
  let { teamName, againstFouls } = team;

  return { teamName, againstFouls };
});
```

Subito dopo vado a 'copiare' l' array aggiornato ma nel return non inserisco points, in questo modo l' array risultate avrà solo il nome della squadra e i falli subiti come proprietà degli oggetti.

## Snack 3

_Consegna_

Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.
Usiamo i nuovi metodi degli array foreach o filter.

_Procedimento_

1. Creo un array semplice
2. Creo la funzione
3. Faccio controlli sui valori di a e b e che siano numeri (anche se superano la lunghezza dell' array?)
4. Con `.filter` creo un nuovo array coi valori con index compreso tra a e b
5. ritorno il nuovo array ed eseguo la funzione sul mio array

NB il nuovo array avrà gli elementi compresi tra a e b (a e b esclusi)

_Esecuzione_

```js
if (isNaN(a) || isNaN(b)) return console.log("i valori accettati sono numeri"); //controllo se a e b siano numeri e che a<b
if (a > b) return console.log("a non può essere maggiore di b"); //controllo che a<b
if (a > myArray.length || b > myArray.length)
  return console.log("hai superato la lunghezza dell' array"); // controllo se a e b superano la lunghezza dell' array
```

Condizioni su a e b

```js
//filtro l' array e creo un nuovo array con gli elementi compresi tra a e b
const filterArray = array.filter((element, index) => {
  //elementi compresi tra a e b
  if (index > a && index < b) {
    return true;
  } else {
    return false;
  }
});
```

Creo l' array con valori compresi tra a e b
