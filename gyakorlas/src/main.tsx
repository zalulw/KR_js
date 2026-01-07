import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
import MainPage from "./pages/MainPage";
import "bootstrap/dist/css/bootstrap.min.css";
import InspectPizza from "./pages/InspectPizza";
import Cart from "./pages/Cart";
import EditPizza from "./pages/EditPizza";
import CreatePizza from "./pages/CreatePizza";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/pizza" element={<InspectPizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/edit-pizza" element={<EditPizza />} />
        <Route path="/new-pizza" element={<CreatePizza />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
