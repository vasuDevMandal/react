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
        <a href="/">Home</a>
        <a href="/about">about</a>
        <a href="/">care</a>
        <a href="/">school</a>
        <a href="/">register</a>
      </div>
    </div>
  );
};

export default Navbar;
