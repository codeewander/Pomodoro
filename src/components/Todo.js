import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import styles from "../styles/Todo.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  filterActiveTodo,
  filterCompletedTodo,
  filterAllTodo
} from "../redux/actions/actions";

const Todo = () => {
  const showTodo = useSelector(state => state.showTodo);
  const dispatch = useDispatch();
  let input;
  return (
    <div
      className={styles.todo}
      style={{
        transform: showTodo ? "translateX(0%)" : "translateX(-100%)"
      }}
    >
      <div
        className={styles.container}
        style={{
          marginLeft: showTodo ? "160px" : "25px",
          marginRight: showTodo ? "40px" : "25px"
        }}
      >
        <div className={styles.panel}>
          <h1>待辦清單</h1>
          <div className={styles.status_panel}>
            <button onClick={() => dispatch(filterActiveTodo())}>未完成</button>
            <button onClick={() => dispatch(filterCompletedTodo())}>
              已完成
            </button>
            <button onClick={() => dispatch(filterAllTodo())}>全部</button>
          </div>
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            } else {
              dispatch(addTodo(input.value));
              input.value = "";
            }
          }}
        >
          <input
            type="text"
            placeholder="新增待辦事項"
            ref={node => (input = node)}
          />
          <button type="submit">+</button>
        </form>
        <TodoList />
      </div>
    </div>
  );
};

export default connect()(Todo);
