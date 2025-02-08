import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

/**
 * Renders the root React component into the DOM.
 * @function renderApp
 * @param {HTMLElement} rootElement - The root HTML element to render the application into.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
