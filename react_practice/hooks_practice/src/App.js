import CarClassComponent from "./component/CarClassComponent";
import CarFunComponent from "./component/CarFunComponent";
import CarDisplay from "./component/CarDisplay";
import CarContextProvider from "./context/CarContext";
import Test from "./Test";
import UseContextHook from "./UseContextHook";
import UseMemo from "./UseMemo";
import UseRef from "./UseRef";
import ContextConsumer from "./component/ContextConsumerClass";
import BooksContextProvider from "./context/BooksContextFunc";

function App() {
  return (
    <div className="App">
      <CarContextProvider>
        <BooksContextProvider>
          <div className="test">
            {/* <Test /> */}
            {/* <UseMemo></UseMemo> */}
            {/* <UseRef></UseRef> */}
            {/* <UseContextHook></UseContextHook> */}
            {/* <CarClassComponent /> */}
            <ContextConsumer />
            <CarFunComponent />
            <CarDisplay />
          </div>
        </BooksContextProvider>
      </CarContextProvider>
    </div>
  );
}

export default App;
