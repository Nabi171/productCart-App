import { createStore } from "redux";
import reducer from "./addCart/reducer";

const store = createStore(reducer);
export default store;