import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import appStore from "./utils/appStore";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { appRouter } from "./Components/Body";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <BrowserRouter basename="/demoAssignment" router={appRouter}>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
