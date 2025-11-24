import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ElementDefault } from "./screens/ElementDefault";
import { Skills } from "./screens/Skills";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ElementDefault />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
