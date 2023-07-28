import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </HelmetProvider>
  </BrowserRouter>
);
