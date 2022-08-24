import { initialState } from "./initialState";
import {
  ADDED,
  ALLCOMPLETED,
  COLORSELECTED,
  TOGGLED,
  DELETED,
  CLEARCOMPLETED,
} from "./actionTypes";

const generateTodoID = (todos) => {
  return todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1;
};

const todosReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADDED:
      const { todoText } = actions.payload;
      return [
        ...state,
        {
          id: generateTodoID(state),
          text: todoText,
          completed: false,
        },
      ];
    case TOGGLED:
      const { todoId } = actions.payload;
      return state.map((todo) => {
        if (todo.id !== todoId) {
          return todo;
        }
        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    case COLORSELECTED:
      return state.map((todo) => {
        if (todo.id !== actions.payload.todoId) {
          return todo;
        }
        return {
          ...todo,
          color: actions.payload.color,
        };
      });
    case DELETED:
      return state.filter((todo) => todo.id !== actions.payload);
    case ALLCOMPLETED:
      return state.map((todo) => {
        return {
          ...todo,
          completed: true,
        };
      });
    case CLEARCOMPLETED:
      return state.filter((todo) => todo.completed !== false);
    default:
      return state;
  }
};

export default todosReducer;
