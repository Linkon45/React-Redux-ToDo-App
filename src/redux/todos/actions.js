import {
  ADDED,
  ALLCOMPLETED,
  COLORSELECTED,
  TOGGLED,
  DELETED,
  CLEARCOMPLETED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: {
      todoText,
    },
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: { todoId },
  };
};

export const colorSelected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId: todoId,
      color: color,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
