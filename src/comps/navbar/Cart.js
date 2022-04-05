import { useContext } from "react";
import Styles from "./cart.module.css";
import { CtrContext, ShowContext } from "../../context/CreateContext";
const Cart = () => {
  const { cartCtr } = useContext(CtrContext);
  const { setShow } = useContext(ShowContext);
  return (
    <div
      className={Styles.cart}
      onClick={() => {
        setShow((show) => {
          return { ...show, cartShow: !show.cartShow };
        });
      }}
    >
      <i className="fa fa-cart-arrow-down"></i>
      <div className={Styles.circle}>{cartCtr}</div>
    </div>
  );
};

export default Cart;
