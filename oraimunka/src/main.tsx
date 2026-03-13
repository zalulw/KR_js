import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPizza from "./pages/AllPizza";
import Cart from "./pages/Cart";
import NotFound from "./pages/Errors/NotFound";
import Login from "./pages/Login";
import CreatePizza from "./pages/CreatePizza";
import SinglePizza from "./pages/SinglePizza";
import EditPizza from "./pages/EditPizza";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllPizza />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-pizza" element={<CreatePizza />} />
        <Route path="/pizzak/:id" element={<SinglePizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer />
  </StrictMode>,
);
