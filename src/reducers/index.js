import { combineReducers } from "redux";

import { taskTwo } from './taskTwoReducer';
import { taskFour } from "./taskFourReducer";

export const rootReducer = combineReducers({taskTwo, taskFour});