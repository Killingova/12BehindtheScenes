import { useState } from "react";
import { log } from '../../log.js';  // Adjust the path to be correct relative to the location of ConfigureCounter.jsx

export default function ConfigureCounter({ onSet }) {  // Destructure onSet from props
    log('<ConfigureCounter /> rendered');
    const [enteredNumber, setEnteredNumber] = useState(0);

    function handleChange(event) {
      setEnteredNumber(+event.target.value);
    }
  
    function handleSetClick() {
      onSet(enteredNumber);
      setEnteredNumber(0);
    }
  
    return (
        <section id="configure-counter">
        <h2>Set Counter</h2>
        <input type="number" onChange={handleChange} value={enteredNumber} />
        <button onClick={handleSetClick}>Set</button>
      </section>
    );
}
