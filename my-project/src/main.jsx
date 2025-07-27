import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Context/ContextApi.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
    <ScrollToTop />
      <App />
    </CartProvider>
  </BrowserRouter>
);
