import { BrowserRouter, Routes, Route } from "react-router-dom";

import SistemaInterno from "./app/pages/SistemaInterno";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SistemaInterno />} />
      </Routes>
    </BrowserRouter>
  );
}