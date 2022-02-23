import { useState, useEffect } from "react";
import Article from "./Article";

const About = () => {
  const [blogs, setBlogs] = useState("");
  const handleDelete = (id) => {
    const newBlogs = blogs.filter((single) => single.id !== id);
    setBlogs(newBlogs);
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

  const abortCont = new AbortController();
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:5000/blogs", { signal: abortCont.signal })
        .then((res) => res.json())
        .then((data) => {
          setIsPending(false);
          setBlogs(data.blogs);
          console.log("about.js", data.blogs);
        })
        .catch((err) => {
          console.log(err.name);
          setIsPending(false);
        });
    }, 3000);

    return () => {
      console.log("clean up function ran in about.js");
      console.log("fetch request aborted..");

      abortCont.abort();
    };
  }, [abortCont]);

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
      {blogs && (
        <Article
          blogs={blogs}
          title="All blogs yay yay..--------------"
          handleDelete={handleDelete}
        />
      )}
      {blogs && (
        <Article
          blogs={blogs.filter((item) => item.id % 2 === 0)}
          title="blogs with even id's---------"
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default About;
