import React from "react";
import ReactDOM from "react-dom/client";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// aos
import "aos/dist/aos.css";
// i18next
import "./i18n";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
// react query
import { QueryClientProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
