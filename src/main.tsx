import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

/*
  Acá uso HashRouter para que GitHub Pages no rompa las rutas.
  Ej: /#/coworking funciona siempre y no da 404 al refrescar.
*/
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
