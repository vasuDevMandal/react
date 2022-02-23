import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const { id } = useParams();
  return (
    <div className="article-details">
      <h1>Article Details {id}</h1>
    </div>
  );
};

export default ArticleDetails;
