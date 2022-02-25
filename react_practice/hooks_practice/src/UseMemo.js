import React, { useState, useMemo } from "react";

/**
 * The React useMemo Hook returns a memoized value.
 *
 * Think of memoization as caching a value so that it does not need to be recalculated.
 * The useMemo Hook only runs when one of its dependencies update.
 *
 * The useMemo and useCallback Hooks are similar.
 * The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.
 *
 * The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running.
 * In this example, we have an expensive function that runs on every render.
 */
const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  //previously- without useMemo()
  //   const doubleNumber = slowFunction(number);
  //   using useMemo() - we watch number variable and only run slowfunction() when number variable changes
  const doubleNumber = useMemo(() => slowFunction(number), [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <div className="use-memo-hook">
      <h1>useMemo hook</h1>
      <label htmlFor="entry">number : </label>
      <input
        type="number"
        name="entry"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button
        onClick={() => {
          setDark((prev) => !prev);
        }}
      >
        Change theme
      </button>
      <div style={themeStyles}>double number : {doubleNumber}</div>
    </div>
  );
};

const slowFunction = (num) => {
  console.log("calling slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
};

export default UseMemo;
