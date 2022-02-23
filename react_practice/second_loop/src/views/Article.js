import { Link } from "react-router-dom";

const Article = (props) => {
  const { blogs, title, handleDelete } = props;
  console.log("article.js", blogs);

  return (
    <div className="article">
      <h2>{title}</h2>
      {blogs.map((single) => (
        <div
          className="single_unit"
          key={single.id}
          style={{ border: "1px solid black" }}
        >
          <span>
            {" "}
            <Link to={`/article/${single.id}`}>blog number #{single.id}</Link>
          </span>
          <h3>title: {single.title}</h3>
          <h4>body: {single.body}</h4>
          <button
            onClick={() => {
              handleDelete(single.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Article;
