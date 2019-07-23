import React, { Component } from "react";
import bell from "../images/icon-bell.svg";
import play from "../images/icon-play--orange.svg";
import deleted from "../images/icon-delete.svg";
import tomato from "../images/tomato--orange.svg";
import pause from '../images/icon-pause--orange.svg';
import styles from "../styles/Main.module.scss";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      currentDate: "",
      currentDay: "",
      currentTime: "",
      isPlaying: false,
      remindTime: 1500,
      timerMinutes:'',
      timerSeconds:''
    };
  }
  componentDidMount() {
    setInterval(() => this.updateCurrentDate(), 1000);
  }

  updateCurrentDate() {
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
  }

  switchTimer =()=>{
    this.setState(prevState =>{
      const timerStatus = !prevState.isPlaying;
      return {
        isPlaying:timerStatus
      }
    })
    console.log(this.state.isPlaying)
  }

  render() {
    const { currentDate, currentDay, currentTime } = this.state;
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
            <div className={styles.count}>25:00</div>
            <div className={styles.controller}>
              <div className={styles.bell}>
                <img src={bell} alt="bell" />
              </div>
              <div className={styles.play} onClick={this.switchTimer}>
                {
                  this.state.isPlaying? <img src={pause} alt="pause" />: <img src={play} alt="play"/>
                }
                
              </div>
              <div className={styles.delete}>
                <img src={deleted} alt="delete" />
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
