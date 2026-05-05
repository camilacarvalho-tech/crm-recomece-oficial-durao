import { BrowserRouter, Routes, Route } from "react-router-dom";

function Clientes() {
  return <h1>Clientes OK</h1>;
}

function Leads() {
  return <h1>Leads OK</h1>;
}

function Sistema() {
  return <h1>Sistema OK</h1>;
}

function Conversao() {
  return <h1>Conversão OK</h1>;
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Clientes />} />
        <Route path="/leads" element={<Leads />} />
        <Route path="/sistema" element={<Sistema />} />
        <Route path="/conversao" element={<Conversao />} />
      </Routes>
    </BrowserRouter>
  );
}