import { useContext } from "react";
import Styles from "./body.module.css";

import { dataArr, productArr } from "../../data";
import {
  ActiveContext,
  FilterContext,
  ShowContext,
} from "../../context/CreateContext";
import Product from "../product/Product.js";
import CartOpen from "../cartOpen/CartOpen";

const Body = () => {
  const { show } = useContext(ShowContext);
  const { filter } = useContext(FilterContext);
  const { active } = useContext(ActiveContext);
  const searchFilteredArr = productArr.filter((product) => {
    console.log(product);
    return product.name.toLowerCase().includes(filter.search.toLowerCase());
  });
  const categoryFilterArr = [];
  dataArr
    .filter((data) => filter.category.includes(data.category.toLowerCase()))
    .forEach((data) =>
      data.restaurantList.forEach((product) => categoryFilterArr.push(product))
    );
  const filterArr = active.searchActive ? searchFilteredArr : categoryFilterArr;
  return (
    <div className={Styles.body}>
      {console.log(categoryFilterArr)}
      {filterArr.map((product) => (
        <Product
          key={product._id}
          name={product.name}
          types={product.food_types}
          image={product.img}
          ratings={product.ratings}
          price={product.price_for_two}
          deliveryTime={product.delivery_time}
        />
      ))}
      {show.cartShow && <CartOpen />}
    </div>
  );
};

export default Body;
