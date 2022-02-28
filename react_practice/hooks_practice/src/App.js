import CarClassComponent from "./CarClassComponent";
import CarFunComponent from "./CarFunComponent";
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
        {/* <UseContextHook></UseContextHook> */}
        <CarClassComponent />
        <CarFunComponent />
      </div>
    </div>
  );
}

export default App;
