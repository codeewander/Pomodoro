import React, { Component } from "react";
import styles from "../styles/TodoList.module.scss";
import remove from "../images/icon-cancel.svg";
import { useSelector, useDispatch } from "react-redux";
import { completeTodo } from "../redux/actions/actions";

const TodoList = () => {
  const todos = useSelector(state => state.todoList);
  const dispatch = useDispatch();

  return (
    <div className={styles.todolist}>
      <ul>
        {todos.map(todo => (
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
                  onClick={() => this.props.removeTodo(todo.id)}
                />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

// class TodoList extends Component {
//   constructor() {
//     super();
//     this.state = {};
//   }

//   render() {
//     const { currentFilter } = this.props;
//     const filtered = this.props.todolist.filter(todo => {
//       if (currentFilter === "all") {
//         return todo;
//       } else if (currentFilter === "active") {
//         return todo.completed === false;
//       }
//       return todo.completed;
//     });
//     const listItem = filtered.map((todo, index) => (
//       <li
//         key={todo.id}
//         className={todo.completed ? styles.completed : styles.undo}
//       >
//         <span
//           style={{ textDecoration: todo.completed ? "line-through" : "none" }}
//         >
//           {todo.text}
//         </span>
//         <div className={styles.buttons}>
//           <button
//             className={styles.checked}
//             onClick={() => this.props.completeTodo(index)}
//           >
//             V
//           </button>
//           <button>
//             <img
//               src={remove}
//               alt="remove"
//               onClick={() => this.props.removeTodo(index)}
//             />
//           </button>
//         </div>
//       </li>
//     ));
//     return (
//       <div className={styles.todolist}>
//         <ul>{listItem}</ul>
//       </div>
//     );
//   }
// }

export default TodoList;
