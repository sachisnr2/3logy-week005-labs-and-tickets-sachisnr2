import { useState } from "react";

function BasicCounter() {
  // state for count
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Basic Counter</h2>

      <p>Count: {count}</p>

      {/* Buttons */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default BasicCounter;