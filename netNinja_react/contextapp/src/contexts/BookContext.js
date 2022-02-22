import React, { useState, createContext } from "react";

// ****DO NOT FORGET
// always export context
export const BookContext = createContext();

// do not forget to pass 'props' we need to access the children
const BookContextProvider = (props) => {
  //do forget to add 'props' here

  // ****************
  // use state always return array so use brackets [] not curly braces {}
  const [books, setBooks] = useState([
    { title: "theory of relativity", id: 1 },
    { title: "theory of quantum physics", id: 2 },
    { title: "theory of everything", id: 3 },
    { title: "string theory", id: 4 },
  ]);

  console.log("from bookContext.js books : ", books);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
