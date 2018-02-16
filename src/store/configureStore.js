import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import planetsReducer from "../reducers/planets.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
  const store = createStore(
    combineReducers({
      planet: planetsReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
