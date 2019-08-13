import React, { useEffect } from "react";
import { connect } from "react-redux";
import bell from "../images/icon-bell.svg";
import play from "../images/icon-play--orange.svg";
import deleted from "../images/icon-delete.svg";
import orangeTomato from "../images/tomato--orange.svg";
import greenTomato from "../images/tomato--green.svg";
import pause from "../images/icon-pause--orange.svg";
import styles from "../styles/Main.module.scss";
import {
  setCurrentTime,
  updateTime,
  startCounter,
  resetTimer,
  stopCounter,
  handleSound
} from "../redux/actions/actions";
// import { useSelector } from "react-redux";

const Main = ({
  timer,
  timerOn,
  timerStart,
  mode,
  currentDate,
  currentWeekday,
  currentTime,
  setCurrentTime,
  updateTime,
  startCounter,
  resetTimer,
  stopCounter,
  soundOn,
  handleSound
}) => {
  // const mode = useSelector(state => state.mode);
  // const time = useSelector(state => state.time);
  useEffect(() => {
    setCurrentTime();
    updateTime();
  });

  const timerText = () => {
    let time = timer;
    let minute = parseInt(time / 60);
    if (minute < 10) {
      minute = `0${minute}`;
    }
    let second = time % 60;
    if (second < 10) {
      second = `0${second}`;
    }
    let timeText = `${minute}:${second}`;
    return timeText;
  };
  return (
    <div className={styles.main}>
      <div className={styles.date}>
        <p>
          <span>{currentDate}</span>
          <span>{currentWeekday}</span>
          <span>{currentTime}</span>
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.count_container}>
          <div className={styles.count}>{timerText()}</div>
          <div className={styles.controller}>
            <audio id="player">
              <source
                src="http:www.gravomaster.com/alarm/sounds/schoolbell2.wav"
                type="audio/mpeg"
              />
            </audio>
            <img
              src={bell}
              alt="bell"
              className={styles.bell}
              onClick={handleSound}
              style={{
                border: soundOn ? "2px solid #f08448" : "2px solid #e8e8e8",
                backgroundColor: soundOn ? "#f08448" : null
              }}
            />
            {!timerOn && (!timerOn || timer > 0) && (
              <img
                src={play}
                alt="play"
                className={styles.play}
                onClick={startCounter}
              />
            )}
            {timerOn && timerStart && (
              <img
                src={pause}
                alt="pause"
                onClick={stopCounter}
                className={styles.play}
              />
            )}
            <img
              src={deleted}
              alt="reset"
              className={styles.delete}
              onClick={resetTimer}
            />
          </div>
        </div>
        {mode === "work" && (
          <div className={styles.todo}>
            <h3>專心，</h3>
            <p>一步一步完成</p>
          </div>
        )}
        {mode === "rest" && (
          <div className={styles.resttext}>
            <h3>休息，</h3>
            <p>是為了走更遠</p>
          </div>
        )}
      </div>
      {mode === "work" && (
        <img className={styles.tomato} src={orangeTomato} alt="orangeTomato" />
      )}
      {mode === "rest" && (
        <img className={styles.tomato} src={greenTomato} alt="greenTomato" />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    mode: state.mode,
    timer: state.timer,
    timerOn: state.timerOn,
    timerStart: state.timerStart,
    currentTime: state.currentTime,
    currentWeekday: state.currentWeekday,
    currentDate: state.currentDate,
    soundOn: state.soundOn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrentTime: () => {
      dispatch(setCurrentTime());
    },
    updateTime: () => {
      dispatch(updateTime());
    },
    startCounter: () => {
      dispatch(startCounter());
    },
    resetTimer: () => {
      dispatch(resetTimer());
    },
    stopCounter: () => {
      dispatch(stopCounter());
    },
    handleSound: () => {
      dispatch(handleSound());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
