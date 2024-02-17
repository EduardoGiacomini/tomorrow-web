import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { MaterialUIContext } from "./contexts/material-ui.tsx";
import "./assets/fonts.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MaterialUIContext>
      <App />
    </MaterialUIContext>
  </React.StrictMode>
);
