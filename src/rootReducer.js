import { combineReducers } from "redux";
import { containerReducer } from "./reducers";

const rootReducer = combineReducers({
  container: containerReducer,
});

export default rootReducer;
