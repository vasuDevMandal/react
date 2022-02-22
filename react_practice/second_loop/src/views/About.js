import { useState } from "react";
import Article from "./Article";

const About = () => {
  const [mul, setMul] = useState([
    { title: "kamal", body: "article body", id: 1 },
    { title: "sonu", body: "article body", id: 2 },
    { title: "rani", body: "article body", id: 3 },
    { title: "rajesh", body: "article body", id: 4 },
    { title: "vartul", body: "article body", id: 5 },
  ]);
  const handleTitle = () => {};

  return (
    <div className="about_page" style={{ border: "1px solid green" }}>
      <div className="note">
        <h3>this is an about component</h3>
      </div>
      <Article article={mul} title="All Articles yay yay..--------------" />
      <Article
        article={mul.filter((item) => item.title === "rajesh")}
        title="rajesh Article---------"
      />
      <button onClick={handleTitle}>change title</button>
    </div>
  );
};

export default About;
