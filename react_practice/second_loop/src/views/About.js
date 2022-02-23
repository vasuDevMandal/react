import { useState, useEffect } from "react";
import Article from "./Article";

const About = () => {
  const [articles, setArticles] = useState("");
  const handleDelete = (id) => {
    const newArticles = articles.filter((single) => single.id !== id);
    setArticles(newArticles);
    console.log("deleted blog number: ", id);
  };
  const [name, setName] = useState("my site");
  const [isPending, setIsPending] = useState(true);
  const handleName = () => {
    if (name === "my site") {
      setName("our website");
    } else {
      setName("my site");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:3500/blogs")
        .then((res) => res.json())
        .then((data) => {
          setIsPending(false);
          setArticles(data);
          console.log(data);
        })
        .catch((err) => console.log(err));
    }, 5000);
  }, []);

  useEffect(() => {
    console.log("name is changed..");
  }, [name]);
  useEffect(() => {
    console.log("nothing just use effect ran");
  });
  return (
    <div className="about_page" style={{ border: "1px solid green" }}>
      <p>{name}</p>
      <button onClick={() => handleName()}>change name</button>
      <div className="note">
        <h3>this is an about component</h3>
        {isPending && <h3>loading.....</h3>}
      </div>
      {articles && (
        <Article
          articles={articles}
          title="All Articles yay yay..--------------"
          handleDelete={handleDelete}
        />
      )}
      {/* {articles && (
        <Article
          articles={articles.filter((item) => item.title === "rajesh")}
          title="rajesh Article---------"
          handleDelete={handleDelete}
        />
      )} */}
    </div>
  );
};

export default About;
