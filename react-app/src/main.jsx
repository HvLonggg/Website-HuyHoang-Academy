import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
import "./styles/site-index.css";

/** BASE_URL có dấu / cuối; React Router basename không có / cuối */
const routerBasename =
  (import.meta.env.BASE_URL || "/").replace(/\/$/, "") || "/";

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <BrowserRouter basename={routerBasename === "/" ? undefined : routerBasename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
