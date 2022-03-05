import CarClassComponent from "./CarClassComponent";
import CarFunComponent from "./CarFunComponent";
import CarDisplay from "./component/CarDisplay";
import CarContextProvider from "./context/CarContext";
import Test from "./Test";
import UseContextHook from "./UseContextHook";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";

function App() {
  return (
    <div className="App">
      <CarContextProvider>
        <div className="test">
          {/* <Test /> */}
          {/* <UseMemo></UseMemo> */}
          {/* <UseRef></UseRef> */}
          {/* <UseContextHook></UseContextHook> */}
          {/* <CarClassComponent /> */}
          {/* <CarFunComponent /> */}
          <CarDisplay />
        </div>
      </CarContextProvider>
    </div>
  );
}

export default App;
