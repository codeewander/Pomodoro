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
      mode: "work",
      time: 1500,
      timeText: ""
    };
  }

  showRemainTime = time => {
    let minute = parseInt(time / 60);
    if (minute < 10) {
      minute = `0${minute}`;
    }
    let second = time % 60;
    if (second < 10) {
      second = `0${second}`;
    }
    this.setState({
      timeText: `${minute}:${second}`
    });
  };

  showTodoList = mode => {
    if (mode === this.state.mode) {
      this.setState(state => ({
        showTodo: !state.showTodo
      }));
    }
  };

  changeWorkMode = e => {
    let presentMode = e.target.value;
    this.setState(
      prevState => ({
        mode: "work",
        time: 1500
      }),
      this.showTodoList(presentMode),
      this.showRemainTime(1500)
    );
  };

  changeRestMode = e => {
    let presentMode = e.target.value;
    this.setState(
      prevState => ({
        mode: "rest",
        time: 300
      }),
      this.showTodoList(presentMode),
      this.showRemainTime(300)
    );
  };

  render() {
    const { showTodo, mode, time } = this.state;

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
        <Main
          showTodo={showTodo}
          mode={mode}
          time={time}
          showRemainTime={this.showRemainTime}
          timeText={this.state.timeText}
        />
      </div>
    );
  }
}

export default App;
