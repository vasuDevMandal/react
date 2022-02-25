import React, { useState, useEffect, useRef } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0);//1
  const renderCount = useRef(0); //2
  const inputRef = useRef();
  const prevName = useRef();

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  useEffect(() => {
    // setRenderCount((prevCount) => prevCount + 1);//1
    renderCount.current = renderCount.current + 1; //2
  });

  function focus() {
    inputRef.current.focus();
  }

  return (
    <div className="use-ref-hook">
      <h1>useRef hook</h1>

      <div>
        <input
          ref={inputRef}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>my name is {name}</div>
        <div>I rendered {renderCount.current} times </div>
        <div>previous name : {prevName.current}</div>
        <button onClick={focus}>focus</button>
      </div>
    </div>
  );
};

export default UseRef;
