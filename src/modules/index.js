import { combineReducers } from "redux";
import categories from "./categories";
import config from "./config";

const rootReducer = combineReducers({ categories, config });

export default rootReducer;
