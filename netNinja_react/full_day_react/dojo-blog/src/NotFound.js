import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className="not-found">
      <Link to="/">
        <button>back to home page</button>
      </Link>
      <h1>404 Sorry</h1>
      <h2>page not found...</h2>
    </div>
  );
};

export default Notfound;
