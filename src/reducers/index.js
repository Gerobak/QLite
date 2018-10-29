import { combineReducers } from "redux";

import auth from "./auth";
import signup from "./signup";

const app = combineReducers({
  auth,
  signup
});

export default app;
