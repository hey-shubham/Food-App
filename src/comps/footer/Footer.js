import { useState } from "react";

import Styles from './footer.module.css';

const Footer = () => {
  const date = new Date();
  const timer = date.toLocaleTimeString();
  const [flag, setFlag] = useState(true);
  setInterval(() => {
    setFlag(!flag);
  }, 1000);
  return (
    <div className={Styles.footer}>
      <span>All Rights Reserved.</span>
      <span>{timer}</span>
    </div>
  );
};

export default Footer;
