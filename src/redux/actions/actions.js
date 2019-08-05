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
