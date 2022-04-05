import { useContext } from "react";
import Styles from "./cartOpen.module.css";
import {
  CtrContext,
  ShowContext,
  ItemsContext,
} from "../../context/CreateContext";
const CartOpen = () => {
  const { setCartCtr } = useContext(CtrContext);
  const { setShow } = useContext(ShowContext);
  const { addedItems, setAddedItems } = useContext(ItemsContext);
  console.log(addedItems);

  const deleteItemHandler = (id) => {
    const remainItems = addedItems.filter((item) => item.id !== id);
    setAddedItems(remainItems);
    setCartCtr((cartCtr) => cartCtr - 1);
  };
  return (
    <div className={Styles["cart-open"]}>
      <span
        className={Styles.cross}
        onClick={() =>
          setShow((show) => {
            return { ...show, cartShow: !show.cartShow };
          })
        }
      >
        X
      </span>
      {addedItems.map((item) => {
        return (
          <div className={Styles.item} key={item.id}>
            <div className={Styles["item-name"]}>{item.name}</div>
            <div className={Styles["item-image"]}>
              <img src={item.image} alt="item-img" />
            </div>
            <div className={Styles["item-price"]}>{item.price}</div>
            <span
              className={Styles["small-cross"]}
              onClick={() => deleteItemHandler(item.id)}
            >
              x
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default CartOpen;
