import { useState, useEffect } from "react";
import Article from "./Article";

const About = () => {
  const [articles, setArticles] = useState([
    { title: "kamal", body: "article body", id: 1 },
    { title: "sonu", body: "article body", id: 2 },
    { title: "rani", body: "article body", id: 3 },
    { title: "rajesh", body: "article body", id: 4 },
    { title: "vartul", body: "article body", id: 5 },
  ]);
  const handleDelete = (id) => {
    const newArticles = articles.filter((single) => single.id !== id);
    setArticles(newArticles);
    console.log("deleted blog number: ", id);
  };
  const [name, setName] = useState("my site");
  const handleName = () => {
    if (name === "my site") {
      setName("our website");
    } else {
      setName("my site");
    }
  };

  useEffect(() => {
    console.log("name is changed..");
  }, [name]);
  useEffect(() => {
    console.log("use effect ran");
  });
  return (
    <div className="about_page" style={{ border: "1px solid green" }}>
      <p>{name}</p>
      <button onClick={() => handleName()}>change name</button>
      <div className="note">
        <h3>this is an about component</h3>
      </div>
      <Article
        articles={articles}
        title="All Articles yay yay..--------------"
        handleDelete={handleDelete}
      />
      <Article
        articles={articles.filter((item) => item.title === "rajesh")}
        title="rajesh Article---------"
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default About;
