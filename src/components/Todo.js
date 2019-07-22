import React from "react";
import styles from "../styles/Todo.module.scss";

const Todo = props => {
  return (
    <div
      className={styles.todo}
      style={{
        transform: props.showTodo ? "translateX(0%)" : "translateX(-100%)"
      }}
    >
      <div
        className={styles.container}
        style={{
          marginLeft: props.showTodo ? "160px" : "25px",
          marginRight: props.showTodo ? "40px" : "25px"
        }}
      >
        <div className={styles.panel}>
          <h1>待辦清單</h1>
          <div className={styles.status_panel}>
            <button>未完成</button>
            <button>已完成</button>
          </div>
        </div>
        <form>
          <input type="text" placeholder="新增待辦事項" />
          <button>+</button>
        </form>
      </div>
    </div>
  );
};

export default Todo;
