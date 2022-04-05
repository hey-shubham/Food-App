import { useContext } from "react";
import Styles from "./product.module.css";

import { CtrContext, ItemsContext } from "../../context/CreateContext";
const Product = ({ name, types, image, ratings, price, deliveryTime }) => {
  const { setCartCtr } = useContext(CtrContext);
  const { addedItems, setAddedItems } = useContext(ItemsContext);
  let ctr =
    addedItems.length === 0 ? 0 : addedItems[addedItems.length - 1].id + 1;
  console.log(ctr);
  const addToCartHandler = () => {
    setCartCtr((cartCtr) => cartCtr + 1);
    const item = {
      name: name,
      image: image,
      price: price,
      id: ctr,
    };
    setAddedItems([...addedItems, item]);
  };
  return (
    <div className={Styles.product}>
      <div className={Styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={Styles.description}>
        <h3 className={Styles.name}>{name}</h3>
        <p>{types}</p>
        <div className={Styles["ratings-time-price"]}>
          <span className={Styles.ratings}>
            <i className="fa fa-star"></i>
            <em>{ratings}</em>
          </span>
          <span style={{ fontSize: "14px" }}>{deliveryTime}</span>
          <h3 className={Styles.price}>Rs. {price}</h3>
        </div>
        <button onClick={addToCartHandler}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
