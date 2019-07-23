import React, { Component } from "react";
import styles from "../styles/TodoList.module.scss";
import edit from "../images/icon-edit.svg";
import remove from "../images/icon-cancel.svg";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      currentFilter: "all"
    };
  }

  render() {
    
    const listItem = this.props.todolist.map((todo, index) => (
      <li
        key={todo.id}
        className={todo.completed ? styles.completed : styles.undo}
      >
        <span
          onClick={() => this.props.completeTodo(index)}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
        <div className={styles.buttons}>
          <button>
            <img src={edit} alt="edit" />
          </button>
          <button>
            <img
              src={remove}
              alt="remove"
              onClick={() => this.props.removeTodo(index)}
            />
          </button>
        </div>
      </li>
    ));
    return (
      <div className={styles.todolist}>
        <ul>{listItem}</ul>
      </div>
    );
  }
}

export default TodoList;
