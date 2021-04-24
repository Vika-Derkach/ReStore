import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers";

const logMiddleware = ({ getState }) => (dispatch) => (action) => {
  console.log(action.type, getState());
  dispatch(action);
};
const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === "string") {
    return dispatch({
      type: action,
    });
  }
};

const store = createStore(
  reducer,
  applyMiddleware(stringMiddleware, logMiddleware)
);

store.dispatch("HELLO_WORLD");

export default store;
