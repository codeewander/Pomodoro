import React, { Component } from "react";
import bell from "../images/icon-bell.svg";
import play from "../images/icon-play--orange.svg";
import deleted from "../images/icon-delete.svg";
import tomato from "../images/tomato--orange.svg";
import pause from "../images/icon-pause--orange.svg";
import styles from "../styles/Main.module.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: "",
      currentDay: "",
      currentTime: "",
      timerOn: false,
      workTime: 1500,
      timerStart: false,
      timeText: "",
      soundOn: false
    };
  }
  componentDidMount() {
    setInterval(() => this.updateCurrentDate(), 1000);
    this.showRemainTime(this.state.workTime);
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerStart: true,
      workTime: this.state.workTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.workTime - 1;
      if (newTime >= 0) {
        this.setState({
          workTime: newTime
        });
        this.showRemainTime(this.state.workTime);
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

  resetTimer = () => {
    clearInterval(this.timer);
    this.setState(prevState => {
      return {
        workTime: 1500,
        timerOn: false,
        timerStart: false
      };
    });
    this.showRemainTime(this.state.workTime);
  };

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

  updateCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    let strDate = date.getDate();
    const day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();

    if (month >= 1 && month <= 9) {
      month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
      strDate = "0" + strDate;
    }
    if (minute >= 0 && minute <= 9) {
      minute = "0" + minute;
    }
    const currentDate = year + "." + month + "." + strDate;
    const currentTime = hour + ":" + minute;
    var weekdayArray = [
      "星期日",
      "星期一",
      "星期二",
      "星期三",
      "星期四",
      "星期五",
      "星期六"
    ];
    const weekday = weekdayArray[day];

    this.setState(state => ({
      ...state,
      currentDate: currentDate,
      currentDay: weekday,
      currentTime: currentTime
    }));
  };

  handleSound = () => {
    this.setState(prevState => {
      const toggleSound = !prevState.soundOn;
      return { soundOn: toggleSound };
    });
  };

  playSound = () => {
    console.log(this.state.soundOn);
    const audioPlayer = document.getElementById("player");
    if (this.state.soundOn && this.state.workTime === 0) {
      audioPlayer.play();
    } else {
      audioPlayer.pause();
    }
  };

  render() {
    const { currentDate, currentDay, currentTime, timeText } = this.state;
    const { workTime, timerStart, timerOn } = this.state;
    const { showTodo } = this.props;

    return (
      <div
        className={styles.main}
        style={{
          transform: showTodo ? "translateX(50%)" : "translateX(0%)"
        }}
      >
        <div className={styles.date}>
          <p>
            <span>{currentDate}</span>
            <span>{currentDay}</span>
            <span>{currentTime}</span>
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.count_container}>
            <div className={styles.count}>
              <span
                style={{ color: this.state.workTime === 0 ? "#f08448" : null }}
              >
                {timeText}
              </span>
            </div>
            <div className={styles.controller}>
              <audio id="player">
                <source
                  src="http://www.gravomaster.com/alarm/sounds/schoolbell2.wav"
                  type="audio/mpeg"
                />
              </audio>
              <div
                className={styles.bell}
                onClick={this.handleSound}
                style={{
                  border: this.state.soundOn
                    ? "2px solid #f08448"
                    : "2px solid #e8e8e8",
                  backgroundColor: this.state.soundOn ? "#f08448" : null
                }}
              >
                <img src={bell} alt="bell" />
              </div>
              <div className={styles.play}>
                {timerOn === false &&
                  (timerStart === false || workTime > 0) && (
                    <img src={play} alt="play" onClick={this.startTimer} />
                  )}
                {timerOn === true && timerStart === true && (
                  <img src={pause} alt="pause" onClick={this.stopTimer} />
                )}
              </div>
              <div className={styles.delete} onClick={this.resetTimer}>
                <img src={deleted} alt="rest" />
              </div>
            </div>
          </div>
          <div className={styles.todo}>
            <h2>蕃茄鐘UI介面</h2>
            <ul>
              <li>學習Javascript</li>
              <li>學習網頁切版</li>
              <li>設計蕃茄鐘UI介面</li>
            </ul>
          </div>
        </div>
        <img className={styles.tomato} src={tomato} alt="tomato" />
      </div>
    );
  }
}

export default Main;
