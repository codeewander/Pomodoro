import React, { Component } from "react";
import Main from "./components/main";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import styles from "./App.module.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showTodo: false
    };
  }
  showTodoList = () => {
    this.setState(state => ({
      showTodo: !state.showTodo
    }));
  };

  clickTodoButton = () => {
    this.showTodoList();
  };

  render() {
    const showTodo = this.state.showTodo;

    return (
      <div className={styles.app}>
        <Navbar clickTodoButton={this.clickTodoButton} showTodo={showTodo} />
        <Todo showTodo={showTodo} />
        <Main showTodo={showTodo} />
      </div>
    );
  }
}

export default App;
