import React from "react";

const Todo = () => {
  return (
    <div>
      <h1>待辦清單</h1>
      <div>
        <bottom>未完成</bottom>
        <bottom>已完成</bottom>
      </div>
      <input type="text" placeholder="新增待辦事項" />
    </div>
  );
};

export default Todo;
