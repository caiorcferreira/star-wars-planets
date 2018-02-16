import { createStore, combineReducers } from "redux";

// Store creation
export default () => {
  const store = createStore(
    combineReducers({}),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
