import { useContext, useEffect, useState } from "react";
import Styles from "./category.module.css";

import { dataArr, productArr } from "../../data";
import { ActiveContext, FilterContext } from "../../context/CreateContext";
const Category = () => {
  const { setFilter } = useContext(FilterContext);
  const { setActive } = useContext(ActiveContext);

  const [check, setCheck] = useState({
    popular: false,
    nearby: false,
    express: false,
    gourmet: false,
  });

  // to check if all four false again
  useEffect(() => {
    console.log(Object.values(check));
    const boolnum = Object.values(check).reduce((acc, curr) => {
      if (curr) {
        acc++;
      }
      return acc;
    }, 0);
    if (boolnum === 0) {
      return setFilter((filer) => {
        return {
          ...filer,
          category: dataArr.map((data) => data.category),
        };
      });
    }
  }, [check]);

  const categoryFilterHandler = (category) => {
    setActive((active) => {
      return { ...active, categoryActive: true, searchActive: false};
    });
    setFilter((filter) => {
      console.log([...filter.category]);
      if (check[category]) {
        return {
          ...filter,
          category: [...filter.category.filter((ele) => ele !== category)],
        };
      }
      return {
        ...filter,
        category: filter.category.includes(category)
          ? filter.category.filter((ele) => ele === category)
          : [...filter.category, category],
      };
    });
    if (category === "popular") {
      setCheck((check) => {
        return { ...check, popular: !check.popular };
      });
    } else if (category === "nearby") {
      setCheck((check) => {
        return { ...check, nearby: !check.nearby };
      });
    } else if (category === "express") {
      setCheck((check) => {
        return { ...check, express: !check.express };
      });
    } else {
      setCheck((check) => {
        return { ...check, gourmet: !check.gourmet };
      });
    }
  };
  return (
    <span className={Styles.category}>
      <div className={Styles.type}>
        <p onClick={() => categoryFilterHandler("gourmet")}>
          <i className={!check.gourmet && "fa fa-square"}></i>
          <i className={check.gourmet && `fa fa-check`}></i>
          <span>Gourmet</span>
        </p>
        <p onClick={() => categoryFilterHandler("popular")}>
          <i className={!check.popular && "fa fa-square"}></i>
          <i className={check.popular && `fa fa-check`}></i>
          <span>Popular</span>
        </p>
        <p onClick={() => categoryFilterHandler("nearby")}>
          <i className={!check.nearby && "fa fa-square"}></i>
          <i className={check.nearby && `fa fa-check`}></i>
          <span>Nearby</span>
        </p>
        <p onClick={() => categoryFilterHandler("express")}>
          <i className={!check.express && "fa fa-square"}></i>
          <i className={check.express && `fa fa-check`}></i>
          <span>Express</span>
        </p>
      </div>
    </span>
  );
};

export default Category;
