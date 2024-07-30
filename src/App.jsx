import { useState } from 'react';

import Counter from './components/Counter/Counter.jsx';
import Header from './components/Header.jsx';
import { log } from './log.js';
import ConfigureCounter from './components/Counter/ConfigureCounter.jsx';

function App() {
  log('<App /> rendered'); // Protokollieren der App-Renderung

  const [chosenCount, setChosenCount] = useState(0); // Zustand für den ausgewählten Zählerwert

  function handleSetCount(newCount) {
    setChosenCount(newCount); // Aktualisieren des Zählerwerts
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount}/> 
        <Counter initialCount={chosenCount} /> {/* Der erste Zähler mit gewähltem Startwert */}
        <Counter initialCount={0} /> {/* Ein zusätzlicher Zähler mit Startwert 0 */}
      </main>
    </>
  );
}

export default App;
