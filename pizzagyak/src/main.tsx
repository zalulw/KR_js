import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import MainPage from "./pages/MainPage";
import All from "./pages/All";
import Single from "./pages/Single";
import EditPizza from "./pages/EditPizza";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/pizzak" element={<All />} />
        <Route path="/pizzak/:id" element={<Single />} />
        <Route path="/edit/:id" element={<EditPizza />} />
      </Routes>
    </BrowserRouter>
    <ToastContainer position="top-center" theme="colored" />
  </StrictMode>
);
