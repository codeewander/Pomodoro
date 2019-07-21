import React from "react";
import Main from "./components/main";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Todo />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
