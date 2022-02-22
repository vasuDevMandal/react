import React, { useState, useEffect } from "react";
import Newsongform from "./NewSongForm";

const Songlist = () => {
  const [songs, setSongs] = useState([
    { title: "we are ready", id: 1 },
    { title: "we are prepared", id: 2 },
    { title: "we will help others", id: 3 },
  ]);

  const [count, setCount] = useState(4);

  const addSong = (title) => {
    setSongs([...songs, { title: title, id: count }]);
    setCount(count + 1);
    console.log("song Number: ", count);
  };

  useEffect(() => {
    console.log("useEffect hook ran", songs);
  }, [songs]);

  useEffect(() => {
    console.log("useEffect for AGE's", age);
  }, [songs]);

  const [age, setAge] = useState(10);
  return (
    <div className="song-list">
      <Newsongform addSong={addSong} />
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title} </li>;
        })}
      </ul>
      <button
        onClick={() => {
          addSong(`newSong ${count}`);
        }}
      >
        add new song
      </button>
      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        add 1 to age {age}
      </button>
    </div>
  );
};

export default Songlist;
