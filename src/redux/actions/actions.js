export function toggleWorkMode() {
  return {
    type: "TOGGLE_WORKMODE",
    payload: "work"
  };
}

export function toggleRestMode() {
  return {
    type: "TOGGLE_RESTMODE",
    payload: "rest"
  };
}

export function showTodo() {
  return {
    type: "SHOW_TODO"
  };
}

let nextTodoId = 0;
export const addTodo = text => {
  return {
    type: "ADD_TODO",
    id: nextTodoId++,
    text
  };
};

export const completeTodo = id => {
  return {
    type: "COMPLETE_TODO",
    id
  };
};

export const removeTodo = id => {
  return {
    type: "REMOVE_TODO",
    id
  };
};

export const filterCompletedTodo = () => {
  return {
    type: "FILTER_COMPLETED_TODO"
  };
};

export const filterActiveTodo = () => {
  return {
    type: "FILTER_ACTIVE_TODO"
  };
};

export const filterAllTodo = () => {
  return {
    type: "FILTER_ALL_TODO"
  };
};

export const setVisibilityFilter = filter => {
  return {
    type: "SET_VISIBILITY_FILTER",
    filter
  };
};

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const setCurrentTime = () => {
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
  const currentWeekday = weekdayArray[day];
  return {
    type: "SET_CURRENT_TIME",
    currentWeekday,
    currentDate,
    currentTime
  };
};

export const updateTime = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(setCurrentTime());
    }, 60000);
  };
};

export const setTimer = () => {
  return {
    type: "SET_TIMER"
  };
};

export const resetTimer = () => {
  return {
    type: "RESET_TIMER"
  };
};

export const tick = () => {
  return {
    type: "TICK"
  };
};

export const startCounter = () => {
  return dispatch => {
    setInterval(() => dispatch(tick()), 1000);
  };
};

export const countdown = time => {
  return {
    type: "COUNT_DOWN",
    time
  };
};

export const countdownTimer = time => {
  return dispatch => {
    setTimeout(() => {
      dispatch(countdown(1));
    }, 1000);
  };
};
