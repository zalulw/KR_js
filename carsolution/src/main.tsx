import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-bootstrap";
import AllCars from "./pages/AllCars";
import TopNavbar from "./components/Navbar";
import Cart from "./pages/Cart";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<AllCars />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>
);
