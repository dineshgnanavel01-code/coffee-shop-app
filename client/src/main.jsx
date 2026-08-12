/*
 * Roast & Ritual — Cream & Craft editorial theme
 * Entry point: mounts React app, injects global Tailwind styles.
 */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
