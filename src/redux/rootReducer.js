import todosReducer from "./todos/reducer";
import filtersReducer from "./filters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filtersReducer,
});
export default rootReducer;
