import React from "react";
import ReactDOM from "react-dom/client";

import "../src/global.css";

import { Sidebar } from "./components/Sidebar";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes";

// forEach => não tem retorno
// e a emanuelle fede e tem chulé :)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="layout">
      <Sidebar />
      <div className="content">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
