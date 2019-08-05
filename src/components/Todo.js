import React, { Component } from "react";
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

//  class Todo extends Component {
//   constructor() {
//     super();
//     this.state = {
//       text: "",
//       todoList: []
//     };
//   }
//   onChange = e => {
//     this.setState({
//       text: e.target.value
//     });
//   };

//   onKeyDown = e => {
//     e.keyCode === 13 && this.addTodo();
//   };

//   addTodo = e => {
//     e.preventDefault();
//     let todolist = this.state.todoList;
//     let text = this.state.text;
//     let id = this.state.todoList.length + 1;
//     todolist.push({ text: text, completed: false, id: id });
//     this.setState({
//       todoList: todolist,
//       text: ""
//     });
//   };

//   removeTodo = index => {
//     let todolist = this.state.todoList;
//     todolist.splice(index, 1);
//     this.setState({
//       todolist: todolist
//     });
//   };

//   completeTodo = index => {
//     this.setState(preState => {
//       const todolist = preState.todoList;
//       todolist[index].completed = !todolist[index].completed;
//       return {
//         todoList: todolist
//       };
//     });
//   };

//   render() {
//     return (
//       <div
//         className={styles.todo}
//         style={{
//           transform: this.props.showTodo
//             ? "translateX(0%)"
//             : "translateX(-100%)"
//         }}
//       >
//         <div
//           className={styles.container}
//           style={{
//             marginLeft: this.props.showTodo ? "160px" : "25px",
//             marginRight: this.props.showTodo ? "40px" : "25px"
//           }}
//         >
//           <div className={styles.panel}>
//             <h1>待辦清單</h1>
//             <div className={styles.status_panel}>
//               <button onClick={this.props.changeFilterActive}>未完成</button>
//               <button onClick={this.props.changeFilterComplete}>已完成</button>
//             </div>
//           </div>
//           <form>
//             <input
//               type="text"
//               placeholder="新增待辦事項"
//               value={this.state.text}
//               onChange={this.onChange}
//               onKeyDown={e => this.onKeyDown}
//             />
//             <button onClick={this.addTodo}>+</button>
//           </form>
//           <TodoList
//             todolist={this.state.todoList}
//             removeTodo={this.removeTodo}
//             completeTodo={this.completeTodo}
//             currentFilter={this.props.currentFilter}
//           />
//         </div>
//       </div>
//     );
//   }
// }

export default connect()(Todo);
