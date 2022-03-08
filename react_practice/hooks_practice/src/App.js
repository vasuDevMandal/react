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
import UserPortal from "./component/UserPortal";
import LoginControl from "./component/LoginControl";

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
            {/* <UserPortal isLoggedIn={false} who="Earth"></UserPortal> */}
            {/* <UserPortal isLoggedIn={true} who="Pluto"></UserPortal> */}
            <LoginControl></LoginControl>
            {/* <ContextConsumer /> */}
            {/* <CarFunComponent /> */}
            {/* <CarDisplay /> */}
          </div>
        </BooksContextProvider>
      </CarContextProvider>
    </div>
  );
}

export default App;
