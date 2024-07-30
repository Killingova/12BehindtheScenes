import { useState } from 'react';

import { log } from '../../log.js';

// Komponente für einzelne Historienelemente
function HistoryItem({ count }) {
  log('<HistoryItem /> rendered', 3); // Protokollieren der HistoryItem-Renderung

  const [selected, setSelected] = useState(false); // Zustand, um auszuwählen, ob das Element ausgewählt ist

  function handleClick() {
    setSelected((prevSelected) => !prevSelected); // Umschalten des ausgewählten Zustands bei Klick
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count} {/* Anzeigen des Zählerwerts */}
    </li>
  );
}

// Hauptkomponente für die Zählerhistorie
export default function CounterHistory({ history }) {
  log('<CounterHistory /> rendered', 2); // Protokollieren der CounterHistory-Renderung

  return (
    <ol>
      {history.map((count, index) => (
        <HistoryItem key={index} count={count} /> // Erstellen eines Historienelements für jeden Zählerwert
      ))}
    </ol>
  );
}
