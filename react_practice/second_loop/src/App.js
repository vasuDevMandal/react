import "./App.css";
import About from "./views/About";
import Navbar from "./views/Navbar";

function App() {
  const title = "this is an advanced react.";
  return (
    <div className="App" style={{ border: "1px solid red" }}>
      <h3>root file app.js</h3>
      <Navbar />
      <div>
        <h3>loop secondo..</h3>
        <h2>{title}</h2>
      </div>
      <About />
    </div>
  );
}

export default App;
