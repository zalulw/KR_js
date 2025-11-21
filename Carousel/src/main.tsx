import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleCar from "./pages/SingleCar";
import "bootstrap/dist/css/bootstrap.min.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/auto/:id" element={<SingleCar />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
