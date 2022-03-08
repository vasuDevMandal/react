import { useSelector, useDispatch } from "react-redux";

function App() {
  const counter = useSelector((state) => state.counter);
  const employees = useSelector((state) => state.employees);

  const dispatch = useDispatch();

  function increaseCounter() {
    dispatch({ type: "INC" });
  }
  function decreaseCounter() {
    dispatch({ type: "DEC" });
  }

  function addValueToCounter(val) {
    dispatch({ type: "ADD_VALUE", payload: val });
  }
  function addEmployee() {
    dispatch({ type: "ADD_EMP" });
  }
  return (
    <div className="App">
      <h2>counter app</h2>

      <h3>{counter}</h3>
      <button onClick={increaseCounter}>increase</button>
      <button onClick={decreaseCounter}>decrease</button>
      <button onClick={() => addValueToCounter(10)}>ADD 10</button>
      <button onClick={() => addValueToCounter(20)}>ADD 20</button>

      <h1>total employees: {employees}</h1>
      <button onClick={addEmployee}>add 1 employees</button>
    </div>
  );
}

export default App;
