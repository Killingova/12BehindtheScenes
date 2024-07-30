import { useState, memo, useCallback, useMemo } from 'react';

import IconButton from '../UI/IconButton.jsx';
import MinusIcon from '../UI/Icons/MinusIcon.jsx';
import PlusIcon from '../UI/Icons/PlusIcon.jsx';
import CounterOutput from './CounterOutput.jsx';
import { log } from '../../log.js';
import CounterHistory from './CounterHistory.jsx';

function isPrime(number) {
  log('Calculating if is prime number', 2, 'other'); // Protokollieren der Primzahlberechnung
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const Counter = memo(function Counter({ initialCount }) {
  log('<Counter /> rendered', 1); // Protokollieren der Counter-Renderung
  const initialCountIsPrime = useMemo(() => isPrime(initialCount), [initialCount]); // Überprüfen, ob der Startwert eine Primzahl ist

  const [counter, setCounter] = useState(initialCount); // Zustand für den Zähler
  const [counterChanges, setCounterChanges] = useState([]); // Zustand für die Zähleränderungen

  const handleDecrement = useCallback(() => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter - 1;
      setCounterChanges((prevChanges) => [...prevChanges, newCounter]);
      return newCounter;
    });
  }, []);

  const handleIncrement = useCallback(() => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;
      setCounterChanges((prevChanges) => [...prevChanges, newCounter]);
      return newCounter;
    });
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        Der anfängliche Zählerwert war <strong>{initialCount}</strong>. Es{' '}
        <strong>ist {initialCountIsPrime ? 'eine' : 'keine'}</strong> Primzahl.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Verringern
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Erhöhen
        </IconButton>
      </p>
      <CounterHistory history={counterChanges} /> {/* Zählerhistorie */}
    </section>
  );
});

export default Counter;
