import Booklist from "./components/Booklist";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from "./contexts/BookContext";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      {/* https://www.youtube.com/watch?v=CGRpfIUURE0&list=PL4cUxeGkcC9hNokByJilPg5g9m2APUePI&index=3
      navbar and booklist is attached to the props of themeContextProvider
      so we have to call these components which are in props in <themeContext.provider> in  themeContext.js to see */}
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar />
          <BookContextProvider>
            <Booklist />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
