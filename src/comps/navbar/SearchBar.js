import { useContext } from "react";
import { FilterContext, ActiveContext } from "../../context/CreateContext";
import Styles from "./searchBar.module.css";
const SearchBar = () => {
  const { filter, setFilter } = useContext(FilterContext);
  const { setActive } = useContext(ActiveContext);

  const searchFilterHandler = (event) => {
    setActive((active) => {
      return {...active, searchActive:true, categoryActive: false}
    })
    const { value } = event.target;
    setFilter({ ...filter, search: value });
    // console.log(filter);
  };
  return <input type="text" onChange={searchFilterHandler} />;
};

export default SearchBar;
