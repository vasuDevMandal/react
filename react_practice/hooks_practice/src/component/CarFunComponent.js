import { CarContext } from "../context/CarContext";
import { BooksContext } from "../context/BooksContextFunc";
import React, { useContext, useState } from "react";

const CarFunComponent = () => {
  const { carBrand: brand, model, ownCar } = useContext(CarContext);
  const { books } = useContext(BooksContext);
  // console.log(this.context);
  // let [data, setData] = useState("");

  // data = ownCar ? carBrand : model;
  console.log(books);

  return (
    <div>
      <h3>Car Functional component</h3>
      <h2>
        data: {brand}
        {model}
        {ownCar}
      </h2>
      <h3>{books.map((book) => book.title)}</h3>
    </div>
  );
};

export default CarFunComponent;
