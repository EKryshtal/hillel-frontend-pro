import React from "react";
import "./style.css";

const Main = () => {
  const products = ["Graphic card", "Processor", "Motherboard", "RAM", "SSD"];
  const productsItems = products.map((product) => <li>{product}</li>);

  const ProductsList = <ul className="shopping-list">{productsItems}</ul>;

  const Title = <h3 className="title">All items</h3>;
  const Price = <p className="price">500000₴</p>;

  return (
    <div className="main-wrapper">
      {Title}
      {ProductsList}
      {Price}
    </div>
  );
};

export default Main;
