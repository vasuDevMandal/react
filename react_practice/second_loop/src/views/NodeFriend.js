import { useState } from "react";

const NodeFriend = () => {
  const [data, setData] = useState("");

  async function fetchDataFromNode() {
    const res = await fetch("http://localhost:3500/blogs", {
      method: "GET",
      // credentials: "include",
    });
    const data = await res.json();
    setData(data);
    console.log(data);
  }

  return (
    <div>
      <h1>data from node server: {data.name}</h1>
      <button
        onClick={
          () => fetchDataFromNode() //.catch((err) => console.log("ERROR:", err))
        }
      >
        fetch node server data
      </button>
    </div>
  );
};

export default NodeFriend;
