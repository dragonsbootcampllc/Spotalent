import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './Styles/index.css';
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
