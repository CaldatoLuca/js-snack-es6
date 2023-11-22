# Snack JS

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
