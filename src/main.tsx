import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Destinations from "./pages/destinations";
import Crew from "./pages/crew";
import Transport from "./pages/transport";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="/destination" element={<Destinations />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/transport" element={<Transport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
