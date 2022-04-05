import SearchBar from "./SearchBar";
import Cart from "./Cart";
import Styles from "./navbar.module.css";


const Navbar = () => {
  return (
    <div className={Styles.navbar}>
      <p className={Styles.logo}>Shubway</p>
      <div className={Styles.search}>
        <div className={Styles["search-bar"]}>
          <SearchBar />
        </div>
        <i className={`${Styles["search-logo"]} fa fa-search`}></i>
      </div>
      <Cart />
      <div className={Styles["sign-in"]}>Sign In</div>
    </div>
  );
};

export default Navbar;
