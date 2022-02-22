import React, { useEffect, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(1);
  const [resourceType, setResourceType] = useState("posts");

  const increaseCount = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decreaseCount = () => {
    setCount((prevCount) => prevCount - 1);
  };

  //execute everytime component re-renders
  useEffect(() => {
    console.log("use effect ran : no 2nd param");
    console.log(`fetching ${resourceType} :`);
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  });

  //only execute onMount
  useEffect(() => {
    console.log("use effect ran - 2 para: blank array");
  }, []);

  return (
    <div>
      <button onClick={increaseCount}>++</button>
      <div> {count} </div>
      <button onClick={decreaseCount}>--</button>

      <button
        onClick={() => {
          setResourceType("posts");
        }}
      >
        posts
      </button>
      <button
        onClick={() => {
          setResourceType("users");
        }}
      >
        users
      </button>
      <button
        onClick={() => {
          setResourceType("comments");
        }}
      >
        comments
      </button>
    </div>
  );
};

export default Test;
