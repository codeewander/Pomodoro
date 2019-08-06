// import { combineReducers } from "redux";

// const allReducer = combineReducers({
//   mode: modeReducer,
//   counter: counterReducer,
//   todo: todoReducer
// });

const initialState = {
  mode: "work",
  showTodo: false,
  timer: 1500,
  todoList: [],
  timerOn: false,
  timerStart: false,
  filter: "all",
  currentWeekday: "",
  currentDate: "",
  currentTime: "",
  soundOn: false
};

const allReducer = (state = initialState, action) => {
  switch (action.type) {
    //模式切換
    case "TOGGLE_WORKMODE":
      if (state.mode === action.payload) {
        return Object.assign({}, state, {
          mode: "work",
          showTodo: !state.showTodo,
          timer: 1500
        });
      } else {
        return Object.assign({}, state, {
          mode: "work",
          showTodo: state.showTodo,
          timer: 1500
        });
      }
    case "TOGGLE_RESTMODE":
      if (state.mode === action.payload) {
        return Object.assign({}, state, {
          mode: "rest",
          showTodo: !state.showTodo,
          timer: 300
        });
      } else {
        return Object.assign({}, state, {
          mode: "rest",
          showTodo: state.showTodo,
          timer: 300
        });
      }
    //todo操作
    case "ADD_TODO":
      return Object.assign({}, state, {
        todoList: [
          ...state.todoList,
          {
            id: action.id,
            text: action.text,
            completed: false
          }
        ]
      });
    case "COMPLETE_TODO":
      return Object.assign({}, state, {
        todoList: [
          ...state.todoList.map(todo =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo
          )
        ]
      });
    case "REMOVE_TODO":
      return Object.assign({}, state, {
        todoList: [...state.todoList.filter(todo => todo.id !== action.id)]
      });
    case "FILTER_ACTIVE_TODO":
      return Object.assign({}, state, {
        filter: "active"
      });
    case "FILTER_ALL_TODO":
      return Object.assign({}, state, {
        filter: "all"
      });
    case "FILTER_COMPLETED_TODO":
      return Object.assign({}, state, {
        filter: "completed"
      });
    case "SET_VISIBILITY_FILTER":
      return Object.assign({}, state, {
        todoList: [
          ...state,
          {
            filter: action.filter
          }
        ]
      });
    //時間操作
    case "SET_CURRENT_TIME":
      return Object.assign({}, state, {
        currentWeekday: action.currentWeekday,
        currentDate: action.currentDate,
        currentTime: action.currentTime
      });

    case "RESET_TIMER":
      if (state.mode === "work") {
        return Object.assign({}, state, {
          timer: 1500
        });
      } else {
        return Object.assign({}, state, {
          timer: 300
        });
      }
    case "TICK":
      return Object.assign({}, state, {
        timer: state.timer - 1,
        timerOn: true,
        timerStart: true
      });
    case "STOP_COUNTER":
      return Object.assign({}, state, {
        timer: state.timer,
        timerOn: false
      });
    case "HANDLE_SOUND":
      return Object.assign({}, state, {
        soundOn: !state.soundOn
      });
    default:
      return state;
  }
};

export default allReducer;
