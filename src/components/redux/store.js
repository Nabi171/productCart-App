import { createStore } from "redux";
import reducer from "./addCart/reducer";
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducer, composeWithDevTools());
export default store;