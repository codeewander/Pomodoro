import React from "react";
import analysis from "../images/icon-analysis.svg";
import list from "../images/icon-list.svg";
import styles from "../styles/Navbar.module.scss";

const Navbar = props => {
  return (
    <div className={styles.nav}>
      <button>
        <img src={analysis} alt="analysis" />
      </button>
      <button onClick={props.clickTodoButton}>
        <img src={list} alt="bell" />
      </button>
    </div>
  );
};

export default Navbar;
