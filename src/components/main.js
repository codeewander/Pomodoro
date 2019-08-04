import React, { Component } from "react";
import bell from "../images/icon-bell.svg";
import play from "../images/icon-play--orange.svg";
import deleted from "../images/icon-delete.svg";
import orangeTomato from "../images/tomato--orange.svg";
import greenTomato from "../images/tomato--green.svg";
import pause from "../images/icon-pause--orange.svg";
import styles from "../styles/Main.module.scss";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: "",
      currentDay: "",
      currentTime: "",
      soundOn: false
    };
  }
  componentDidMount() {
    setInterval(() => this.updateCurrentDate(), 1000);
    this.props.showRemainTime(this.props.time);
  }

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
    const { currentDate, currentDay, currentTime } = this.state;
    const {
      showTodo,
      time,
      timeText,
      timerStart,
      timerOn,
      stopTimer,
      startTimer,
      resetTimer
    } = this.props;

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
                {timerOn === false && (timerStart === false || time > 0) && (
                  <img src={play} alt="play" onClick={startTimer} />
                )}
                {timerOn === true && timerStart === true && (
                  <img src={pause} alt="pause" onClick={stopTimer} />
                )}
              </div>
              <div className={styles.delete} onClick={resetTimer}>
                <img src={deleted} alt="rest" />
              </div>
            </div>
          </div>
          {this.props.mode === "work" && (
            <div className={styles.todo}>
              <h3>專心，</h3>
              <p>一步一步完成</p>
            </div>
          )}
          {this.props.mode === "rest" && (
            <div className={styles.resttext}>
              <h3>休息，</h3>
              <p>是為了走更遠</p>
            </div>
          )}
        </div>
        {this.props.mode === "work" && (
          <img
            className={styles.tomato}
            src={orangeTomato}
            alt="orangeTomato"
          />
        )}
        {this.props.mode === "rest" && (
          <img className={styles.tomato} src={greenTomato} alt="greenTomato" />
        )}
      </div>
    );
  }
}

export default Main;
