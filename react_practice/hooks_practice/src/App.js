import Test from "./Test";
import UseContextHook from "./UseContextHook";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";

function App() {
  return (
    <div className="App">
      <div className="test">
        {/* <Test /> */}
        {/* <UseMemo></UseMemo> */}
        {/* <UseRef></UseRef> */}
        <UseContextHook></UseContextHook>
      </div>
    </div>
  );
}

export default App;
