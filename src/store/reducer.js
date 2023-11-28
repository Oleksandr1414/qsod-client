import isUserLoggedInReducer from "./IsUserLoggedIn";
import { combineReducers } from "@reduxjs/toolkit";

const appReducer = combineReducers({
  isUserLoggedIn: isUserLoggedInReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "RESET_STORE") {
  }

  return appReducer(state, action);
};

export default rootReducer;
