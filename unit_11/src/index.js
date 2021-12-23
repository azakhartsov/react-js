import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux"; // создание хранилища
import { Provider } from "react-redux"; // создание провайдера, чтобы весь App имел доступ к стореджу
import rootReducer from "./reducers";
import initialState from "./store/initialState";

const store = createStore(rootReducer, initialState); // создание самого хранилища

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
