import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NewPizza from "./pages/NewPizza.tsx";
import EditPizza from "./pages/EditPizza.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/new-pizza" element={<NewPizza />} />
        <Route path="/edit-pizza/:id" element={<EditPizza />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
