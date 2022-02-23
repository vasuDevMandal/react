import { useState } from "react";

const NodeFriend = () => {
  const [data, setData] = useState("");

  async function fetchDataFromNode() {
    const res = await fetch("http://localhost:5000/blogs", {
      method: "GET",
      // credentials: "include",
    });
    const received_data = await res.json();
    setData(received_data);
    console.log(data);
  }

  return (
    <div style={{ border: "1px solid grey", color: "grey" }}>
      <h1>data from node server:</h1>{" "}
      <p style={{ fontSize: "1em" }}>{JSON.stringify(data)}</p>
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
