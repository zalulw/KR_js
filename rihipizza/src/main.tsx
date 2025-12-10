import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AllPizza from "./pages/AllPizza";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import OnePizza from "./pages/OnePizza";
import NewPizza from "./pages/NewPizza";
import EditPizza from "./pages/EditPizza";
import NotFoundPage from "./pages/errors/NotFoundPage";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "./components/TopNavbar";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <TopNavbar />
      <Routes>
        <Route path="/" element={<AllPizza />} />
        <Route path="/pizza/:id" element={<OnePizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    <ToastContainer theme="colored" />
  </StrictMode>
);
