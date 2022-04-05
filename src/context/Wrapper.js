import { useState } from "react";
import {
  CtrContext,
  FilterContext,
  ItemsContext,
  ShowContext,
  ActiveContext,
} from "./CreateContext";

const Wrapper = ({ children }) => {
  const [cartCtr, setCartCtr] = useState(0);
  const ctrObj = {
    cartCtr,
    setCartCtr,
  };
  const [filter, setFilter] = useState({
    search: "",
    category: [],
  });
  const filterObj = {
    filter,
    setFilter,
  };
  const [addedItems, setAddedItems] = useState([]);
  const itemsObj = {
    addedItems,
    setAddedItems,
  };
  const [show, setShow] = useState({
    cartShow: false,
  });
  const showObj = {
    show,
    setShow,
  };
  const [active, setActive] = useState({
    searchActive: false,
    categoryActive: false,
  });
  const activeObj = {
    active,
    setActive,
  };
  return (
    <CtrContext.Provider value={ctrObj}>
      <FilterContext.Provider value={filterObj}>
        <ItemsContext.Provider value={itemsObj}>
          <ShowContext.Provider value={showObj}>
            <ActiveContext.Provider value={activeObj}>
              {children}
            </ActiveContext.Provider>
          </ShowContext.Provider>
        </ItemsContext.Provider>
      </FilterContext.Provider>
    </CtrContext.Provider>
  );
};

export default Wrapper;
