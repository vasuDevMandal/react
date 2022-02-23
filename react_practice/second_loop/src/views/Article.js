const Article = (props) => {
  const { articles, title, handleDelete } = props;
  console.log(articles);
  return (
    <div className="article">
      <h2>{title}</h2>
      {articles.map((single) => (
        <div
          className="single_unit"
          key={single.id}
          style={{ border: "1px solid black" }}
        >
          <span>blog number #{single.id}</span>
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
