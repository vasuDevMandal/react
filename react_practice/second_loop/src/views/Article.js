const Article = (props) => {
  const articles = props.article;
  const title = props.title;
  return (
    <div className="article">
      <h2>{title}</h2>
      {articles.map((single) => (
        <div className="single_unit" key={single.id}>
          <h3>title: {single.title}</h3>
          <h4>body: {single.body}</h4>
        </div>
      ))}
    </div>
  );
};

export default Article;
