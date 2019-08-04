import React, { Component } from "react";
import TodoList from "./TodoList";
import styles from "../styles/Todo.module.scss";

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      todoList: []
    };
  }
  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  onKeyDown = e => {
    e.keyCode === 13 && this.addTodo();
  };

  addTodo = e => {
    e.preventDefault();
    let todolist = this.state.todoList;
    let text = this.state.text;
    let id = this.state.todoList.length + 1;
    todolist.push({ text: text, completed: false, id: id });
    this.setState({
      todoList: todolist,
      text: ""
    });
  };

  removeTodo = index => {
    let todolist = this.state.todoList;
    todolist.splice(index, 1);
    this.setState({
      todolist: todolist
    });
  };

  completeTodo = index => {
    this.setState(preState => {
      const todolist = preState.todoList;
      todolist[index].completed = !todolist[index].completed;
      return {
        todoList: todolist
      };
    });
  };

  render() {
    return (
      <div
        className={styles.todo}
        style={{
          transform: this.props.showTodo
            ? "translateX(0%)"
            : "translateX(-100%)"
        }}
      >
        <div
          className={styles.container}
          style={{
            marginLeft: this.props.showTodo ? "160px" : "25px",
            marginRight: this.props.showTodo ? "40px" : "25px"
          }}
        >
          <div className={styles.panel}>
            <h1>待辦清單</h1>
            <div className={styles.status_panel}>
              <button onClick={this.props.changeFilterActive}>未完成</button>
              <button onClick={this.props.changeFilterComplete}>已完成</button>
            </div>
          </div>
          <form>
            <input
              type="text"
              placeholder="新增待辦事項"
              value={this.state.text}
              onChange={this.onChange}
              onKeyDown={e => this.onKeyDown}
            />
            <button onClick={this.addTodo}>+</button>
          </form>
          <TodoList
            todolist={this.state.todoList}
            removeTodo={this.removeTodo}
            completeTodo={this.completeTodo}
            currentFilter={this.props.currentFilter}
          />
        </div>
      </div>
    );
  }
}

export default Todo;
