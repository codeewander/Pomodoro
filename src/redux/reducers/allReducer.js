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
  filter: "all"
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
    case "TIMER_START":
      return Object.assign({}, state, {
        timerOn: true
      });
    default:
      return state;
  }
};

export default allReducer;
