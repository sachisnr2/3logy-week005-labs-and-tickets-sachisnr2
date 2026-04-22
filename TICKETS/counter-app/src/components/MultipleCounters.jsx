import { useState } from "react";

function MultipleCounters() {
  // Array of counters
  const [counters, setCounters] = useState([0]);

  // Add new counter
  const addCounter = () => {
    setCounters([...counters, 0]); // no mutation
  };

  // Remove counter
  const removeCounter = (index) => {
    setCounters(counters.filter((_, i) => i !== index));
  };

  // Update counter value
  const updateCounter = (index, value) => {
    const newCounters = [...counters];
    newCounters[index] += value;
    setCounters(newCounters);
  };

  // Total sum
  const total = counters.reduce((sum, num) => sum + num, 0);

  return (
    <div>
      <h2>Multiple Counters</h2>

      <button onClick={addCounter}>Add Counter</button>

      {counters.map((count, index) => (
        <div key={index}>
          <p>Counter {index + 1}: {count}</p>

          <button onClick={() => updateCounter(index, 1)}>+</button>
          <button onClick={() => updateCounter(index, -1)}>-</button>

          <button onClick={() => removeCounter(index)}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: {total}</h3>
    </div>
  );
}

export default MultipleCounters;