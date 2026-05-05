import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Clientes OK</h1>} />
        <Route path="/leads" element={<h1>Leads OK</h1>} />
        <Route path="/sistema" element={<h1>Sistema OK</h1>} />
        <Route path="/conversao" element={<h1>Conversão OK</h1>} />
      </Routes>
    </BrowserRouter>
  );
}