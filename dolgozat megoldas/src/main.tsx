import { StrictMode } from "react";
import { ToastContainer } from "react-toastify";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPizza from "./pages/AllPizza";
import Cart from "./pages/Cart";
import TopNavbar from "./components/TopNavbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <TopNavbar />
      <Routes>
        <Route path="/pizzak" element={<AllPizza />} />
        <Route path="/kosar" element={<Cart />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer theme="colored" />
  </StrictMode>
);
