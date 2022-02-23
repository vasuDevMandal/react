import "./App.css";
import About from "./views/About";
import Navbar from "./views/Navbar";
import NodeFriend from "./views/NodeFriend";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
} from "react-router-dom";
import Home from "./views/Home";
import ArticleDetails from "./views/ArticleDetails";

function App() {
  return (
    <Router>
      <div className="App" style={{ border: "1px solid red" }}>
        <h3>root file app.js</h3>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/node-friend">
            <NodeFriend></NodeFriend>
          </Route>
          <Route path="/article/:id">
            <ArticleDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
