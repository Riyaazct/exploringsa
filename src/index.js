import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

import App from "./App";

import { HelmetProvider } from "react-helmet-async";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <HelmetProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </HelmetProvider>
  </BrowserRouter>
);
