import React, { Component } from "react";
import Main from "./components/main";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import styles from "./App.module.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showTodo: false,
      mode: "work"
    };
  }
  showTodoList = mode => {
    console.log(this.state.mode);
    console.log(mode);
    if (mode === this.state.mode) {
      this.setState(state => ({
        showTodo: !state.showTodo
      }));
    }
  };

  changeWorkMode = e => {
    let presentMode = e.target.value;
    console.log(presentMode);
    this.setState(
      prevState => ({
        mode: "work"
      }),
      this.showTodoList(presentMode)
    );
  };

  changeRestMode = e => {
    let presentMode = e.target.value;
    console.log(presentMode);
    this.setState(
      prevState => ({
        mode: "rest"
      }),
      this.showTodoList(presentMode)
    );
  };

  render() {
    const showTodo = this.state.showTodo;

    return (
      <div
        className={styles.app}
        style={{ overflow: this.state.showTodo ? "hidden" : null }}
      >
        <Navbar
          changeWorkMode={this.changeWorkMode}
          showTodo={showTodo}
          changeRestMode={this.changeRestMode}
        />
        <Todo showTodo={showTodo} />
        <Main showTodo={showTodo} />
      </div>
    );
  }
}

export default App;
