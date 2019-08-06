import React from "react";
import styles from "../styles/TodoList.module.scss";
import remove from "../images/icon-cancel.svg";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo, removeTodo } from "../redux/actions/actions";

const TodoList = () => {
  const todos = useSelector(state => state.todoList);
  const filterMode = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const filtered = todos.filter(todo => {
    if (filterMode === "all") {
      return todo;
    } else if (filterMode === "active") {
      return todo.completed === false;
    }
    return todo.completed;
  });

  return (
    <div className={styles.todolist}>
      <ul>
        {filtered.map(todo => (
          <li
            key={todo.id}
            className={todo.completed ? styles.completed : styles.undo}
          >
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
            >
              {todo.text}
            </span>
            <div className={styles.buttons}>
              <button
                className={styles.checked}
                onClick={() => dispatch(completeTodo(todo.id))}
              >
                V
              </button>
              <button>
                <img
                  src={remove}
                  alt="remove"
                  onClick={() => dispatch(removeTodo(todo.id))}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
