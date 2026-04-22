import { useState } from "react";

function LimitedCounter() {
  const min = 0;
  const max = 10;

  const [count, setCount] = useState(0);

  // Calculate progress %
  const progress = (count / max) * 100;

  return (
    <div>
      <h2>Limited Counter</h2>

      <p>Count: {count}</p>

      {/* Buttons with limits */}
      <button 
        onClick={() => setCount(count - 1)} 
        disabled={count === min}
      >
        Decrement
      </button>

      <button 
        onClick={() => setCount(count + 1)} 
        disabled={count === max}
      >
        Increment
      </button>

      {/* Progress Bar */}
      <div style={{
        width: "100%",
        height: "10px",
        background: "#ccc",
        marginTop: "10px"
      }}>
        <div style={{
          width: `${progress}%`,
          height: "100%",
          background: "green"
        }} />
      </div>

      {/* Max message */}
      {count === max && <p>Max reached!</p>}
    </div>
  );
}

export default LimitedCounter;