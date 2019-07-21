import React from "react";
import bell from "../images/icon-bell.svg";
import play from "../images/icon-play--orange.svg";
import deleted from "../images/icon-delete.svg";
import tomato from "../images/tomato--orange.svg";
import styles from "../styles/Main.module.scss";

const Main = () => {
  return (
    <div className={styles.main}>
      <div className={styles.date}>
        <p>
          <span>2019.07.13</span>
          <span>星期六13:38</span>
        </p>
      </div>
      <div className={styles.content}>
        <div className={styles.count_container}>
          <div className={styles.count}>25:00</div>
          <div className={styles.controller}>
            <div className={styles.bell}>
              <img src={bell} alt="bell" />
            </div>
            <div className={styles.play}>
              <img src={play} alt="play" />
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
};

export default Main;
