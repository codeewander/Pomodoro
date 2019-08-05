import React from "react";
import styles from "../styles/Navbar.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { toggleRestMode, toggleWorkMode } from "../redux/actions/actions";

const Navbar = props => {
  // const mode = useSelector(state => state.mode.mode);
  // const showTodo = useSelector(state => state.mode.showTodo);
  const dispatch = useDispatch();

  return (
    <div className={styles.nav}>
      <button
        className={styles.green}
        value="rest"
        onClick={() => dispatch(toggleRestMode())}
      />
      <button
        onClick={() => dispatch(toggleWorkMode())}
        value="work"
        className={styles.orange}
      />
    </div>
  );
};

export default Navbar;
