import { combineReducers } from "redux";

import auth from "./auth";
import signup from "./signup";
import thread from "./thread";

const app = combineReducers({
  auth,
  signup,
  thread
});

export default app;
