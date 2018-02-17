import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "../node_modules/normalize.css/normalize.css";
import './styles/base.scss';

import configureStore from "./store/configureStore";
import App from "./components/app.component";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
