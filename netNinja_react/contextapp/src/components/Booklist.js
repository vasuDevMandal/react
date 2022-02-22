import React, { Component, useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

// they both class and function both provide same functionality

// using class component---------------------------------------

// class Booklist extends Component {
//   static contextType = ThemeContext;
//   render() {
//     const { isLightTheme, light, dark } = this.context;
//     const theme = isLightTheme ? light : dark;
//     return (
//       <div
//         className="book-list"
//         style={{ background: theme.bg, color: theme.syntax }}
//       >
//         <ul>
//           <li style={{ background: theme.ui }}>the way of kings</li>
//           <li style={{ background: theme.ui }}>the name of the wind</li>
//           <li style={{ background: theme.ui }}>the final empire</li>
//         </ul>
//       </div>
//     );
//   }
// }

// using functional component------------------------------------
// const Booklist = () => {
//   const { isLightTheme, light, dark } = useContext(ThemeContext);
//   const theme = isLightTheme ? light : dark;
//   return (
//     <div
//       className="book-list"
//       style={{ background: theme.bg, color: theme.syntax }}
//     >
//       <ul>
//         <li style={{ background: theme.ui }}>the way of kings</li>
//         <li style={{ background: theme.ui }}>the name of the wind</li>
//         <li style={{ background: theme.ui }}>the final empire</li>
//       </ul>
//     </div>
//   );
// };

// function with useContext Hooks-----------------------

// using data from the context instead of hard coding directly as in previous approach

const Booklist = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        {console.log("to bookList.js books : ", books)}
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Booklist;
