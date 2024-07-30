import { useState } from 'react';
import { log } from '../../log.js';

export default function ConfigureCounter({ onSet }) {
  log('<ConfigureCounter /> rendered'); // Protokollieren der ConfigureCounter-Renderung
  const [enteredNumber, setEnteredNumber] = useState(0); // Zustand für die eingegebene Zahl

  function handleChange(event) {
    setEnteredNumber(+event.target.value); // Aktualisieren der eingegebenen Zahl
  }

  function handleSetClick() {
    onSet(enteredNumber); // Weitergeben der eingegebenen Zahl an die Elternkomponente
    setEnteredNumber(0); // Zurücksetzen des Eingabefelds
  }

  return (
    <section id="configure-counter">
      <h2>Zähler einstellen</h2>
      <input type="number" onChange={handleChange} value={enteredNumber} /> {/* Eingabefeld für die Zahl */}
      <button onClick={handleSetClick}>Einstellen</button>
    </section>
  );
}
