import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import GlobalCss from "./global.css";
import { AuthProvider } from "./context/AuthContext/AuthProvider";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalCss />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
