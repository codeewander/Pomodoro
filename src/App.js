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
      timeText: "",
      timerOn: false,
      timerStart: false
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

  startTimer = () => {
    console.log(this.state.time);
    this.setState({
      timerOn: true,
      timerStart: true,
      time: this.state.time
    });
    this.timer = setInterval(() => {
      const newTime = this.state.time - 1;
      console.log(newTime);
      if (newTime >= 0) {
        this.setState({
          time: newTime
        });
        this.showRemainTime(this.state.time);
      } else {
        clearInterval(this.timer);
        this.playSound();
        this.setState({ timerOn: false, timerStart: false });
      }
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({
      timerOn: false
    });
  };

  resetTimer = mode => {
    console.log(mode);
    clearInterval(this.timer);
    if (mode === "work") {
      this.setState(
        {
          time: 1500,
          timerOn: false,
          timerStart: false
        },
        () => this.showRemainTime(1500)
      );
    } else {
      this.setState(
        {
          time: 300,
          timerOn: false,
          timerStart: false
        },
        () => this.showRemainTime(300)
      );
    }
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
      () => this.resetTimer(this.state.mode)
    );
    this.showTodoList(presentMode);
  };

  changeRestMode = e => {
    let presentMode = e.target.value;
    this.setState(
      prevState => ({
        mode: "rest",
        time: 300
      }),
      () => this.resetTimer(this.state.mode)
    );
    this.showTodoList(presentMode);
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
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          resetTimer={this.resetTimer}
          timerOn={this.state.timerOn}
          timerStart={this.state.timerStart}
        />
      </div>
    );
  }
}

export default App;
