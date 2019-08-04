import React from "react";
import analysis from "../images/icon-analysis.svg";
import list from "../images/icon-list.svg";
import styles from "../styles/Navbar.module.scss";

const Navbar = props => {
  return (
    <div className={styles.nav}>
      <button
        className={styles.green}
        value="rest"
        onClick={props.changeRestMode}
      >
        <div />
      </button>
      <button
        onClick={props.changeWorkMode}
        value="work"
        className={styles.orange}
      />
    </div>
  );
};

export default Navbar;
