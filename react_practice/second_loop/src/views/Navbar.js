import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" style={{ border: "1px solid green" }}>
      <h1>this is nav bar component</h1>
      <div
        className="nav_links"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <a href="/">Home S</a>
        <Link to="/">HomeR</Link>
        <a href="/about">about S</a>
        <Link to="/about">about R</Link>
        <a href="/node-friend">node S</a>
        <Link to="/node-friend">node R</Link>
        <a href="/">school</a>
        <a href="/">register</a>
      </div>
    </div>
  );
};

export default Navbar;
