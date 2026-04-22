import BasicCounter from "./components/BasicCounter";
import LimitedCounter from "./components/LimitedCounter";
import MultipleCounters from "./components/MultipleCounters";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Counter Mastery</h1>

      <BasicCounter />
      <hr />

      <LimitedCounter />
      <hr />

      <MultipleCounters />
    </div>
  );
}

export default App;