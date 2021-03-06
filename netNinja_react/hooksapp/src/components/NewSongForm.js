import React, { useState } from "react";

const Newsongform = (props) => {
  const { addSong } = props;
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("song added: ", title);
    addSong(title);
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>Song Name: </label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input type="submit" value="add song" />
    </form>
  );
};

export default Newsongform;
