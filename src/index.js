import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/index";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import ModalProvayder from "./components/ModalProvayder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvayder>
        <App />
      </ModalProvayder>
    </BrowserRouter>
  </React.StrictMode>
);
