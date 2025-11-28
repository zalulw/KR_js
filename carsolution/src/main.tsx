import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
import AllCars from "./pages/AllCars";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AllCars />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
