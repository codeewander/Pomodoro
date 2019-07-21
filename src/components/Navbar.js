import React from "react";
import analysis from "../images/icon-analysis.svg";
import list from "../images/icon-list.svg";
import styles from "../styles/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <img src={analysis} alt="analysis" />
      <img src={list} alt="bell" />
    </div>
  );
};

export default Navbar;
